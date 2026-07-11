"use client";

import { Menu } from "lucide-react";
import { useSession } from "next-auth/react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
  title: string;
}

export function DashboardHeader({ onMenuClick, title }: DashboardHeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 items-center justify-between border-b border-emerald-500/10 px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-muted-foreground hover:bg-emerald-500/10 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-xs font-bold text-white">
            {session?.user?.name?.[0] || session?.user?.email?.[0] || "U"}
          </div>
          <span className="hidden text-sm font-medium sm:block">
            {session?.user?.name || session?.user?.email}
          </span>
        </div>
      </div>
    </header>
  );
}
