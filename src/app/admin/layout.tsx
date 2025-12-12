import AdminSidebar from "@/components/admin/AdminSideBar";
import ToggleMode from "@/components/ToggleMode";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className="flex-1 w-full">
        <div className="py-3 px-3 flex items-center w-full justify-between ">
          <SidebarTrigger />
          <ToggleMode />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
