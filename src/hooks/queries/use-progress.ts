"use client";

import { useQuery } from "@tanstack/react-query";

export function useWeightLogs(userId?: string) {
  return useQuery({
    queryKey: ["weight-logs", userId],
    queryFn: async () => {
      const res = await fetch(`/api/progress/weight?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch weight logs");
      return res.json();
    },
    enabled: !!userId,
  });
}

export function useDashboardStats(userId?: string) {
  return useQuery({
    queryKey: ["dashboard-stats", userId],
    queryFn: async () => {
      const res = await fetch(`/api/dashboard/stats?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
    enabled: !!userId,
  });
}
