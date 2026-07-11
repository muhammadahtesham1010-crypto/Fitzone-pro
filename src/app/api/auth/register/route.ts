import { NextResponse } from "next/server";
import { registerUser } from "@/lib/auth/register-handler";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await registerUser({ name, email, password });

    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Registration failed" },
      { status: 400 }
    );
  }
}
