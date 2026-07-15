"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/progress": "Progress Tracking",
  "/dashboard/workouts": "Workouts",
  "/dashboard/nutrition": "Nutrition",
  "/dashboard/chat": "AI Chat",
  "/dashboard/profile": "Profile",
  "/dashboard/billing": "Billing",
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
  const pathname = usePathname();

  useEffect(() => {
    if (status !== "loading" && !session) {
      router.push("/login");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-500 border-t-transparent" />
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const title = pageTitles[pathname] || "Dashboard";

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} title={title} />
        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
