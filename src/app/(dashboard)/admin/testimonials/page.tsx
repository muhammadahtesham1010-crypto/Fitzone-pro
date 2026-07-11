"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Check, X, Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Johnson", content: "FitZone Pro transformed my approach to fitness!", rating: 5, status: "Approved" },
  { name: "Mike Chen", content: "The trainers are world-class.", rating: 5, status: "Pending" },
  { name: "Emily Rodriguez", content: "Best fitness platform I've ever used.", rating: 5, status: "Approved" },
];

export default function AdminTestimonialsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Testimonials</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <GlassCard key={t.name}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="font-medium text-sm">{t.name}</span>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                t.status === "Approved" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
              }`}>{t.status}</span>
            </div>
            <p className="mb-3 text-sm text-muted-foreground italic">&ldquo;{t.content}&rdquo;</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-3 w-3 ${i < t.rating ? "fill-emerald-400 text-emerald-400" : "text-muted-foreground"}`} />
                ))}
              </div>
              {t.status === "Pending" && (
                <div className="flex gap-1">
                  <button className="rounded-lg p-1 text-emerald-400 hover:bg-emerald-500/10"><Check className="h-4 w-4" /></button>
                  <button className="rounded-lg p-1 text-red-400 hover:bg-red-500/10"><X className="h-4 w-4" /></button>
                </div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
