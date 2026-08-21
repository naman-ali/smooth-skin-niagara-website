"use client";

import { useState } from "react";
import { Loader2, Upload, X } from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DraftContact = {
  name: string;
  email: string;
  phone: string;
  message: string;
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
  const [imported, setImported] = useState<DraftContact[]>([]);
  const [importing, setImporting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setImported([]);
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
      const images = await Promise.all(
        Array.from(files).map((file) => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      const res = await fetch("/api/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ images }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Import failed");
      }

      const contacts = (data.contacts || []).map((c: any) => ({
        name: c.name || "",
        email: c.email || "",
        phone: c.phone || "",
        message: c.message || "",
      }));

      setImported(contacts);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setImporting(false);
    }
  };

  const updateContact = (
    index: number,
    field: keyof DraftContact,
    value: string
  ) => {
    setImported((prev) =>
      prev.map((c, i) => (i === index ? { ...c, [field]: value } : c))
    );
  };

  const removeContact = (index: number) => {
    setImported((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (imported.length === 0) return;
    setSaving(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(imported),
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

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Import Contacts from Images</DialogTitle>
          <DialogDescription>
            Upload one or more images. OpenRouter will extract customer
            information, which you can review and edit before saving.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
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

          {imported.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {imported.length} contact
                {imported.length === 1 ? "" : "s"} found. Edit before saving.
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Name</TableHead>
                    <TableHead className="w-32">Email</TableHead>
                    <TableHead className="w-32">Phone</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {imported.map((c, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Input
                          value={c.name}
                          onChange={(e) =>
                            updateContact(i, "name", e.target.value)
                          }
                          placeholder="Name"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={c.email}
                          onChange={(e) =>
                            updateContact(i, "email", e.target.value)
                          }
                          placeholder="Email"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={c.phone}
                          onChange={(e) =>
                            updateContact(i, "phone", e.target.value)
                          }
                          placeholder="Phone"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          value={c.message}
                          onChange={(e) =>
                            updateContact(i, "message", e.target.value)
                          }
                          placeholder="Message"
                        />
                      </TableCell>
                      <TableCell>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeContact(i)}
                        >
                          <X className="size-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="outline"
              onClick={() => handleClose(false)}
              disabled={importing || saving}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={imported.length === 0 || importing || saving}
            >
              {saving && <Loader2 className="size-4 mr-2 animate-spin" />}
              Save {imported.length > 0 ? imported.length : ""} Contact
              {imported.length === 1 ? "" : "s"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
