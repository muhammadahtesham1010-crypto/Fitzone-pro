"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface Plan {
  id: string;
  name: string;
  price: string;
  interval: string;
  description: string | null;
  features: string[];
  isActive: boolean;
  sortOrder: number;
  memberCount: number;
}

export default function AdminMembershipsPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/memberships")
      .then((res) => res.json())
      .then(setPlans)
      .catch(() => toast.error("Failed to load plans"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Manage Memberships</h2>
        <button className="self-start inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> Add Plan
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <GlassCard key={plan.id}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-2xl font-bold">${plan.price}<span className="text-sm text-muted-foreground">/{plan.interval}</span></p>
              </div>
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10"><Pencil className="h-4 w-4" /></button>
            </div>
            <p className="text-sm text-muted-foreground">{plan.memberCount} active members</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
