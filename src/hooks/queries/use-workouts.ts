"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useWorkouts(userId?: string) {
  return useQuery({
    queryKey: ["workouts", userId],
    queryFn: async () => {
      const res = await fetch(`/api/workouts?userId=${userId}`);
      if (!res.ok) throw new Error("Failed to fetch workouts");
      return res.json();
    },
    enabled: !!userId,
  });
}

export function useLogWorkout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Record<string, unknown>) => {
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to log workout");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts"] });
    },
  });
}
