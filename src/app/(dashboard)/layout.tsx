"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { AdBanner } from "@/components/shared/ad-banner";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/progress": "Progress Tracking",
  "/dashboard/workouts": "Workouts",
  "/dashboard/nutrition": "Nutrition",
  "/dashboard/profile": "Profile",
  "/dashboard/settings": "Settings",
  "/admin": "Admin Dashboard",
  "/admin/users": "Manage Users",
  "/admin/trainers": "Manage Trainers",
  "/admin/programs": "Manage Programs",
  "/admin/nutrition-plans": "Manage Nutrition Plans",
  "/admin/blog": "Manage Blog Posts",
  "/admin/memberships": "Manage Memberships",
  "/admin/payments": "Payments",
  "/admin/testimonials": "Testimonials",
  "/admin/messages": "Contact Messages",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <AdBanner variant="banner" className="mx-6 mt-4" />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
