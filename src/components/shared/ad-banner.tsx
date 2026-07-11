"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AdBannerProps {
  variant?: "banner" | "sidebar";
  className?: string;
}

export function AdBanner({ variant = "banner", className }: AdBannerProps) {
  const { data: session } = useSession();

  if (!session) return null;
  if (session.user.subscriptionPlan !== "Free") return null;

  return (
    <Link href="/pricing">
      <div
        className={cn(
          "select-none rounded-xl border border-dashed border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-transparent transition-colors hover:bg-emerald-500/10",
          variant === "banner" && "w-full px-6 py-4",
          variant === "sidebar" && "px-4 py-6",
          className
        )}
      >
        <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
          Sponsored
        </p>
        <div className={cn("flex", variant === "sidebar" ? "flex-col items-center gap-2" : "items-center gap-4")}>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
            <svg className="h-5 w-5 text-emerald-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className={cn("flex-1", variant === "sidebar" && "text-center")}>
            <p className="text-xs font-medium text-muted-foreground/70">
              Upgrade to remove ads
            </p>
            <p className="text-[11px] text-muted-foreground/40">
              Get Basic, Pro, or Elite for an ad-free experience
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
