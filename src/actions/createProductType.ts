"use server";
import db from "@/lib/db";
import "server-only";
interface ProductTypeData {
  name: string;
}
export default async function createProductType(
  productTypeData: ProductTypeData
) {
  try {
    const productType = await db.productType.create({
      data: {
        name: productTypeData.name,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
}
