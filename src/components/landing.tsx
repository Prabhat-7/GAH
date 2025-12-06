import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex items-center p-3 gap-30 m-4">
      <div className="flex flex-col w-[40vw] pt-10 gap-10">
        <div className="gap-2 flex flex-col">
          <p className="text-primary text-lg font-bold ">DISCOVER ELEGANCE</p>
          <h1 className="text-5xl font-bold text-foreground">
            {" "}
            LUXURY BAGS FOR EVERY MOMENT
          </h1>
        </div>
        <p className=" text-lg text-foreground">
          Elevate your style with our curated collection of premium ladies bags.
          From timeless classics to modern designs, find the perfect accessory
          for every occasion.
        </p>
        <div className="flex items-center justify-start  gap-10 ">
          <Button variant={"rossy"} className="p-6 border-2 border-rossy">
            <Link href={"/shop"}>
              <p className=" text-lg font-bold">Shop Now</p>
            </Link>
          </Button>
          <Button
            variant={"rossy_outline"}
            className="p-6 border-2 border-rossy"
          >
            <Link href={"/shop"}>
              <p className="text-lg font-bold  ">Explore Collection</p>
            </Link>
          </Button>
        </div>
      </div>
      <div className="pt-4 p-5">
        <Image
          src="/landing_bag.png"
          alt="Landing Bag"
          width={600}
          height={600}
          className=" rounded-3xl"
        />
      </div>
    </div>
  );
}
