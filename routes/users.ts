import { Router } from "express";

import User from "../models/User";
import { exclude } from "../utils/db";

const users = Router();

users.get("/:id", async (req, res) => {
  let id = req.params.id;

  let user = await User.findOne({ where: { id } });

  if (!user) {
    user = await User.findOne({ where: { username: id } });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }
  }

  let data = exclude(user.get(), ["token", "email"]);

  res.json(data);
});

users.get("/", async (req, res) => {
  let users = await User.findAll();

  let data = users.map((user) => exclude(user.get(), ["token", "email"]));

  res.json(data);
});

export default users;
