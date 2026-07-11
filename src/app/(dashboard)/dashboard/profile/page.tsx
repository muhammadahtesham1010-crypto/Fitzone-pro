"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Camera, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: session?.user?.name || "",
      email: session?.user?.email || "",
    },
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      await update(data);
      toast.success("Profile updated!");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <AnimatedSection>
        <h2 className="text-2xl font-bold">Your <GradientText>Profile</GradientText></h2>
        <p className="text-muted-foreground">Manage your personal information.</p>
      </AnimatedSection>

      <GlassCard>
        <div className="mb-6 flex items-center gap-6">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-3xl font-bold text-white">
              {session?.user?.name?.[0] || "U"}
            </div>
            <button className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-2 text-white shadow-lg hover:bg-emerald-600">
              <Camera className="h-3 w-3" />
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{session?.user?.name || "User"}</h3>
            <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name</label>
              <input {...register("name")} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input {...register("email")} disabled className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm opacity-50" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone</label>
              <input className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="+1 (555) 000-0000" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Date of Birth</label>
              <input type="date" className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Height (cm)</label>
              <input type="number" className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="175" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Weight (kg)</label>
              <input type="number" className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="75" />
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 disabled:opacity-50">
            {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
            Save Changes
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
