import { NextResponse } from "next/server";

const alunos = [
  {
    numero: "2024001",
    senha: "123456",
    nome: "João Marcos",
    curso: "Enfermagem Geral",
    foto: "/default-user.png",
  },
  {
    numero: "2024002",
    senha: "senha123",
    nome: "Maria João",
    curso: "Radiologia",
    foto: "/default-user.png",
  },
];

// Função para decodificar o token
function decodeToken(token: string) {
  try {
    const decoded = Buffer.from(token, "base64").toString();
    const [numero, senha] = decoded.split(":");
    return { numero, senha };
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie");

  if (!cookie || !cookie.includes("token=")) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const token = cookie.split("token=")[1].split(";")[0];
  const dados = decodeToken(token);

  if (!dados) {
    return NextResponse.json({ error: "Token inválido" }, { status: 401 });
  }

  const aluno = alunos.find(
    (a) => a.numero === dados.numero && a.senha === dados.senha
  );

  if (!aluno) {
    return NextResponse.json({ error: "Aluno não encontrado" }, { status: 404 });
  }

  return NextResponse.json({
    nome: aluno.nome,
    numero: aluno.numero,
    curso: aluno.curso,
    foto: aluno.foto,
  });
}
