import { Router } from "express";
import { env } from "bun";
import User from "../models/User";

const stats = Router();

stats.get("/users-count", async (req, res) => {
  try {
    const userCount = await User.count();

    res.status(200).json({ userCount });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default stats;
