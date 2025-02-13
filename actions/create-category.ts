"use server";
import "server-only";
import { db } from "~/utils/db";
import { createId } from "@paralleldrive/cuid2";

export async function createCategory(name: string) {
  await db.query("INSERT INTO categories (id, name) VALUES ($1, $2)", [
    createId(),
    name,
  ]);
}
