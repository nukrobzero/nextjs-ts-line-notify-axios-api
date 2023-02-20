import { useState } from "react";
import { sendLineNotify } from "./api/api";

export default function LineNotifyForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendLineNotify({ message });
    console.log({ message });
    setMessage("");
  }

  return (
    <>
      <h1>nextjs-ts-line-notify</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
