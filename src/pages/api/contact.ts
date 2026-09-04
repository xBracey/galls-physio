import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface IContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

interface IEmailContent {
  subject: string;
  text: string;
  html: string;
}

const RECIPIENT_EMAIL = "firstteamphysiotherapy@outlook.com";
const RESEND_API_URL = "https://api.resend.com/emails";

const escapeHtml = (text: string): string =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const buildEmail = (
  name: string,
  email: string,
  message: string
): IEmailContent => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const subject = `New website enquiry from ${name}`;

  const text = [
    "NEW WEBSITE ENQUIRY",
    "",
    "You have received a new enquiry through the website contact form.",
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
    "---",
    `Reply directly to this email to respond to ${name}.`,
    "Sent via the website contact form.",
  ].join("\n");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="x-apple-disable-message-reformatting">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f4f4f5;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;background-color:#ffffff;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background-color:#0f766e;padding:20px 32px;">
              <h1 style="margin:0;font-size:18px;font-weight:600;color:#ffffff;letter-spacing:0.01em;">New Website Enquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 24px 0;color:#3f3f46;font-size:15px;line-height:1.6;">
                You have received a new enquiry through the website contact form.
              </p>

              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;margin:24px 0;">
                <tr>
                  <td style="padding:10px 14px;background-color:#f4f4f5;border:1px solid #e4e4e7;font-weight:600;font-size:13px;color:#52525b;width:100px;">Name</td>
                  <td style="padding:10px 14px;border:1px solid #e4e4e7;font-size:15px;color:#18181b;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 14px;background-color:#f4f4f5;border:1px solid #e4e4e7;font-weight:600;font-size:13px;color:#52525b;">Email</td>
                  <td style="padding:10px 14px;border:1px solid #e4e4e7;font-size:15px;color:#18181b;">
                    <a href="mailto:${safeEmail}" style="color:#0f766e;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
              </table>

              <h2 style="margin:32px 0 12px 0;font-size:12px;font-weight:600;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;">Message</h2>
              <div style="padding:16px 20px;background-color:#fafafa;border-left:3px solid #0f766e;font-size:15px;line-height:1.6;color:#18181b;white-space:pre-wrap;">${safeMessage}</div>

              <p style="margin:32px 0 0 0;padding:14px 18px;background-color:#ecfeff;border-radius:6px;font-size:14px;color:#0e7490;line-height:1.5;">
                <strong style="color:#155e75;">To reply:</strong> hit reply in your email client — your response will go directly to ${safeName}.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color:#fafafa;padding:14px 32px;border-top:1px solid #e4e4e7;">
              <p style="margin:0;font-size:12px;color:#71717a;text-align:center;">
                Sent via the website contact form
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim();

  return { subject, text, html };
};

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as
      | { message?: string; name?: string }
      | undefined;
    if (data?.message) {
      return `${data.message}${data.name ? ` (${data.name})` : ""}`;
    }
    return error.message;
  }
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

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    const missing = [
      !apiKey && "RESEND_API_KEY",
      !fromEmail && "RESEND_FROM_EMAIL",
    ]
      .filter(Boolean)
      .join(" and ");
    res
      .status(500)
      .send({ error: `Server configuration error: missing ${missing}` });
    return;
  }

  const { name, email, message } = (req.body ?? {}) as IContactRequestBody;

  if (!name || !email || !message) {
    res.status(400).send({ error: "Missing required fields" });
    return;
  }

  try {
    const { subject, text, html } = buildEmail(name, email, message);

    await axios.post(
      RESEND_API_URL,
      {
        from: fromEmail,
        to: [RECIPIENT_EMAIL],
        reply_to: email,
        subject,
        text,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    res.status(200).send({});
  } catch (error) {
    console.error("Failed to send contact email", error);
    res.status(500).send({ error: getErrorMessage(error) });
  }
}
