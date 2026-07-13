import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const user = await db.query.users.findFirst({
      where: (u, { eq }) => eq(u.email, email),
    });

    if (!user) {
      return NextResponse.json(
        { message: "Reset link sent if account exists" },
        { status: 200 }
      );
    }

    const token = crypto.randomBytes(32).toString("hex");

    if (process.env.RESEND_API_KEY) {
      try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "FitZone Pro <noreply@fitzone.app>",
          to: email,
          subject: "Password Reset - FitZone Pro",
          html: `<p>Click <a href="${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${token}">here</a> to reset your password. This link expires in 1 hour.</p>`,
        });
      } catch {
        console.log("Reset email not sent (Resend not configured)");
      }
    }

    return NextResponse.json(
      { message: "Reset link sent if account exists" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send reset link" },
      { status: 500 }
    );
  }
}
