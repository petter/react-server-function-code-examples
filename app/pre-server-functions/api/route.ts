import { db } from "@/app/db";

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const id = await db.insert(title, content);
  return Response.json({ id });
}
