"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function PreServerFunctions() {
  const [isLoading, setIsLoading] = useState(false);
  const [createdPostId, setCreatedPostId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/pre-server-functions/api", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setCreatedPostId(data.id);
    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit}>
      {createdPostId && (
        <div>
          <h2>Post created</h2>
          <p>
            Check it out at{" "}
            <Link href={`/post/${createdPostId}`}>/post/{createdPostId}</Link>
          </p>
        </div>
      )}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
