import express from "express";
import auth from "../routes/auth";
import { env } from "bun";
import mail from "../utils/mail";
import cookies from "cookie-parser";
import cors from "cors";

const app = express();

mail.init();

app.use(cors());
app.use(cookies());
app.use(express.json());
app.use(express.urlencoded());

app.use("/avatars", express.static("avatars"));

app.use("/auth", auth);

app.listen(env.PORT, (err) => {
  if (err) throw err;
  console.log(`Diversy server is running on port ${env.PORT}`);
});
