import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600">
        <Dumbbell className="h-8 w-8 text-white" />
      </div>
      <h1 className="mb-2 text-6xl font-bold text-emerald-400">404</h1>
      <h2 className="mb-4 text-2xl font-bold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-emerald-500 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
