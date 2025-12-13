"use client";
import { useEffect, useState } from "react";
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
import createProductType from "@/actions/createProductType";
import { toast } from "sonner";
import fetchProductTypes from "@/actions/fetchProductTypes";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import createCategory from "@/actions/createCategory";

const formSchema = z.object({
  name: z.string().min(3),
  type: z.string().nonempty(),
});

export default function AddCategory() {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "",
    },
  });
  const addCategory = useMutation({
    mutationFn: createCategory,
    onSuccess: (res) => {
      if (res) {
        toast.success("Category added Successfully", {
          style: { color: "green", fontSize: "16px" },
        });

        queryClient.invalidateQueries({
          queryKey: ["categories"],
        });
      } else {
        toast.warning("Category already Exists", {
          style: { color: "#ff3333", fontSize: "17px" },
        });
      }

      form.reset();
    },
  });

  const { data: productTypes, status } = useQuery({
    queryKey: ["product-types"],
    queryFn: fetchProductTypes,
  });

  return (
    <SheetContent className=" px-5">
      <SheetHeader>
        <SheetTitle>Add Category</SheetTitle>
        <SheetDescription>
          You can the category of a group of products
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form
          className="space-y-8"
          onSubmit={form.handleSubmit((data) => addCategory.mutate(data))}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Name</FormLabel>
                <FormControl>
                  <Input placeholder="Totes" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the category.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Type</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="type" />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes &&
                        productTypes.map((item) => (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormDescription>
                  The type of product this category belongs to
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Add Category
          </Button>
        </form>
      </Form>
    </SheetContent>
  );
}
