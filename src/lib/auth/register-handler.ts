"use server";

import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { users, profiles, subscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function registerUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const existing = await db.query.users.findFirst({
    where: (users, { eq }) => eq(users.email, email),
  });

  if (existing) {
    if (!existing.password) {
      const hashed = await bcrypt.hash(password, 12);
      await db
        .update(users)
        .set({ password: hashed, name: existing.name || name, updatedAt: new Date() })
        .where(eq(users.id, existing.id));
      return { id: existing.id, email: existing.email, name: existing.name || name };
    }
    throw new Error("User already exists with this email");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const [user] = await db
    .insert(users)
    .values({
      name,
      email,
      password: hashedPassword,
    })
    .returning();

  await db.insert(profiles).values({
    userId: user.id,
    fullName: name,
  });

  const freePlan = await db.query.membershipPlans.findFirst({
    where: (plans, { eq }) => eq(plans.name, "Free"),
  });

  if (freePlan) {
    await db.insert(subscriptions).values({
      userId: user.id,
      planId: freePlan.id,
      status: "active",
      currentPeriodStart: new Date(),
    });
  }

  try {
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "FitZone Pro <noreply@fitzone.app>",
        to: email,
        subject: "Welcome to FitZone Pro!",
        html: `<p>Hi ${name},</p><p>Welcome to FitZone Pro! Your free account is ready.</p><p>Start your fitness journey today!</p>`,
      });
    }
  } catch {
    console.log("Welcome email not sent (Resend not configured)");
  }

  return { id: user.id, email: user.email, name: user.name };
}
