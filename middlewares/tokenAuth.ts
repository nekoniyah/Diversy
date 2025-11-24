import { Handler } from "express";

const tokenAuth: Handler = async (req, res, next) => {
  let token = req.headers.authorization as string | undefined;
  let fromCookie = false;

  if (req.cookies["auth_token"]) {
    fromCookie = true;
    token = req.cookies["auth_token"];
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

  res.locals.token = token;
  next();
};

export default tokenAuth;
