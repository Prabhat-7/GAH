"use client";
import Image from "next/image";
import type { Bag } from "./featured";
import { Heart, Star, StarIcon } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { MdStarRate } from "react-icons/md";

export default function BagCard({ bag }: { bag: Bag }) {
  const [Bag, setBag] = useState<Bag>(bag);
  return (
    <div className=" p-3">
      <Card className="bg-transparent border-none shadow-none">
        <CardHeader>
          <div className="rounded-md relative group">
            <Image
              src={Bag.image}
              alt={Bag.name}
              width={300}
              height={300}
              className="rounded-lg shadow-sm  shadow-muted-foreground group-hover:scale-105 group-hover:shadow-md transition-all duration-300 "
            />
            <div className="">
              <button
                onClick={() => {
                  setBag((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
                }}
                className="absolute z-10 top-2 right-4  group-hover:opacity-100 opacity-0 hover:bg-accent  transition-all duration-300  text-foreground/80 bg-background rounded-full p-2"
              >
                <Heart
                  className="size-4.5"
                  {...(Bag.isFavorite ? { fill: "black" } : {})}
                />
              </button>

              <button className="absolute z-10 bottom-3 right-4 group-hover:opacity-100 opacity-0  hover:bg-primary/80 text-accent-foreground/80 bg-primary font-bold rounded-md p-1 px-3 transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className=" flex items-center justify-between">
            <p className=" font-bold text-accent">{Bag.category}</p>
            <div className=" text-yellow-500 flex items-center justify-center gap-2">
              <MdStarRate />
              <p className="font-bold text-primary">{Bag.rating}</p>
            </div>
          </div>
          <p className="text-xl font-bold pt-1">{Bag.name}</p>
        </CardContent>
        <CardFooter className="">
          <p className=" text-xl font-bold text-primary ">Rs {Bag.price}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
