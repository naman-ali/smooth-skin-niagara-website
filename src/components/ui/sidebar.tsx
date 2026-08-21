"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, PanelLeft, Users } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const nav: NavItem[] = [
  { label: "Contacts", href: "/admin/contacts", icon: Users },
];

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <aside
        className={cn(
          "flex flex-col border-r bg-card transition-all duration-300",
          open ? "w-64" : "w-16",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          {open && <span className="font-semibold tracking-tight">Admin</span>}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <PanelLeft className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <Icon className="size-4 shrink-0" />
                {open && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="border-t p-4 flex items-center gap-3">
          <UserButton />
          {open && (
            <span className="text-sm text-muted-foreground">My Account</span>
          )}
        </div>
      </aside>

      <main
        className={cn(
          "flex-1 overflow-auto transition-all",
          open ? "p-8" : "p-6",
        )}
      >
        {children}
      </main>
    </div>
  );
}
