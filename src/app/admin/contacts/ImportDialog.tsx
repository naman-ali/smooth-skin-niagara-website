"use client";

import { useState } from "react";
import {
  Loader2,
  Upload,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DraftContact = {
  name: string;
  email: string;
  phone: string;
};

interface ImportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImport: (contacts: any[]) => void;
}

export default function ImportDialog({
  open,
  onOpenChange,
  onImport,
}: ImportDialogProps) {
  const [images, setImages] = useState<string[]>([]);
  const [imported, setImported] = useState<DraftContact[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [approved, setApproved] = useState<Set<number>>(new Set());
  const [importing, setImporting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setImages([]);
    setImported([]);
    setCurrentIndex(0);
    setApproved(new Set());
    setError(null);
    setImporting(false);
    setSaving(false);
  };

  const handleClose = (value: boolean) => {
    if (!value) reset();
    onOpenChange(value);
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setImporting(true);
    setError(null);

    try {
      const imageUrls = await Promise.all(
        Array.from(files).map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }),
      );

      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images: imageUrls }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Import failed");
      }

      const contacts = (data.contacts || []).map((c: any) => ({
        name: c.name || "",
        email: c.email || "",
        phone: c.phone || "",
      }));

      setImages(imageUrls);
      setImported(contacts);
      setCurrentIndex(0);
      setApproved(new Set());
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setImporting(false);
    }
  };

  const updateContact = (
    index: number,
    field: keyof DraftContact,
    value: string,
  ) => {
    setImported((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c)),
    );
  };

  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => Math.min(imported.length - 1, i + 1));
  };

  const handleApprove = () => {
    setApproved((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) {
        next.delete(currentIndex);
      } else {
        next.add(currentIndex);
        if (currentIndex < imported.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }
      return next;
    });
  };

  const handleSave = async () => {
    if (approved.size === 0) return;
    setSaving(true);
    try {
      const payload = imported
        .filter((_, i) => approved.has(i))
        .map((c) => ({ ...c, message: "" }));
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save contacts");
      const saved = await res.json();
      onImport(saved);
      reset();
    } catch (err: any) {
      setError(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const isApproved = approved.has(currentIndex);
  const current = imported[currentIndex];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={
          imported.length > 0 ? "max-w-7xl w-[95vw] h-[90vh]" : "max-w-4xl"
        }
      >
        <DialogHeader>
          <DialogTitle>Import Contacts from Images</DialogTitle>
          <DialogDescription>
            {imported.length > 0
              ? `Review and approve each extracted contact. ${approved.size} of ${imported.length} approved.`
              : "Upload one or more images. OpenRouter will extract customer information for you to review."}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {imported.length === 0 && (
            <div className="space-y-2">
              <Label htmlFor="images">Images</Label>
              <Input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleFiles}
                disabled={importing}
              />
            </div>
          )}

          {importing && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Extracting contacts...
            </div>
          )}

          {error && (
            <div className="rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {imported.length > 0 && current && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[75vh] overflow-hidden">
              <div className="relative h-full w-full rounded-lg border bg-muted">
                <img
                  src={images[currentIndex]}
                  alt={`Image ${currentIndex + 1}`}
                  className="h-full w-full object-contain rounded-lg"
                />
              </div>

              <div className="flex flex-col h-full space-y-4 overflow-y-auto pr-2">
                <p className="text-sm text-muted-foreground">
                  Image {currentIndex + 1} of {imported.length}
                </p>

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={current.name}
                    onChange={(e) =>
                      updateContact(currentIndex, "name", e.target.value)
                    }
                    placeholder="Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={current.email}
                    onChange={(e) =>
                      updateContact(currentIndex, "email", e.target.value)
                    }
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={current.phone}
                    onChange={(e) =>
                      updateContact(currentIndex, "phone", e.target.value)
                    }
                    placeholder="Phone"
                  />
                </div>

                <div className="mt-auto pt-4 flex flex-wrap items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                  >
                    <ChevronLeft className="size-4 mr-2" />
                    Prev
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleNext}
                    disabled={currentIndex === imported.length - 1}
                  >
                    Next
                    <ChevronRight className="size-4 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    onClick={handleApprove}
                    variant={isApproved ? "outline" : "default"}
                  >
                    {isApproved ? (
                      <>
                        <X className="size-4 mr-2" />
                        Unapprove
                      </>
                    ) : (
                      <>
                        <Check className="size-4 mr-2" />
                        {currentIndex === imported.length - 1
                          ? "Approve"
                          : "Approve & Next"}
                      </>
                    )}
                  </Button>
                  <div className="flex-1" />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => handleClose(false)}
                    disabled={importing || saving}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSave}
                    disabled={approved.size === 0 || saving}
                  >
                    {saving && <Loader2 className="size-4 mr-2 animate-spin" />}
                    Save {approved.size} Approved
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
