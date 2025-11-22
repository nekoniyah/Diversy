import Sendgrid from "@sendgrid/mail";
import { env } from "bun";
import { code } from "./token";
import Code from "../models/Code";

export default {
  init: () => {
    Sendgrid.setApiKey(env.SENDGRID_API_KEY!);
  },
  sendCodeVerification: async (email: string) => {
    let _code = code();

    let c = await Code.create({
      email,
      code: _code,
    });

    await c.save().then(async () => {
      await Sendgrid.send({
        from: { email: "auth@diversy.co", name: "Diversy Auth" },
        text: `Your diversy code is ${_code}.`,
        subject: `Your diversy verification code.`,
        to: { email },
      });
    });
  },
};
