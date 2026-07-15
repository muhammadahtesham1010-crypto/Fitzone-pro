"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Trash2 } from "lucide-react";

const posts = [
  { title: "The Science of Muscle Growth", author: "Admin", date: "2024-01-15", status: "Published" },
  { title: "Nutrition Myths Debunked", author: "Admin", date: "2024-01-05", status: "Published" },
  { title: "Beginner's Guide to Weight Training", author: "Admin", date: "2023-11-28", status: "Draft" },
];

export default function AdminBlogPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
        <button className="self-start inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> New Post
        </button>
      </div>
      <GlassCard className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-emerald-500/10 bg-emerald-500/5">
                <th className="p-4 text-left font-medium">Title</th>
                <th className="p-4 text-left font-medium">Author</th>
                <th className="p-4 text-left font-medium">Date</th>
                <th className="p-4 text-left font-medium">Status</th>
                <th className="p-4 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.title} className="border-b border-emerald-500/5 hover:bg-emerald-500/5">
                  <td className="p-4 font-medium">{post.title}</td>
                  <td className="p-4 text-muted-foreground">{post.author}</td>
                  <td className="p-4 text-muted-foreground">{post.date}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      post.status === "Published" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
                    }`}>{post.status}</span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10"><Pencil className="h-4 w-4" /></button>
                      <button className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></button>
                    </div>
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
