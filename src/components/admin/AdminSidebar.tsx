"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { ArrowLeft, ClipboardList, LayoutDashboard, Phone } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { title: "Client Forms", href: "/admin/client-form", icon: ClipboardList },
  { title: "Contacts", href: "/admin/contacts", icon: Phone },
];

function isActive(pathname: string, href: string) {
  if (pathname === href) return true;
  if (href !== "/admin") {
    return pathname.startsWith(`${href}/`);
  }
  return false;
}

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "270px",
          "--sidebar": "#fafaf7",
          "--sidebar-foreground": "#32342F",
        } as React.CSSProperties
      }
    >
      <Sidebar className="border-r border-black/5 bg-[#fafaf7]">
        <SidebarHeader className="flex-row items-center justify-center gap-0 border-b border-black/5 px-6 py-7">
          <img
            src="/assets/logo.png"
            alt="Smooth Skin Niagara"
            className="h-auto w-[195px]"
          />
        </SidebarHeader>

        <SidebarContent className="px-4 py-6">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex h-12 items-center gap-3 rounded-xl px-4 text-[15px] font-medium transition-colors duration-200",
                    active
                      ? "bg-[#E8ECDF] text-[#53613F] font-semibold"
                      : "text-[#32342F] hover:bg-black/[0.035]",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 shrink-0 transition-colors",
                      active ? "text-[#53613F]" : "text-[#5d615d]",
                    )}
                  />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </SidebarContent>

        <SidebarFooter className="border-t border-black/5 px-4 py-4">
          <Link
            href="/"
            className="flex h-12 items-center gap-3 rounded-xl px-4 text-sm text-[#5d615d] transition-colors hover:bg-black/[0.035]"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>Back to Website</span>
          </Link>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="min-w-0 overflow-x-hidden">
        <header className="flex h-16 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <span className="text-sm font-medium">Admin</span>
          </div>
          <UserButton />
        </header>
        <main className="p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
