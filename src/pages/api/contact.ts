import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: "firstteamphysiotherapy@gmail.com", // Change to your recipient
      from: "firstteamphysiotherapycontact@gmail.com", // Change to your verified sender
      subject: `Online booking enquiry - ${name}`,
      html: `
<p>An online booking enquiry has been made by ${name} with the following message:</p>
<p>${message}</p>
<p>To confirm or reject the booking reply back to the following email ${email}</p>
  `,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
        res.status(200).send({});
      })
      .catch(error => {
        console.error(error);
        res.status(400).send({});
      });
  } else {
    console.log("get");

    // Handle any other HTTP method
  }
}
