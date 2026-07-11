import { z } from "zod";

export const nutritionLogSchema = z.object({
  date: z.string(),
  mealType: z.enum(["breakfast", "lunch", "dinner", "snack"]),
  foodName: z.string().min(1, "Food name is required"),
  calories: z.number().min(0).optional(),
  proteinG: z.number().min(0).optional(),
  carbsG: z.number().min(0).optional(),
  fatsG: z.number().min(0).optional(),
  servingSize: z.string().optional(),
});

export type NutritionLogInput = z.infer<typeof nutritionLogSchema>;
