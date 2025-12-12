import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get("auth")?.value;
  const url = req.nextUrl.pathname;

  // ROTAS PROTEGIDAS
  if (url.startsWith("/admin")) {
    if (!authCookie) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    const user = JSON.parse(authCookie);

    // SECRETARIA NÃO ENTRA NO DASHBOARD ADMIN
    if (
      url.startsWith("/admin/login/dashboard") &&
      user.role !== "admin"
    ) {
      return NextResponse.redirect(
        new URL("/admin/login/secretaria", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
