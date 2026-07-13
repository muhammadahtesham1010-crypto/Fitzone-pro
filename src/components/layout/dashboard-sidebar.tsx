"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  LayoutDashboard,
  TrendingUp,
  Dumbbell,
  Apple,
  MessageCircle,
  User,
  Settings,
  Users,
  UserCheck,
  FileText,
  CreditCard,
  DollarSign,
  Star,
  MessageSquare,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DASHBOARD_LINKS, ADMIN_LINKS } from "@/lib/constants";

interface DashboardSidebarProps {
  open: boolean;
  onClose: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="h-4 w-4" />,
  TrendingUp: <TrendingUp className="h-4 w-4" />,
  Dumbbell: <Dumbbell className="h-4 w-4" />,
  Apple: <Apple className="h-4 w-4" />,
  MessageCircle: <MessageCircle className="h-4 w-4" />,
  User: <User className="h-4 w-4" />,
  Settings: <Settings className="h-4 w-4" />,
  Users: <Users className="h-4 w-4" />,
  UserCheck: <UserCheck className="h-4 w-4" />,
  FileText: <FileText className="h-4 w-4" />,
  CreditCard: <CreditCard className="h-4 w-4" />,
  DollarSign: <DollarSign className="h-4 w-4" />,
  Star: <Star className="h-4 w-4" />,
  MessageSquare: <MessageSquare className="h-4 w-4" />,
};

export function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const links = pathname.startsWith("/admin") ? ADMIN_LINKS : DASHBOARD_LINKS;

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-emerald-500/10 bg-card transition-transform duration-300 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-emerald-500/10 px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
              <Dumbbell className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">
              FitZone <span className="text-emerald-400">Pro</span>
            </span>
          </Link>
          <button onClick={onClose} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10 lg:hidden">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {isAdmin ? "Admin Panel" : "Dashboard"}
            </p>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-muted-foreground hover:bg-emerald-500/5 hover:text-foreground"
                  )}
                >
                  {iconMap[link.icon]}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-emerald-500/10 p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Plan</span>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
              {session?.user?.subscriptionPlan || "Free"}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
