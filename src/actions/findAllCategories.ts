"use server";
import db from "@/lib/db";
import "server-only";

export default async function findAllCategories() {
  const categories = await db.category.findMany();
  return categories;
}
