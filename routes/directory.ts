import { Router } from "express";
import axios from "axios";
import Forks from "../models/Forks";
import { InstanceInfo } from "../utils/instance-fetcher";

const directory = Router();

directory.get("/", async (req, res) => {
  let allForks = await Forks.findAll();

  let instancesInfos: InstanceInfo[] = [];

  for (let fork of allForks) {
    try {
      let response = await axios.get(`${fork.get("url")}/health`, {
        timeout: 5000,
      });

      if (response.status === 200) {
        instancesInfos.push(response.data);
      }
    } catch (error) {
      // Skip forks that are unreachable or return errors
      continue;
    }
  }

  res.json(instancesInfos);
});

directory.post("/register", async (req, res) => {
  let body = req.body;

  if (!body.url) return res.status(400).json({ message: "URL is required" });

  // Check if fork is valid

  try {
    let response = await axios.get(`${body.url}/health`, { timeout: 5000 });

    if (response.status !== 200) {
      return res.status(400).json({ message: "Invalid fork URL" });
    }

    let fork = await Forks.create({ url: body.url });
    await fork.save();

    res.status(201).json({ message: "Fork registered successfully" });
  } catch (error: any) {
    res
      .status(500)
      .json({ message: "Error registering fork", error: error.message });
  }
});

export default directory;
