"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { X, Dumbbell, LogOut } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const { data: session } = useSession();

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" onClick={onClose} />
      )}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 border-l border-emerald-500/10 bg-card p-6 shadow-2xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
              <Dumbbell className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">
              FitZone <span className="text-emerald-400">Pro</span>
            </span>
          </div>
          <button onClick={onClose} className="rounded-lg p-2 text-muted-foreground hover:bg-emerald-500/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 border-t border-emerald-500/10 pt-6">
          {session?.user ? (
            <>
              <div className="mb-4 flex items-center gap-3 rounded-lg bg-emerald-500/10 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white">
                  {session.user.name?.[0] || "U"}
                </div>
                <div>
                  <p className="text-sm font-medium">{session.user.name}</p>
                  <p className="text-xs text-muted-foreground">{session.user.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard/profile"
                  onClick={onClose}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                onClick={onClose}
                className="rounded-lg border border-emerald-500/20 px-4 py-2.5 text-center text-sm font-medium transition-colors hover:bg-emerald-500/10"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={onClose}
                className="rounded-lg bg-emerald-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-emerald-600"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
