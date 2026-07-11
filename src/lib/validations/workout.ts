import { z } from "zod";

export const workoutLogSchema = z.object({
  exerciseId: z.string().uuid(),
  date: z.string(),
  sets: z.array(
    z.object({
      reps: z.number().min(0).optional(),
      weight: z.number().min(0).optional(),
      duration: z.number().min(0).optional(),
      distance: z.number().min(0).optional(),
    })
  ),
  notes: z.string().optional(),
  durationMinutes: z.number().min(0).optional(),
});

export type WorkoutLogInput = z.infer<typeof workoutLogSchema>;
