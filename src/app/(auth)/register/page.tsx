import { RegisterForm } from "@/components/auth/register-form";
import { Dumbbell } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create your FitZone Pro account and start your fitness journey",
};

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
