"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useNutritionLogs(userId?: string, date?: string) {
  return useQuery({
    queryKey: ["nutrition-logs", userId, date],
    queryFn: async () => {
      const res = await fetch(`/api/nutrition?userId=${userId}&date=${date}`);
      if (!res.ok) throw new Error("Failed to fetch nutrition logs");
      return res.json();
    },
    enabled: !!userId && !!date,
  });
}

export function useLogMeal() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/nutrition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to log meal");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["nutrition-logs"] });
    },
  });
}
