"use server";
import db from "@/lib/db";
import "server-only";
export default async function createCategory({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  try {
    const ProductType = await db.productType.findUnique({
      where: {
        name: type,
      },
    });
    if (!ProductType) return false;
    await db.category.create({
      data: {
        name: name,
        productTypeId: ProductType.id,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
}
