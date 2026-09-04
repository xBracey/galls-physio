import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";

interface IContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

const RECIPIENT_EMAIL = "firstteamphysiotherapy@outlook.com";
const SENDER_EMAIL = process.env.GMAIL_USER;

const transporter: Transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: SENDER_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  return "Unknown error";
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).send({ error: "Method not allowed" });
    return;
  }

  const { name, email, message } = (req.body ?? {}) as IContactRequestBody;

  if (!name || !email || !message || !SENDER_EMAIL) {
    res.status(400).send({ error: "Missing required fields" });
    return;
  }

  try {
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Online booking enquiry - ${name}`,
      html: `
<p>An online booking enquiry has been made by ${name} with the following message:</p>
<p>${message}</p>
<p>To confirm or reject the booking reply back to the following email ${email}</p>
  `,
    });

    res.status(200).send({});
  } catch (error) {
    console.error("Failed to send contact email", error);
    res.status(500).send({ error: getErrorMessage(error) });
  }
}
