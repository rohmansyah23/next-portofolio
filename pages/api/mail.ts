import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `${name.toUpperCase()} sent you a message from Portfolio`,
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: "Your message was sent successfully." });
      } else {
        res.status(500).json({ message: "There was an error sending your message." });
      }
    } catch (err) {
      res.status(500).json({ message: `There was an error sending your message. ${err}` });
    }
  }
}