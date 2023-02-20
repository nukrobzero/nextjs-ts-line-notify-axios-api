import axios from "axios";

interface SendLineNotifyParams {
  message: string;
}

export async function sendLineNotify({ message }: SendLineNotifyParams): Promise<void> {
  const url = "https://notify-api.line.me/api/notify";
  const token = process.env.LINE_NOTIFY_ACCESS_TOKEN;

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
    },
  };

  const data = { message };

  try {
    const response = await axios.post(url, data, config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
