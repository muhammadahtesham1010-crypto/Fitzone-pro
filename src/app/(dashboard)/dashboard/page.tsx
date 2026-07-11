"use client";

import { Dumbbell, Flame, Trophy, Calendar, Apple, ChartNoAxesCombined, User } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";

const stats = [
  { label: "Total Workouts", value: "47", icon: Dumbbell, change: "+12 this month", color: "text-emerald-400" },
  { label: "Current Streak", value: "7", icon: Flame, change: "Best: 14 days", color: "text-orange-400" },
  { label: "Achievements", value: "8", icon: Trophy, change: "3 more to unlock", color: "text-yellow-400" },
  { label: "Active Days", value: "23", icon: Calendar, change: "This month", color: "text-blue-400" },
];

const recentWorkouts = [
  { date: "Today", exercise: "Bench Press", sets: "4x8", weight: "135 lbs" },
  { date: "Yesterday", exercise: "Squat", sets: "5x5", weight: "185 lbs" },
  { date: "2 days ago", exercise: "Deadlift", sets: "3x5", weight: "225 lbs" },
  { date: "3 days ago", exercise: "Pull-Ups", sets: "3x10", weight: "Bodyweight" },
];

export default function UserDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Welcome Back!</h2>
        <p className="text-muted-foreground">Here&apos;s your fitness overview.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <GlassCard key={stat.label} hover>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.change}</p>
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
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Recent Workouts</h3>
            <Link href="/dashboard/workouts" className="text-sm text-emerald-400 hover:text-emerald-300">View All</Link>
          </div>
          <div className="space-y-3">
            {recentWorkouts.map((w) => (
              <div key={w.exercise + w.date} className="flex items-center justify-between rounded-lg bg-emerald-500/5 p-3">
                <div>
                  <p className="text-sm font-medium">{w.exercise}</p>
                  <p className="text-xs text-muted-foreground">{w.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm">{w.sets}</p>
                  <p className="text-xs text-muted-foreground">{w.weight}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
              {[
                { href: "/dashboard/workouts", label: "Log Workout", icon: Dumbbell },
                { href: "/dashboard/nutrition", label: "Track Meal", icon: Apple },
                { href: "/dashboard/progress", label: "View Progress", icon: ChartNoAxesCombined },
                { href: "/dashboard/profile", label: "Update Profile", icon: User },
              ].map((action) => (
              <Link key={action.href} href={action.href} className="flex items-center gap-3 rounded-xl border border-emerald-500/10 p-4 transition-colors hover:bg-emerald-500/5">
                <div className="rounded-lg bg-emerald-500/10 p-2">
                  <action.icon className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-sm font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
