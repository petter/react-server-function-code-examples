import { useState } from "react";

export default function SimpleApiPage() {
  const [name, setName] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/simple/classic/api", {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    setName("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
