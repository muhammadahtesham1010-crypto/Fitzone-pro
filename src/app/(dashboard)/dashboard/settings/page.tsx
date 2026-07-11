"use client";

import { useTheme } from "next-themes";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Sun, Moon, Monitor, Bell, Shield, Trash2 } from "lucide-react";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6 max-w-2xl">
      <AnimatedSection>
        <h2 className="text-2xl font-bold"><GradientText>Settings</GradientText></h2>
        <p className="text-muted-foreground">Customize your experience.</p>
      </AnimatedSection>

      <GlassCard>
        <h3 className="mb-4 font-semibold flex items-center gap-2">
          <Monitor className="h-4 w-4 text-emerald-400" /> Appearance
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            { value: "light", label: "Light", icon: Sun },
            { value: "dark", label: "Dark", icon: Moon },
            { value: "system", label: "System", icon: Monitor },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                theme === option.value
                  ? "bg-emerald-500 text-white"
                  : "border border-emerald-500/20 hover:bg-emerald-500/10"
              }`}
            >
              <option.icon className="h-4 w-4" />
              {option.label}
            </button>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="mb-4 font-semibold flex items-center gap-2">
          <Bell className="h-4 w-4 text-emerald-400" /> Notifications
        </h3>
        <div className="space-y-3">
          {["Workout reminders", "Nutrition reminders", "Achievement alerts", "Newsletter"].map((item) => (
            <label key={item} className="flex items-center justify-between rounded-lg bg-emerald-500/5 p-3">
              <span className="text-sm">{item}</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-emerald-500/20 text-emerald-500 focus:ring-emerald-500" />
            </label>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="mb-4 font-semibold flex items-center gap-2 text-red-400">
          <Trash2 className="h-4 w-4" /> Danger Zone
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">Permanently delete your account and all associated data.</p>
        <button className="rounded-xl border border-red-500/20 px-6 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10">
          Delete Account
        </button>
      </GlassCard>
    </div>
  );
}
