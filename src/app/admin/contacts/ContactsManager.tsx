"use client";

import { useState } from "react";
import { Pencil, Plus, Trash2, Upload } from "lucide-react";
import ImportDialog from "./ImportDialog";
import ApproveDialog from "./ApproveDialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

export default function ContactsManager({
  contacts: initial,
}: {
  contacts: Contact[];
}) {
  const [contacts, setContacts] = useState<Contact[]>(initial);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setEditing(null);
    setOpen(false);
  };

  const startAdd = () => {
    resetForm();
    setOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editing ? `/api/contacts/${editing}` : "/api/contacts";
    const method = editing ? "PATCH" : "POST";
    const body = editing ? form : { ...form, approved: true, source: "manual" };
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) return;
    const saved = await res.json();
    if (editing) {
      setContacts((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));
    } else {
      setContacts((prev) => [saved, ...prev]);
    }
    resetForm();
  };

  const onDelete = async (id: string) => {
    const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
    if (!res.ok) return;
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const startEdit = (contact: Contact) => {
    setEditing(contact.id);
    setForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone || "",
      message: contact.message,
    });
    setOpen(true);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Manage all contact records.</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setImportOpen(true)}>
              <Upload className="size-4 mr-2" />
              Import
            </Button>
            <Button
              variant="outline"
              onClick={() => setApproveOpen(true)}
              disabled={!contacts.some((c) => !c.approved)}
            >
              Approve Unapproved
            </Button>
            <Button onClick={startAdd}>
              <Plus className="size-4 mr-2" />
              Add Contact
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Approved</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.phone || "-"}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {c.message}
                  </TableCell>
                  <TableCell>{c.source}</TableCell>
                  <TableCell>
                    {c.approved ? (
                      <span className="text-green-600">Yes</span>
                    ) : (
                      <span className="text-amber-600">No</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {new Date(c.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => startEdit(c)}
                      >
                        <Pencil className="size-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => onDelete(c.id)}
                      >
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editing ? "Edit Contact" : "Add Contact"}
            </DialogTitle>
            <DialogDescription>
              {editing
                ? "Update the selected contact and save changes."
                : "Create a new contact record."}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="phone">Phone</Label>
                <PhoneInput
                  id="phone"
                  value={form.phone}
                  onChange={(value) => setForm({ ...form, phone: value || "" })}
                  placeholder="Phone"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={3}
                  required
                />
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button type="submit">
                {editing ? "Update Contact" : "Add Contact"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => resetForm()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <ImportDialog
        open={importOpen}
        onOpenChange={setImportOpen}
        onImport={(saved) =>
          setContacts((prev) => [...(saved as Contact[]), ...prev])
        }
      />

      <ApproveDialog
        open={approveOpen}
        onOpenChange={setApproveOpen}
        contacts={contacts}
        onUpdate={(updated) =>
          setContacts((prev) =>
            prev.map((c) => (c.id === updated.id ? updated : c)),
          )
        }
      />
    </div>
  );
}
