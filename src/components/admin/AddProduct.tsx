"use client";
import React, { useEffect, useState } from "react";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import findAllCategories from "@/actions/findAllCategories";

const formSchema = z.object({
  name: z.string(),
  category: z.string(),
  imageUrl: z.string(),
});

export default function AddProduct() {
  const [categories, setCategories] = useState<{ name: string; id: string }[]>(
    []
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      imageUrl: "",
    },
  });
  const addProduct = async () => {};

  useEffect(() => {
    const fetchCategories = async () => {
      const AllCategories = await findAllCategories();
      if (!AllCategories) return;
      setCategories(AllCategories);
    };
    fetchCategories();
  }, []);

  return (
    <SheetContent className=" px-5">
      <SheetHeader>
        <SheetTitle>Add Product</SheetTitle>
        <SheetDescription>
          You can add a product by providing the following credentials
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form className=" space-y-8" onSubmit={form.handleSubmit(addProduct)}>
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="David" {...field} />
                </FormControl>
                <FormDescription>
                  This is the public display name of the product
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <div className=" relative">
                    <span className="absolute left-2 top-1.5 text-md">Rs.</span>
                    <Input className="pl-8" placeholder="999" {...field} />
                  </div>
                </FormControl>
                <FormDescription>This is your email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormDescription>This is your password</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((item) => (
                        <SelectItem key={item.id} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormDescription>
                  Only verified users can be admins
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Add User
          </Button>
        </form>
      </Form>
    </SheetContent>
  );
}
