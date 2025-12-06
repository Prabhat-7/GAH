import BagCard from "./bag_card";
import { Button } from "./ui/button";
import Link from "next/link";

export interface Bag {
  id: number;
  category: "TOTE BAGS" | "CROSSBODY" | "CLUTCHES" | "BACKPACKS";
  name: string;
  image: string;
  price: string;
  isFavorite?: boolean;
  rating?: number;
}
export default function Featured() {
  const bags: Bag[] = [
    {
      id: 1,
      category: "TOTE BAGS",
      name: "Elegant Leather Tote",
      image: "/bags/bag1.png",
      price: "9999",
      isFavorite: true,
      rating: 4.8,
    },
    {
      id: 2,
      category: "CROSSBODY",
      name: "Chic Crossbody Bag",
      image: "/bags/bag2.png",
      price: "12999",
      isFavorite: false,
      rating: 4.9,
    },
    {
      id: 3,
      category: "CLUTCHES",
      name: "Classic Satchel",
      image: "/bags/bag3.png",
      price: "8999",
      isFavorite: true,
      rating: 4.7,
    },
    {
      id: 4,
      category: "BACKPACKS",
      name: "Modern Backpack",
      image: "/bags/bag4.png",
      price: "13999",
      isFavorite: false,
      rating: 4.6,
    },
  ];
  return (
    <div className=" p-10 m-4 border-t-2  bg-secondary/30 rounded-xl">
      <div className="">
        <p className="flex justify-center items-center  text-sm text-yellow-600  ">
          CURATED SELECTION
        </p>
        <h1 className="text-3xl font-bold flex items-center justify-center">
          Featured Collection
        </h1>
        <div className="grid grid-cols-4">
          {bags.map((bag, index) => (
            <BagCard key={index} bag={bag} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button variant={"rossy"} className=" font-bold p-2 px-4 text-lg">
          <Link href={"/shop"}>View All Products</Link>
        </Button>
      </div>
    </div>
  );
}
