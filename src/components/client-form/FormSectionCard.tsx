import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Shared visual container for a wizard step's content. A section uses one
 * contained surface with generous spacing between questions rather than
 * turning every question into its own heavy card.
 */
export function FormSectionCard({
  title,
  description,
  compact,
  children,
}: {
  title: string;
  description?: string | null;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader className={compact ? "p-5" : undefined}>
        <CardTitle
          className={cn(
            "font-display font-medium text-foreground",
            compact ? "text-xl" : "text-2xl",
          )}
        >
          {title}
        </CardTitle>
        {description ? (
          <CardDescription
            className={cn("leading-relaxed", compact ? "text-sm" : "text-base")}
          >
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <Separator />
      <CardContent
        className={cn("space-y-6", compact ? "p-5 pt-4" : "p-6 pt-6")}
      >
        {children}
      </CardContent>
    </Card>
  );
}
