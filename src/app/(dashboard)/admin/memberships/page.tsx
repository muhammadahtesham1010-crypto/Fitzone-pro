"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Check } from "lucide-react";

const plans = [
  { name: "Basic", price: "$19.99", interval: "month", members: 847, status: "Active" },
  { name: "Pro", price: "$49.99", interval: "month", members: 623, status: "Active" },
  { name: "Elite", price: "$99.99", interval: "month", members: 210, status: "Active" },
];

export default function AdminMembershipsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Memberships</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> Add Plan
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.name}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-2xl font-bold">{plan.price}<span className="text-sm text-muted-foreground">/{plan.interval}</span></p>
              </div>
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10"><Pencil className="h-4 w-4" /></button>
            </div>
            <p className="text-sm text-muted-foreground">{plan.members} active members</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
