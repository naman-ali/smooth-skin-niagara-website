"use client";

import { useState } from "react";
import { ClientForm } from "./ClientForm";
import { OnePageClientForm } from "./OnePageClientForm";
import { cn } from "@/lib/utils";

type ViewMode = "wizard" | "one-page";

/**
 * Entry shell for the client form. Lets the user choose between the
 * existing multi-step wizard and a compact one-page view, while keeping
 * both implementations independent.
 */
export function ClientFormShell() {
  const [view, setView] = useState<ViewMode>("wizard");

  return (
    <div className="mx-auto w-full max-w-3xl px-4 pb-6 pt-8 sm:px-6 sm:pt-12 lg:max-w-4xl xl:max-w-5xl">
      <div className="mb-8 flex flex-col items-center gap-4 border-b border-border pb-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink-600">
            Smooth Skin Niagara
          </p>
          <h1 className="font-display text-3xl font-medium text-olive-700 sm:text-4xl">
            Client Intake Form
          </h1>
        </div>
        {/* <img
          src="/assets/logo.png"
          alt="Smooth Skin Niagara"
          className="h-12 w-auto"
        /> */}
        <div
          role="tablist"
          aria-label="Form view"
          className="inline-flex h-11 items-center gap-1 rounded-full border border-border bg-muted/40 p-1"
        >
          <ViewButton
            active={view === "wizard"}
            onClick={() => setView("wizard")}
          >
            Step-by-step
          </ViewButton>
          <ViewButton
            active={view === "one-page"}
            onClick={() => setView("one-page")}
          >
            One page
          </ViewButton>
        </div>
      </div>

      {view === "wizard" ? (
        <ClientForm key="wizard" showHeader={false} />
      ) : (
        <OnePageClientForm key="one-page" />
      )}
    </div>
  );
}

function ViewButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active
          ? "bg-background text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}
