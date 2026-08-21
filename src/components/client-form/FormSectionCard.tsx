import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { ReactNode } from "react";

/**
 * Shared visual container for a wizard step's content. A section uses one
 * contained surface with generous spacing between questions rather than
 * turning every question into its own heavy card.
 */
export function FormSectionCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <Card className="border-border shadow-sm">
      <CardHeader>
        <CardTitle className="font-display text-2xl font-medium text-foreground">
          {title}
        </CardTitle>
        {description ? (
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        ) : null}
      </CardHeader>
      <Separator />
      <CardContent className="space-y-7 pt-6">{children}</CardContent>
    </Card>
  );
}
