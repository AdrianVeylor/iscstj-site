import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // DEMO CONTROLADA
  if (email === "admin@iscstj.com" && password === "admin123") {
    const user = {
      email,
      role: "admin",
    };

    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", JSON.stringify(user), {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  if (email === "secretaria@iscstj.com" && password === "secret123") {
    const user = {
      email,
      role: "secretaria",
    };

    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", JSON.stringify(user), {
      httpOnly: true,
      path: "/",
    });

    return res;
  }

  return NextResponse.json(
    { error: "Credenciais inválidas" },
    { status: 401 }
  );
}
