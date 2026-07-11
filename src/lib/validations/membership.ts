import { z } from "zod";

export const membershipPlanSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().optional(),
  price: z.number().min(0, "Price must be positive"),
  interval: z.enum(["month", "year"]),
  features: z.array(z.string()),
  isActive: z.boolean().default(true),
  sortOrder: z.number().int().default(0),
});

export type MembershipPlanInput = z.infer<typeof membershipPlanSchema>;
