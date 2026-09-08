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
  approved: boolean;
  contactType: string;
  source: string;
  imageUrl: string | null;
  createdAt: string;
};

const COLUMNS = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "type", label: "Type" },
  { key: "source", label: "Source" },
  { key: "approved", label: "Approved" },
  { key: "created", label: "Created" },
] as const;

const DEFAULT_VISIBLE: Record<string, boolean> = {
  name: true,
  email: true,
  phone: true,
  type: false,
  source: false,
  approved: false,
  created: true,
};

function renderContactCell(
  col: { key: string; label: string },
  contact: Contact,
) {
  switch (col.key) {
    case "name":
      return (
        <TableCell key={col.key} className="font-medium">
          {contact.name}
        </TableCell>
      );
    case "email":
      return <TableCell key={col.key}>{contact.email}</TableCell>;
    case "phone":
      return <TableCell key={col.key}>{contact.phone || "-"}</TableCell>;
    case "type":
      return (
        <TableCell key={col.key} className="capitalize">
          {contact.contactType || "client"}
        </TableCell>
      );
    case "source":
      return (
        <TableCell key={col.key}>
          {contact.source
            .replace(/_/g, " ")
            .replace(/(^.|\s\w)/g, (m) => m.toUpperCase())}
        </TableCell>
      );
    case "approved":
      return (
        <TableCell key={col.key}>
          {contact.approved ? (
            <span className="text-green-600">Yes</span>
          ) : (
            <span className="text-amber-600">No</span>
          )}
        </TableCell>
      );
    case "created":
      return (
        <TableCell key={col.key}>
          {new Date(contact.createdAt).toLocaleString()}
        </TableCell>
      );
    default:
      return null;
  }
}

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
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [importOpen, setImportOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [visible, setVisible] = useState(DEFAULT_VISIBLE);
  const unapprovedCount = contacts.filter((c) => !c.approved).length;

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "" });
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
    });
    setOpen(true);
  };

  return (
    <div className="w-full space-y-8">
      {unapprovedCount > 0 && (
        <div className="flex flex-col gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-900 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">
            {unapprovedCount} contact{unapprovedCount === 1 ? "" : "s"} waiting
            for approval.
          </p>
          <Button
            variant="outline"
            onClick={() => setApproveOpen(true)}
            className="border-yellow-300 bg-white hover:bg-yellow-100"
          >
            Approve
          </Button>
        </div>
      )}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>Contacts</CardTitle>
            <CardDescription>Manage all contact records.</CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="type-filter" className="text-sm font-medium">
                Type
              </label>
              <select
                id="type-filter"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm"
              >
                <option value="all">All</option>
                <option value="client">Client</option>
                <option value="lead">Lead</option>
              </select>
            </div>
            <details className="relative">
              <summary className="flex h-9 cursor-pointer list-none items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground">
                Columns
              </summary>
              <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border bg-background p-2 shadow-lg">
                {COLUMNS.map((col) => (
                  <label
                    key={col.key}
                    className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
                  >
                    <input
                      type="checkbox"
                      className="size-4 rounded border-gray-300"
                      checked={visible[col.key]}
                      onChange={() =>
                        setVisible((prev) => ({
                          ...prev,
                          [col.key]: !prev[col.key],
                        }))
                      }
                    />
                    {col.label}
                  </label>
                ))}
              </div>
            </details>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setImportOpen(true)}>
                <Upload className="size-4 mr-2" />
                Import
              </Button>
              <Button onClick={startAdd}>
                <Plus className="size-4 mr-2" />
                Add Contact
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {COLUMNS.map(
                  (col) =>
                    visible[col.key] && (
                      <TableHead key={col.key}>{col.label}</TableHead>
                    ),
                )}
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts
                .filter(
                  (c) => typeFilter === "all" || c.contactType === typeFilter,
                )
                .map((c) => (
                  <TableRow key={c.id}>
                    {COLUMNS.map(
                      (col) => visible[col.key] && renderContactCell(col, c),
                    )}
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
