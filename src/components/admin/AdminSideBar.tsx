import React from "react";
import {
  Calendar,
  Handbag,
  Home,
  Inbox,
  Plus,
  Search,
  Settings,
  User,
} from "lucide-react";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import UserPanel from "../UserPanel";
import { Sheet, SheetTrigger } from "../ui/sheet";
import AddUser from "./AddUser";
import AddProduct from "./AddProduct";
import AddProductType from "./AddProductType";

const applicationMenu = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/admin/inbox",
    icon: Inbox,
  },

  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
const productMenu = [
  {
    title: "See All Products",
    icon: Handbag,
    url: "/admin/products",
  },
  {
    title: "Add Product",
    icon: Plus,
    url: "#",
  },
  {
    title: "Add Category",
    icon: Plus,
    url: "#",
  },
  {
    title: "Add Product Type",
    icon: Plus,
    url: "#",
  },
];
const userMenu = [
  {
    title: "See All Users",
    icon: User,
    url: "/admin/users",
  },
  {
    title: "Add user",
    icon: Plus,
    url: "#",
  },
];

export default function AdminSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarContent>
          {/* Application Menu */}
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {applicationMenu.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Product Menu */}
          <SidebarGroup>
            <SidebarGroupLabel>Products</SidebarGroupLabel>
            <SidebarGroupContent>
              {/* See All Products */}
              <SidebarMenuItem key={productMenu[0].title}>
                <SidebarMenuButton asChild>
                  <Link href={productMenu[0].url}>
                    {React.createElement(productMenu[0].icon)}
                    <span>{productMenu[0].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add Product */}
              <SidebarMenuItem key={productMenu[1].title}>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={productMenu[1].url}>
                          {React.createElement(productMenu[1].icon)}
                          {productMenu[1].title}
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddProduct />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add Category */}
              <SidebarMenuItem key={productMenu[2].title}>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={productMenu[2].url}>
                          {React.createElement(productMenu[2].icon)}
                          {productMenu[2].title}
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddProductType />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add Product Type */}
              <SidebarMenuItem key={productMenu[3].title}>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={productMenu[3].url}>
                          {React.createElement(productMenu[3].icon)}
                          {productMenu[3].title}
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddProductType />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* User Menu */}
          <SidebarGroup>
            <SidebarGroupLabel>Users</SidebarGroupLabel>
            <SidebarGroupContent>
              {/* See  all User */}
              <SidebarMenuItem key={userMenu[0].title}>
                <SidebarMenuButton asChild>
                  <Link href={userMenu[0].url}>
                    {React.createElement(userMenu[0].icon)}
                    <span>{userMenu[0].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Add User */}
              <SidebarMenuItem key={userMenu[1].title}>
                <SidebarMenuButton asChild>
                  <Sheet>
                    <SheetTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href={userMenu[1].url}>
                          {React.createElement(userMenu[1].icon)}
                          {userMenu[1].title}
                        </Link>
                      </SidebarMenuButton>
                    </SheetTrigger>
                    <AddUser />
                  </Sheet>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel></SidebarGroupLabel>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <UserPanel />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
