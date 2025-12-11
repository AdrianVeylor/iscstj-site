import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/area-do-aluno", "/dashboard"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (protectedRoutes.some((r) => req.nextUrl.pathname.startsWith(r))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}
