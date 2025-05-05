"use client";
import Link from "next/link";
import { useActionState } from "react";

import { createPost } from "./action";

export default function ActionExample() {
  const [createdPostId, action, isSubmitting] = useActionState(
    createPost,
    null
  );

  return (
    <form action={action}>
      {createdPostId && (
        <div>
          <h2>Post created</h2>
          <p>
            Check it out at{" "}
            <Link href={`/post/${createdPostId}`}>/post/{createdPostId}</Link>
          </p>
        </div>
      )}
      <input type="text" name="title" />
      <textarea name="content" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
