"use server";

import { db } from "../db";

export async function createPost(_: string | null, formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");
  return await db.insert(title as string, content as string);
}
