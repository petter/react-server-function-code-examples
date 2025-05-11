"use server";

import { revalidatePath } from "next/cache";

export async function moveCard(prevState: number, to: number) {
  console.log("moving card from ", prevState, "to", to);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  revalidatePath("/kanban-board/without-optimistic");
  return to;
}
