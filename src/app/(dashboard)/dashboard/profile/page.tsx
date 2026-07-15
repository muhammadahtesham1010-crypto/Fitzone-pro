"use client";

import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import Image from "next/image";
import { Loader2, Calendar, Dumbbell, Flame, Trophy } from "lucide-react";
import { ProfileUpload } from "@/components/shared/profile-upload";
import { toast } from "sonner";
import { GOAL_OPTIONS, ACTIVITY_LEVELS } from "@/lib/constants";

interface ProfileData {
  fullName: string | null;
  phone: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  heightCm: string | null;
  weightKg: string | null;
  goal: string | null;
  activityLevel: string | null;
  createdAt: string | null;
}

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "",
      heightCm: "",
      weightKg: "",
      goal: "",
      activityLevel: "",
    },
  });

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data: ProfileData) => {
        setProfileData(data);
        reset({
          fullName: data.fullName || session?.user?.name || "",
          email: session?.user?.email || "",
          phone: data.phone || "",
          dateOfBirth: data.dateOfBirth || "",
          gender: data.gender || "",
          heightCm: data.heightCm || "",
          weightKg: data.weightKg || "",
          goal: data.goal || "",
          activityLevel: data.activityLevel || "",
        });
      })
      .catch(() => toast.error("Failed to load profile"))
      .finally(() => setFetching(false));
  }, [session, reset]);

  const onSubmit = async (data: {
    fullName: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    heightCm: string;
    weightKg: string;
    goal: string;
    activityLevel: string;
  }) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to save");
      await update({ name: data.fullName });
      toast.success("Profile updated!");
    } catch {
      toast.error("Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarUpload = async (url: string) => {
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatarUrl: url }),
      });
      if (!res.ok) throw new Error("Failed to save avatar");
      await update({ image: url });
      toast.success("Profile picture updated!");
    } catch {
      toast.error("Failed to save profile picture");
    }
  };

  const memberSince = profileData?.createdAt
    ? new Date(profileData.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
      })
    : "";

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <AnimatedSection>
        <h2 className="text-2xl font-bold">Your <GradientText>Profile</GradientText></h2>
        <p className="text-muted-foreground">Manage your personal information and fitness details.</p>
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-4xl font-bold text-white ring-4 ring-emerald-500/20">
                {session?.user?.image ? (
                  <Image src={session.user.image} alt="Avatar" width={96} height={96} className="h-full w-full object-cover" />
                ) : (
                  session?.user?.name?.[0] || "U"
                )}
              </div>
              <ProfileUpload onUploadComplete={handleAvatarUpload} />
            </div>
            <h3 className="text-lg font-semibold">{session?.user?.name || "User"}</h3>
            <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
            {memberSince && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                Member since {memberSince}
              </p>
            )}
          </div>
        </GlassCard>

        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
          {[
            { icon: Dumbbell, label: "Workouts", value: "47", color: "text-emerald-400" },
            { icon: Flame, label: "Streak", value: "7 days", color: "text-orange-400" },
            { icon: Trophy, label: "Achievements", value: "8", color: "text-yellow-400" },
          ].map((stat) => (
            <GlassCard key={stat.label} hover className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard>
        <h3 className="mb-4 text-lg font-semibold">Personal Information</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Full Name</label>
              <input
                {...register("fullName", { required: true })}
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                value={session?.user?.email || ""}
                disabled
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone</label>
              <input
                {...register("phone")}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Date of Birth</label>
              <input
                type="date"
                {...register("dateOfBirth")}
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Gender</label>
              <select
                {...register("gender")}
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              >
                <option value="">Prefer not to say</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <hr className="border-emerald-500/10" />

          <h3 className="text-lg font-semibold">Fitness Details</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium mb-1.5">Height (cm)</label>
              <input
                type="number"
                step="0.1"
                {...register("heightCm")}
                placeholder="175"
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Weight (kg)</label>
              <input
                type="number"
                step="0.1"
                {...register("weightKg")}
                placeholder="75"
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Fitness Goal</label>
              <select
                {...register("goal")}
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              >
                <option value="">Select a goal</option>
                {GOAL_OPTIONS.map((g) => (
                  <option key={g.value} value={g.value}>{g.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Activity Level</label>
              <select
                {...register("activityLevel")}
                className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none"
              >
                <option value="">Select level</option>
                {ACTIVITY_LEVELS.map((a) => (
                  <option key={a.value} value={a.value}>{a.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 disabled:opacity-50"
            >
              {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => reset()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 px-6 py-2.5 text-sm font-medium text-muted-foreground hover:bg-emerald-500/5 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
