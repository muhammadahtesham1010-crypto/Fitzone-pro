import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/about", "/programs", "/trainers", "/pricing", "/nutrition", "/workouts", "/blog", "/testimonials", "/faq", "/contact"];
const authRoutes = ["/login", "/register", "/forgot-password"];

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const isPublicRoute = publicRoutes.some((r) => pathname === r || pathname.startsWith(r + "/"));
  const isAuthRoute = authRoutes.some((r) => pathname.startsWith(r));

  if (isPublicRoute || isAuthRoute || pathname.startsWith("/_next") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const sessionToken = req.cookies.get("authjs.session-token")?.value ||
                       req.cookies.get("__Secure-authjs.session-token")?.value;

  if (!sessionToken && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (sessionToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|icons|manifest).*)"],
};
