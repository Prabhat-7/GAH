import Link from "next/link";
import { Button } from "./ui/button";
import { Heart, Search, SearchIcon, ShoppingBag } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Popover } from "./ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/shop",
    label: "Shop",
  },
  {
    href: "/about",
    label: "About",
  },
];
export default function NavBar() {
  return (
    <div className=" py-3 pl-[30vw] flex gap-15">
      <ol className="flex items-baseline p-y-4 text-lg justify-center gap-10">
        {links.map((item, index) => (
          <li key={index} className=" hover:text-amber-800">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
      <div className="flex gap-4 ml-10">
        <Button className="bg-transparent! hover:bg-secondary rounded-lg transition-colors">
          <SearchIcon className="size-6 text-primary" />
        </Button>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-transparent! hover:bg-secondary rounded-lg transition-colors">
              <Heart className=" size-6 text-primary" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="bg-background border-2 border-primary rounded-md p-3 max-h-[80vh]">
              <h1 className="text-lg font-bold">Favourites</h1>

              {/* here u need 3 tables user , bags and (userid, favBagId) and to fetch 
              merge the last 2 tables and display the bag content likewise  */}
              <p>No favourites added yet.</p>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex gap-0">
          <Button className="bg-transparent! hover:bg-secondary rounded-lg transition-colors relative ">
            <ShoppingBag className=" size-6 text-primary" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground font-semibold">
              1
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
