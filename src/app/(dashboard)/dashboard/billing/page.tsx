"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { CreditCard, CheckCircle, XCircle, AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface SubscriptionData {
  plan: string;
  status: string;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean | null;
  trialEnd: string | null;
}

export default function BillingPage() {
  const { data: session } = useSession();
  const [sub, setSub] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    fetch("/api/subscription")
      .then((res) => res.json())
      .then(setSub)
      .catch(() => toast.error("Failed to load subscription"))
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = async () => {
    if (!confirm("Are you sure you want to cancel? Your plan will remain active until the end of the billing period.")) return;
    setCancelling(true);
    try {
      const res = await fetch("/api/stripe/cancel-subscription", { method: "POST" });
      if (!res.ok) throw new Error();
      setSub((prev) => prev ? { ...prev, cancelAtPeriodEnd: true } : prev);
      toast.success("Subscription will be canceled at period end");
    } catch {
      toast.error("Failed to cancel subscription");
    } finally {
      setCancelling(false);
    }
  };

  const statusColors: Record<string, string> = {
    active: "text-emerald-400",
    trialing: "text-blue-400",
    canceled: "text-red-400",
    past_due: "text-yellow-400",
  };

  const statusIcons: Record<string, typeof CheckCircle> = {
    active: CheckCircle,
    trialing: AlertTriangle,
    canceled: XCircle,
    past_due: AlertTriangle,
  };

  const StatusIcon = statusIcons[sub?.status || "active"] || CheckCircle;

  const formatDate = (date: string | null) => {
    if (!date) return "—";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-400" />
      </div>
    );
  }

  const planName = sub?.plan || "Free";
  const isFree = planName === "Free";
  const planColors: Record<string, string> = {
    Basic: "bg-blue-500/10 text-blue-400",
    Pro: "bg-emerald-500/10 text-emerald-400",
    Elite: "bg-purple-500/10 text-purple-400",
    Free: "bg-muted/10 text-muted-foreground",
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <AnimatedSection>
        <h2 className="text-2xl font-bold">Your <GradientText>Billing</GradientText></h2>
        <p className="text-muted-foreground">Manage your subscription and payment details.</p>
      </AnimatedSection>

      <GlassCard>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/10 p-3">
              <CreditCard className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Current Plan</h3>
              <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
            </div>
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${planColors[planName] || "bg-muted/10 text-muted-foreground"}`}>
            {planName}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-emerald-500/5 p-4">
            <span className="text-sm text-muted-foreground">Status</span>
            <span className={`flex items-center gap-1.5 text-sm font-medium ${statusColors[sub?.status || "active"] || "text-emerald-400"}`}>
              <StatusIcon className="h-4 w-4" />
              {sub?.status === "trialing" ? "Trial" : sub?.status || "Active"}
            </span>
          </div>

          {sub?.trialEnd && (
            <div className="flex items-center justify-between rounded-xl bg-blue-500/5 p-4">
              <span className="text-sm text-muted-foreground">Trial ends</span>
              <span className="text-sm font-medium">{formatDate(sub.trialEnd)}</span>
            </div>
          )}

          {sub?.currentPeriodEnd && !sub.trialEnd && (
            <div className="flex items-center justify-between rounded-xl bg-emerald-500/5 p-4">
              <span className="text-sm text-muted-foreground">{sub.cancelAtPeriodEnd ? "Access until" : "Next billing"}</span>
              <span className="text-sm font-medium">{formatDate(sub.currentPeriodEnd)}</span>
            </div>
          )}

          {sub?.cancelAtPeriodEnd && (
            <div className="rounded-xl bg-yellow-500/10 p-4 text-sm text-yellow-400">
              Your subscription will be canceled at the end of the current billing period. You can reactivate anytime.
            </div>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          {!isFree && !sub?.cancelAtPeriodEnd && (
            <button
              onClick={handleCancel}
              disabled={cancelling}
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/20 px-6 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500/10 disabled:opacity-50"
            >
              {cancelling && <Loader2 className="h-4 w-4 animate-spin" />}
              Cancel Subscription
            </button>
          )}
          {isFree && (
            <p className="text-sm text-muted-foreground">
              You&apos;re on the Free plan.{' '}
              <a href="/membership" className="text-emerald-400 hover:underline">Upgrade here</a>.
            </p>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
