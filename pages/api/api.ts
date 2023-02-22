import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "https://notify-api.line.me/api/notify";
  const token = process.env.LINE_NOTIFY_ACCESS_TOKEN;
  const message = req.body.message;

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };

  const data = `message=${message}`;

  try {
    const response = await axios.post(url, data, config);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json(error);
  }
}
