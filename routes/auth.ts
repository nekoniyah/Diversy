import { Request, Response, Router } from "express";

import Code from "../models/Code";
import User from "../models/User";

import mail from "../utils/mail";
import token from "../utils/token";

import { env } from "bun";
import { exclude } from "../utils/db";

const auth = Router();

let getToken = (req: Request, res: Response) => {
  let token = req.headers.authorization as string | undefined;
  let fromCookie = false;
  if (req.cookies.token) {
    fromCookie = true;
    token = req.cookies.token;
  }

  if (!token) {
    res.status(403).json({ message: "No token provided." });
    return;
  }

  if (!fromCookie) {
    let isBearer = token.split(" ")[0] === "Bearer";

    if (!isBearer) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }

    token = token.split(" ")[1];
  }

  return token;
};

auth.get("/me", async (req, res) => {
  let token = getToken(req, res)!;

  let user = await User.findOne({ where: { token } });

  if (!user) return res.status(404).json({ message: "User not found" });

  res.cookie("auth_token", user.get("token"));
  res.status(200).json(user.get());
});

auth.get("/:id", async (req, res) => {
  let id = req.params.id;

  let user = await User.findByPk(parseInt(id));

  if (!user)
    return res.status(404).json({
      message: "User not found",
    });

  let data = exclude(user.get(), ["token", "email"]);

  res.json(data);
});

auth.post("/logout", async (req, res) => {
  getToken(req, res);
  res.clearCookie("token");
});

auth.post("/validate", async (req, res) => {
  try {
    const { code, email } = req.body;

    let codeRow = await Code.findOne({ where: { code } });
    if (!codeRow) {
      res.status(500).json({
        message: "Invalid code.",
      });
      return;
    }

    if (codeRow.get("email") !== email) {
      res.status(500).json({
        message: "Invalid email.",
      });
      return;
    }

    let u = await User.findOne({ where: { email } });

    if (u) {
      res.status(200).json({
        message: "Logged In!",
        data: {
          token: u.get("token"),
        },
      });
    } else {
      let t = token();
      let user = await User.create({
        email,
        token: t,
        avatar: `${env.API_ROOT!}/avatars/defaults/1.png`,
      });

      await user.save();

      res.status(200).json({
        message: "Registered!",
        data: {
          token: t,
        },
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Unexpected error. Please provide an email and the code.",
    });
  }
});

auth.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email)
      return res.status(500).json({
        message: "Please provide an email.",
      });

    await mail.sendCodeVerification(email);

    res.status(200).json({
      message: `Code sent!`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Unexpected error. Please provide an email.",
    });
  }
});

export default auth;
