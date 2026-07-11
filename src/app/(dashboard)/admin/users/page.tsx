"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { SearchInput } from "@/components/shared/search-input";
import { useState } from "react";

const mockUsers = [
  { name: "John Doe", email: "john@example.com", role: "User", status: "Active", joined: "2024-01-15" },
  { name: "Jane Smith", email: "jane@example.com", role: "Pro", status: "Active", joined: "2024-02-01" },
  { name: "Mike Johnson", email: "mike@example.com", role: "Elite", status: "Active", joined: "2023-11-20" },
  { name: "Sarah Williams", email: "sarah@example.com", role: "User", status: "Inactive", joined: "2024-03-10" },
  { name: "Alex Brown", email: "alex@example.com", role: "Trainer", status: "Active", joined: "2023-09-05" },
];

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");

  const filtered = mockUsers.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Users</h2>
        <SearchInput placeholder="Search users..." value={search} onChange={setSearch} className="w-72" />
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-emerald-500/10 bg-emerald-500/5">
                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">Email</th>
                <th className="p-4 text-left font-medium">Role</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Joined</th>
                <th className="p-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.email} className="border-b border-emerald-500/5 hover:bg-emerald-500/5">
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-muted-foreground">{user.email}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      user.role === "Elite" ? "bg-purple-500/10 text-purple-400" :
                      user.role === "Pro" ? "bg-emerald-500/10 text-emerald-400" :
                      user.role === "Trainer" ? "bg-blue-500/10 text-blue-400" :
                      "bg-gray-500/10 text-gray-400"
                    }`}>{user.role}</span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 text-xs ${
                      user.status === "Active" ? "text-emerald-400" : "text-red-400"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Active" ? "bg-emerald-400" : "bg-red-400"}`} />
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{user.joined}</td>
                  <td className="p-4">
                    <button className="text-xs text-emerald-400 hover:text-emerald-300">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
