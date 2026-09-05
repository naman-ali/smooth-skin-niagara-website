"use client";

import Link from "next/link";
import {
  ClipboardList,
  LayoutDashboard,
  Mail,
  Phone,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Client Forms", href: "/admin/client-form", icon: ClipboardList },
  { title: "Clients", href: "/admin/clients", icon: Users },
  { title: "Contacts", href: "/admin/contacts", icon: Phone },
  { title: "Leads", href: "/admin/leads", icon: Mail },
];

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <p className="px-2 font-display text-lg font-semibold">Admin</p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    render={
                      <Link
                        href={item.href}
                        className="flex items-center gap-2"
                      >
                        <Icon className="size-4 shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="min-w-0 overflow-x-hidden">
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Admin</span>
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
