"use server";
import db from "@/lib/db";
import "server-only";
export default async function fetchProductTypes() {
  const productTypes = await db.productType.findMany();
  return productTypes;
}
