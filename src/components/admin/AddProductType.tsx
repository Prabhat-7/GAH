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
import createProductType from "@/actions/createProductType";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(3),
});

export default function AddProductType() {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const createProductTypeMutation = useMutation({
    mutationFn: createProductType,
    onSuccess: (res) => {
      if (res) {
        toast.success("Product Type added Successfully", {
          style: { color: "green", fontSize: "16px" },
        });

        queryClient.invalidateQueries({
          queryKey: ["product-types"],
        });
      } else {
        toast.warning("Product Type already Exists", {
          style: { color: "#ff3333", fontSize: "17px" },
        });
      }

      form.reset();
    },
  });

  return (
    <SheetContent className=" px-5">
      <SheetHeader>
        <SheetTitle>Add Product Type</SheetTitle>
        <SheetDescription>
          You can add the type of a product here
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form
          className=" space-y-8"
          onSubmit={form.handleSubmit((data) =>
            createProductTypeMutation.mutate(data)
          )}
        >
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Type</FormLabel>
                <FormControl>
                  <Input placeholder="Bags" {...field} />
                </FormControl>
                <FormDescription>
                  This is the name of the product type.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Add Product Type
          </Button>
        </form>
      </Form>
    </SheetContent>
  );
}
