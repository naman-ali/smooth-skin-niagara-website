"use client";

import { useEffect, useState } from "react";
import { Loader2, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  approved: boolean;
  source: string;
  imageUrl: string | null;
  createdAt: string;
};

interface ApproveDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contacts: Contact[];
  onUpdate: (contact: Contact) => void;
}

export default function ApproveDialog({
  open,
  onOpenChange,
  contacts,
  onUpdate,
}: ApproveDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const unapproved = contacts.filter((c) => !c.approved);
  const current = unapproved[currentIndex];

  const [form, setForm] = useState({
    name: current?.name || "",
    email: current?.email || "",
    phone: current?.phone || "",
  });

  useEffect(() => {
    if (current) {
      setForm({
        name: current.name,
        email: current.email,
        phone: current.phone || "",
      });
      setError(null);
    }
  }, [current]);

  useEffect(() => {
    setCurrentIndex((i) =>
      i >= unapproved.length ? Math.max(0, unapproved.length - 1) : i
    );
  }, [unapproved.length]);

  const handlePrev = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => Math.min(unapproved.length - 1, i + 1));
  };

  const handleApprove = async () => {
    if (!current) return;
    setSaving(true);
    setError(null);
    try {
      const res = await fetch(`/api/contacts/${current.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, approved: true }),
      });
      if (!res.ok) throw new Error("Failed to approve contact");
      const updated = await res.json();
      onUpdate(updated);
    } catch (err: any) {
      setError(err.message || "Approve failed");
    } finally {
      setSaving(false);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const allApproved = unapproved.length === 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={
          allApproved ? "max-w-lg" : "max-w-7xl w-[95vw] h-[90vh]"
        }
      >
        <DialogHeader>
          <DialogTitle>Approve Unapproved Contacts</DialogTitle>
          <DialogDescription>
            {allApproved
              ? "All contacts are approved."
              : `${unapproved.length} contact${
                  unapproved.length === 1 ? "" : "s"
                } waiting for approval.`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && (
            <div className="rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {allApproved ? (
            <div className="text-sm text-muted-foreground">
              Nothing left to approve.
            </div>
          ) : current ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[75vh] overflow-hidden">
              <div className="relative h-full w-full rounded-lg border bg-muted">
                {current.imageUrl ? (
                  <img
                    src={current.imageUrl}
                    alt="Contact source"
                    className="h-full w-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}
              </div>

              <div className="flex flex-col h-full space-y-4 overflow-y-auto pr-2">
                <p className="text-sm text-muted-foreground">
                  Contact {currentIndex + 1} of {unapproved.length} · Source: {" "}
                  {current.source}
                </p>

                <div className="space-y-2">
                  <Label htmlFor="approve-name">Name</Label>
                  <Input
                    id="approve-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="Name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="approve-email">Email</Label>
                  <Input
                    id="approve-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="Email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="approve-phone">Phone</Label>
                  <PhoneInput
                    id="approve-phone"
                    value={form.phone}
                    onChange={(value) =>
                      setForm((f) => ({ ...f, phone: value || "" }))
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
                    disabled={currentIndex === unapproved.length - 1}
                  >
                    Next
                    <ChevronRight className="size-4 ml-2" />
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSkip}
                    disabled={saving}
                  >
                    <X className="size-4 mr-2" />
                    Skip
                  </Button>
                  <div className="flex-1" />
                  <Button
                    type="button"
                    onClick={handleApprove}
                    disabled={saving}
                  >
                    {saving && (
                      <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    <Check className="size-4 mr-2" />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
