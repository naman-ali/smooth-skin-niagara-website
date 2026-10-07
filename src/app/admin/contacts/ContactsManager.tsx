"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  Download,
  Eye,
  Loader2,
  Pencil,
  Plus,
  RefreshCw,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import ImportDialog from "./ImportDialog";
import ApproveDialog from "./ApproveDialog";
import { formatPhoneDisplay, normalizePhone } from "@/lib/phone";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { PhoneInput } from "@/components/ui/phone-input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  approved: boolean;
  dnc: boolean;
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
  { key: "dnc", label: "DNC" },
  { key: "created", label: "Created" },
] as const;

/** Human-readable label for a failed/skipped sync result. */
function issueReason(result: {
  skipped?: boolean;
  reason?: string;
  error?: string;
}): string {
  if (result.skipped) return result.reason ?? "Missing info";
  const status = /AlienRise (\d+)/.exec(result.error ?? "")?.[1];
  if (status === "429") return "Rate limited";
  if (status) return `AlienRise error ${status}`;
  return "Network error";
}

function formatDuration(seconds: number) {
  if (seconds >= 90) {
    return `${Math.floor(seconds / 60)}m ${Math.round(seconds % 60)}s`;
  }
  return `${Math.max(1, Math.ceil(seconds))}s`;
}

const DEFAULT_VISIBLE: Record<string, boolean> = {
  name: true,
  email: true,
  phone: true,
  type: false,
  source: false,
  approved: false,
  dnc: true,
  created: true,
};

function renderContactCell(
  col: { key: string; label: string },
  contact: Contact,
  onToggleDnc: (contact: Contact) => void,
) {
  switch (col.key) {
    case "name":
      return (
        <TableCell key={col.key}>
          <Link
            href={`/admin/contacts/${contact.id}`}
            className="font-medium hover:underline"
          >
            {contact.name}
          </Link>
        </TableCell>
      );
    case "email":
      return <TableCell key={col.key}>{contact.email}</TableCell>;
    case "phone":
      return (
        <TableCell key={col.key}>
          {formatPhoneDisplay(contact.phone) || "-"}
        </TableCell>
      );
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
    case "dnc":
      return (
        <TableCell key={col.key}>
          <Switch
            aria-label={`Flag ${contact.name || "contact"} as do not contact`}
            checked={contact.dnc}
            onCheckedChange={() => onToggleDnc(contact)}
            className="data-checked:bg-destructive"
          />
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
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>(initial);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [importOpen, setImportOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [visible, setVisible] = useState(DEFAULT_VISIBLE);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [pushing, setPushing] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Contact | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [sync, setSync] = useState<{
    phase: "running" | "done";
    done: number;
    total: number;
    synced: number;
    failed: number;
    skipped: number;
    issues: { contactId: string; reason: string }[];
    etaSeconds: number | null;
  } | null>(null);
  const [dupesOpen, setDupesOpen] = useState(false);
  const [dupesLoading, setDupesLoading] = useState(false);
  const [dupes, setDupes] = useState<{
    total: number;
    distinct: number;
    groups: {
      shared: { type: string; value: string }[];
      members: {
        id: string;
        name: string;
        email: string;
        phone: string | null;
        source: string;
        createdAt: string;
      }[];
    }[];
  } | null>(null);
  const [search, setSearch] = useState("");
  const unapprovedCount = contacts.filter((c) => !c.approved).length;
  const query = search.trim().toLowerCase();
  const queryDigits = query.replace(/\D/g, "");
  const filteredContacts = query
    ? contacts.filter((c) => {
        if (c.name.toLowerCase().includes(query)) return true;
        if (c.email.toLowerCase().includes(query)) return true;
        const phone = c.phone?.toLowerCase() ?? "";
        if (phone.includes(query)) return true;
        // Match digit-only searches against the normalized phone so
        // "905321" finds "+1 (905) 321-…" too.
        return (
          queryDigits.length >= 3 &&
          phone.replace(/\D/g, "").includes(queryDigits)
        );
      })
    : contacts;
  const visibleColCount = COLUMNS.filter((col) => visible[col.key]).length + 2;
  const selectedContacts = contacts.filter((c) => selected.has(c.id));
  const allFilteredSelected =
    filteredContacts.length > 0 &&
    filteredContacts.every((c) => selected.has(c.id));
  const someFilteredSelected =
    !allFilteredSelected && filteredContacts.some((c) => selected.has(c.id));

  // The sync is driven client-side in batches — warn before the tab is
  // closed or reloaded mid-run.
  useEffect(() => {
    if (!pushing) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [pushing]);

  const toggleSelect = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleSelectAll = () =>
    setSelected((prev) => {
      const next = new Set(prev);
      filteredContacts.forEach((c) =>
        allFilteredSelected ? next.delete(c.id) : next.add(c.id),
      );
      return next;
    });

  // Per-contact DNC toggle state so rapid flips resolve to the latest
  // request: `confirmed` is the last value the server accepted, `latest`
  // is the value the optimistic UI currently shows.
  const dncToggles = useRef(
    new Map<string, { confirmed: boolean; latest: boolean }>(),
  );

  const toggleDnc = async (contact: Contact) => {
    const entry = dncToggles.current.get(contact.id) ?? {
      confirmed: contact.dnc,
      latest: contact.dnc,
    };
    const next = !entry.latest;
    entry.latest = next;
    dncToggles.current.set(contact.id, entry);
    setContacts((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, dnc: next } : c)),
    );
    try {
      const res = await fetch(`/api/contacts/${contact.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dnc: next }),
      });
      if (!res.ok) throw new Error(await res.text());
      entry.confirmed = next;
    } catch {
      // Revert only when no newer toggle superseded this one — a newer
      // in-flight request owns the final state.
      if (entry.latest === next) {
        setContacts((prev) =>
          prev.map((c) =>
            c.id === contact.id ? { ...c, dnc: entry.confirmed } : c,
          ),
        );
      }
    }
    if (entry.latest === entry.confirmed) {
      dncToggles.current.delete(contact.id);
    }
  };

  const escapeCsv = (value: string) =>
    /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;

  const exportCsv = () => {
    const header = [
      "Name",
      "Email",
      "Phone",
      "Type",
      "Source",
      "Approved",
      "DNC",
      "Created",
    ];
    const rows = selectedContacts.map((c) => [
      c.name,
      c.email,
      c.phone ?? "",
      c.contactType,
      c.source,
      c.approved ? "Yes" : "No",
      c.dnc ? "Yes" : "No",
      c.createdAt,
    ]);
    const csv = [header, ...rows]
      .map((row) => row.map(escapeCsv).join(","))
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob([csv], { type: "text/csv;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const syncToAlienrise = async () => {
    const total = selectedContacts.length;
    const BATCH = 25;
    const pending = selectedContacts.map((c) => c.id);
    let sent = 0;
    let failed = 0;
    let skipped = 0;
    let stalled = 0;
    const issues: { contactId: string; reason: string }[] = [];
    const startedAt = Date.now();
    setPushing(true);
    setSync({
      phase: "running",
      done: 0,
      total,
      synced: 0,
      failed: 0,
      skipped: 0,
      issues,
      etaSeconds: null,
    });
    try {
      // Sequential batches keep each server invocation short and stay
      // under AlienRise's 120 req/min rate limit. If the server runs out
      // of its time budget it returns unprocessed ids in `remaining`,
      // which get re-queued here.
      while (pending.length) {
        const batch = pending.splice(0, BATCH);
        try {
          const res = await fetch("/api/contacts/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: batch }),
          });
          if (!res.ok) throw new Error((await res.text()) || "Request failed");
          const { results, remaining } = (await res.json()) as {
            results: {
              contactId: string;
              ok?: boolean;
              skipped?: boolean;
              reason?: string;
              error?: string;
            }[];
            remaining: string[];
          };
          sent += results.filter((r) => r.ok).length;
          failed += results.filter((r) => r.ok === false).length;
          skipped += results.filter((r) => r.skipped).length;
          pending.push(...remaining);
          for (const r of results) {
            if (!r.ok) {
              issues.push({ contactId: r.contactId, reason: issueReason(r) });
            }
          }
          // Ids neither returned nor re-queued don't resolve to contacts.
          const accounted = new Set([
            ...results.map((r) => r.contactId),
            ...remaining,
          ]);
          for (const id of batch) {
            if (!accounted.has(id)) {
              issues.push({ contactId: id, reason: "Contact not found" });
            }
          }
          failed += batch.length - results.length - remaining.length;
          // Give up if the server repeatedly makes no progress at all
          // (e.g. AlienRise is down and every call eats the time budget).
          stalled = results.length === 0 ? stalled + 1 : 0;
          if (stalled >= 2) {
            failed += pending.length;
            break;
          }
        } catch {
          failed += batch.length;
        }
        const done = total - pending.length;
        const elapsed = (Date.now() - startedAt) / 1000;
        // Project remaining time from the measured rate — upstream
        // latency varies too much for a fixed per-contact estimate.
        const etaSeconds = done > 0 ? (elapsed / done) * pending.length : null;
        setSync({
          phase: "running",
          done,
          total,
          synced: sent,
          failed,
          skipped,
          issues,
          etaSeconds,
        });
      }
      setSync({
        phase: "done",
        done: total,
        total,
        synced: sent,
        failed,
        skipped,
        issues,
        etaSeconds: null,
      });
    } finally {
      setPushing(false);
    }
  };

  const findDuplicates = async () => {
    setDupesOpen(true);
    if (dupes) return;
    setDupesLoading(true);
    try {
      const res = await fetch("/api/contacts/duplicates");
      if (res.ok) setDupes(await res.json());
    } finally {
      setDupesLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "" });
    setFormError(null);
    setEditing(null);
    setOpen(false);
  };

  const startAdd = () => {
    resetForm();
    setOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Same identity rule as the server and AlienRise: email OR phone
    // match = duplicate. Check locally first for instant feedback.
    const emailKey = form.email.trim().toLowerCase();
    const phoneKey = normalizePhone(form.phone) || null;
    const dupe = contacts.find(
      (c) =>
        c.id !== editing &&
        ((emailKey.length > 0 && c.email.trim().toLowerCase() === emailKey) ||
          (phoneKey !== null && c.phone === phoneKey)),
    );
    if (dupe) {
      setFormError(
        `Duplicate of ${dupe.name || "an existing contact"} (${dupe.email || formatPhoneDisplay(dupe.phone)}) — same email or phone.`,
      );
      return;
    }
    const url = editing ? `/api/contacts/${editing}` : "/api/contacts";
    const method = editing ? "PATCH" : "POST";
    const body = editing ? form : { ...form, approved: true, source: "manual" };
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.status === 409) {
      const data = await res.json().catch(() => null);
      setFormError(data?.error ?? "A contact with this email or phone exists.");
      return;
    }
    if (!res.ok) return;
    const saved = await res.json();
    if (editing) {
      setContacts((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));
    } else {
      setContacts((prev) => [saved, ...prev]);
    }
    resetForm();
  };

  const onDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/contacts/${deleteTarget.id}`, {
        method: "DELETE",
      });
      if (!res.ok) return;
      setContacts((prev) => prev.filter((c) => c.id !== deleteTarget.id));
      setSelected((prev) => {
        const next = new Set(prev);
        next.delete(deleteTarget.id);
        return next;
      });
      setDeleteTarget(null);
    } finally {
      setDeleting(false);
    }
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
      {sync && (
        <div
          className="rounded-lg border bg-muted/50 p-4"
          role="status"
          aria-live="polite"
        >
          {sync.phase === "running" ? (
            <Progress
              value={Math.round((sync.done / sync.total) * 100)}
              className="w-full"
            >
              <div className="flex w-full items-center gap-2">
                <Loader2 className="size-4 shrink-0 animate-spin text-primary" />
                <ProgressLabel>Syncing contacts to AlienRise</ProgressLabel>
                <ProgressValue>
                  {() => `${sync.done} of ${sync.total}`}
                </ProgressValue>
              </div>
              <p className="w-full text-xs tabular-nums text-muted-foreground">
                {Math.round((sync.done / sync.total) * 100)}% · {sync.synced}{" "}
                synced
                {sync.skipped > 0 ? ` · ${sync.skipped} skipped` : ""}
                {sync.failed > 0 ? ` · ${sync.failed} failed` : ""} ·{" "}
                {sync.etaSeconds != null
                  ? `~${formatDuration(sync.etaSeconds)} left`
                  : "calculating time left..."}
              </p>
              <p className="flex w-full items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                <AlertTriangle className="size-3.5 shrink-0" />
                Keep this tab open and don&apos;t navigate away — the sync runs
                from your browser.
              </p>
            </Progress>
          ) : (
            <div className="flex items-center gap-2 text-sm">
              {sync.failed === 0 ? (
                <CheckCircle2 className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <AlertTriangle className="size-4 shrink-0 text-amber-600 dark:text-amber-400" />
              )}
              <span>
                AlienRise: {sync.synced} contact
                {sync.synced === 1 ? "" : "s"} synced
                {sync.skipped > 0
                  ? `, ${sync.skipped} skipped (missing name or contact info)`
                  : ""}
                {sync.failed > 0
                  ? `, ${sync.failed} failed — select them and sync again to retry`
                  : ""}
                .
              </span>
            </div>
          )}
          {sync.issues.length > 0 && (
            <div className="mt-3 border-t pt-3">
              <p className="text-xs font-medium text-muted-foreground">
                Not synced ({sync.issues.length})
              </p>
              <ul className="mt-1.5 max-h-40 space-y-1 overflow-y-auto">
                {sync.issues.map((issue) => {
                  const contact = contacts.find(
                    (c) => c.id === issue.contactId,
                  );
                  return (
                    <li
                      key={issue.contactId}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <Link
                        href={`/admin/contacts/${issue.contactId}`}
                        className="truncate font-medium hover:underline"
                      >
                        {contact?.name || "(no name)"}
                      </Link>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {issue.reason}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <CardTitle>
              Contacts{" "}
              <span className="font-normal text-muted-foreground">
                ({contacts.length})
              </span>
            </CardTitle>
            <CardDescription>Manage all contact records.</CardDescription>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search name, email, phone…"
                aria-label="Search contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 w-56 pl-8"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Actions{selected.size > 0 ? ` (${selected.size})` : ""}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuItem
                  disabled={selected.size === 0}
                  onClick={exportCsv}
                >
                  <Download className="size-4" />
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem
                  disabled={selected.size === 0 || pushing}
                  onClick={syncToAlienrise}
                >
                  {pushing ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <RefreshCw className="size-4" />
                  )}
                  {pushing && sync?.phase === "running"
                    ? `Syncing ${Math.round((sync.done / sync.total) * 100)}%`
                    : "Sync to AlienRise"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={findDuplicates}>
                  <Copy className="size-4" />
                  Find duplicates
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" />}>
                Columns
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {COLUMNS.map((col) => (
                  <DropdownMenuCheckboxItem
                    key={col.key}
                    label={col.label}
                    checked={visible[col.key]}
                    onCheckedChange={(checked) =>
                      setVisible((prev) => ({
                        ...prev,
                        [col.key]: checked,
                      }))
                    }
                  >
                    {col.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                <TableHead className="w-8">
                  <Checkbox
                    aria-label="Select all contacts"
                    checked={allFilteredSelected}
                    indeterminate={someFilteredSelected}
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
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
              {filteredContacts.map((c) => (
                <TableRow
                  key={c.id}
                  data-state={selected.has(c.id) ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      aria-label={`Select ${c.name || "contact"}`}
                      checked={selected.has(c.id)}
                      onCheckedChange={() => toggleSelect(c.id)}
                    />
                  </TableCell>
                  {COLUMNS.map(
                    (col) =>
                      visible[col.key] && renderContactCell(col, c, toggleDnc),
                  )}
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => router.push(`/admin/contacts/${c.id}`)}
                      >
                        <Eye className="size-4" />
                        <span className="sr-only">View</span>
                      </Button>
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
                        onClick={() => setDeleteTarget(c)}
                      >
                        <Trash2 className="size-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell
                  colSpan={visibleColCount}
                  className="text-sm text-muted-foreground"
                >
                  Showing {filteredContacts.length} of {contacts.length} contact
                  {contacts.length === 1 ? "" : "s"}
                </TableCell>
              </TableRow>
            </TableFooter>
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
            {formError && <p className="text-sm text-red-600">{formError}</p>}
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

      <Dialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete contact?</DialogTitle>
            <DialogDescription>
              This will permanently delete{" "}
              {deleteTarget?.name || "this contact"}. This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 pt-2">
            <Button
              variant="destructive"
              onClick={onDelete}
              disabled={deleting}
            >
              {deleting ? "Deleting…" : "Delete"}
            </Button>
            <Button
              variant="outline"
              onClick={() => setDeleteTarget(null)}
              disabled={deleting}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={dupesOpen} onOpenChange={setDupesOpen}>
        <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Duplicate contacts</DialogTitle>
            <DialogDescription>
              Contacts that share an email or phone number merge into a single
              contact when synced to AlienRise.
            </DialogDescription>
          </DialogHeader>
          {dupesLoading ? (
            <div className="flex items-center justify-center gap-2 py-10 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Checking for duplicates...
            </div>
          ) : !dupes ? null : dupes.groups.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              No duplicates found.
            </p>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-muted-foreground">
                {dupes.total} contacts collapse into {dupes.distinct} unique
                identities — {dupes.total - dupes.distinct} duplicates across{" "}
                {dupes.groups.length} groups.
              </p>
              {dupes.groups.map((group, i) => (
                <div key={i} className="space-y-1.5 rounded-lg border p-3">
                  <p className="text-xs font-medium text-muted-foreground">
                    Shared{" "}
                    {group.shared
                      .map((s) =>
                        s.type === "phone"
                          ? formatPhoneDisplay(s.value) || s.value
                          : s.value,
                      )
                      .join(" · ")}
                  </p>
                  {group.members.map((m) => (
                    <div
                      key={m.id}
                      className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm"
                    >
                      <Link
                        href={`/admin/contacts/${m.id}`}
                        className="font-medium hover:underline"
                      >
                        {m.name || "(no name)"}
                      </Link>
                      <span className="text-muted-foreground">
                        {m.email || "—"}
                      </span>
                      <span className="tabular-nums text-muted-foreground">
                        {formatPhoneDisplay(m.phone) || "—"}
                      </span>
                      <span className="ml-auto text-xs capitalize text-muted-foreground">
                        {m.source.replace(/_/g, " ")} ·{" "}
                        {new Date(m.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
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
