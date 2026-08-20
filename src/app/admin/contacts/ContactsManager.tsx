"use client";

import { useState } from "react";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
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

  const resetForm = () => {
    setForm({ name: "", email: "", phone: "", message: "" });
    setEditing(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = editing ? `/api/contacts/${editing}` : "/api/contacts";
    const method = editing ? "PATCH" : "POST";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) return;
    const saved = await res.json();
    if (editing) {
      setContacts((prev) =>
        prev.map((c) => (c.id === saved.id ? saved : c))
      );
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
  };

  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="space-y-4 max-w-2xl">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border p-2 rounded col-span-2"
          />
        </div>
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-2 rounded w-full"
          rows={3}
          required
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-700 text-white rounded"
          >
            {editing ? "Update Contact" : "Add Contact"}
          </button>
          {editing && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Email</th>
            <th className="border p-2 text-left">Phone</th>
            <th className="border p-2 text-left">Message</th>
            <th className="border p-2 text-left">Created</th>
            <th className="border p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c.id} className="border">
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.phone || "-"}</td>
              <td className="border p-2 max-w-sm truncate">{c.message}</td>
              <td className="border p-2">
                {new Date(c.createdAt).toLocaleString()}
              </td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => startEdit(c)}
                  className="text-blue-700 underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(c.id)}
                  className="text-red-700 underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
