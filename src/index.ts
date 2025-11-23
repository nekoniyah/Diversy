import express from "express";
import auth from "../routes/auth";
import { env } from "bun";
import mail from "../utils/mail";
import cookies from "cookie-parser";
import cors from "cors";
import axios from "axios";
import manifest from "../instance/manifest.json";
import path from "path";

const DIRECTORY_SERVER_URL = env.DIRECTORY_SERVER_URL;

if (!DIRECTORY_SERVER_URL) {
  throw new Error(
    "DIRECTORY_SERVER_URL is not defined in environment variables"
  );
}

const app = express();

mail.init();

app.use(cors());
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded());

app.use("/avatars", express.static("avatars"));
app.use("/auth", auth);

app.use(
  "/assets",
  express.static(path.join(__dirname, "..", "instance", "assets"))
);

if (env.IS_DIRECTORY_AUTHORITY === "true") {
  let { default: directory } = await import("../routes/directory");
  app.use("/directory", directory);
}

app.get("/health", (req, res) => {
  res.status(2000).json({
    status: "ok",
    manifest,
    images: {
      logo: `${env.API_ROOT}/assets/logo.png`,
      icon: `${env.API_ROOT}/assets/icon.png`,
    },
  });
});

app.listen(env.PORT, (err) => {
  if (err) throw err;

  if (env.IS_DIRECTORY_AUTHORITY !== "true") {
    axios.post(`${DIRECTORY_SERVER_URL}/directory/register`, {
      url: env.API_ROOT,
    });
  }

  console.log(`Diversy server is running on port ${env.PORT}`);
});
