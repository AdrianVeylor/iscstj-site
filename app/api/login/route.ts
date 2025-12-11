import { NextResponse } from "next/server";
import { autenticarAluno } from "../../utils/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { numero, senha } = body ?? {};

    if (!numero || !senha) {
      return NextResponse.json(
        { ok: false, message: "Número de estudante e senha são obrigatórios." },
        { status: 400 }
      );
    }

    const resultado = autenticarAluno(String(numero).trim(), String(senha).trim());

    if (!resultado) {
      return NextResponse.json(
        { ok: false, message: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    const { aluno, token } = resultado;

    const response = NextResponse.json(
      { ok: true, aluno },
      { status: 200 }
    );

    // Criar cookie
    response.cookies.set("token", token, {
      path: "/",
      httpOnly: false,   // ← enquanto testamos, deixamos false
      maxAge: 60 * 60 * 4,
    });

    return response;
  } catch (err) {
    console.error("Erro no /api/login:", err);
    return NextResponse.json(
      { ok: false, message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
