"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { Users, Dumbbell, CreditCard, DollarSign, TrendingUp, Activity } from "lucide-react";

const adminStats = [
  { label: "Total Users", value: "2,847", icon: Users, change: "+12%", color: "text-blue-400" },
  { label: "Active Memberships", value: "1,234", icon: CreditCard, change: "+8%", color: "text-emerald-400" },
  { label: "Monthly Revenue", value: "$48,291", icon: DollarSign, change: "+15%", color: "text-yellow-400" },
  { label: "Active Programs", value: "24", icon: Dumbbell, change: "+3", color: "text-purple-400" },
];

export default function AdminDashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user?.role !== "admin") {
    router.push("/dashboard");
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Admin <GradientText>Dashboard</GradientText></h2>
        <p className="text-muted-foreground">Platform overview and analytics.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {adminStats.map((stat) => (
          <GlassCard key={stat.label} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-emerald-400">{stat.change} this month</p>
              </div>
              <div className="rounded-xl bg-emerald-500/10 p-3">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <h3 className="mb-4 font-semibold flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-emerald-400" /> Revenue Overview
          </h3>
          <div className="h-64 flex items-center justify-center rounded-xl bg-emerald-500/5">
            <p className="text-sm text-muted-foreground">Revenue chart will render here</p>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="mb-4 font-semibold flex items-center gap-2">
            <Activity className="h-4 w-4 text-emerald-400" /> Recent Activity
          </h3>
          <div className="space-y-3">
            {[
              { action: "New user registered", time: "2 min ago" },
              { action: "Subscription upgraded", time: "15 min ago" },
              { action: "New trainer added", time: "1 hour ago" },
              { action: "Payment received", time: "2 hours ago" },
              { action: "Blog post published", time: "3 hours ago" },
            ].map((activity) => (
              <div key={activity.action} className="flex items-center justify-between rounded-lg bg-emerald-500/5 p-3">
                <span className="text-sm">{activity.action}</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
