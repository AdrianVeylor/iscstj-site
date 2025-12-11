// app/utils/auth.ts

export type AlunoCompleto = {
  numero: string;
  nome: string;
  senha: string;      // só fica aqui, nunca vai para o front
  curso: string;
  foto?: string;
};

export type AlunoPublico = Omit<AlunoCompleto, "senha">;

// 🔹 Base de dados falsa em memória (B1)
const ALUNOS_FAKE: AlunoCompleto[] = [
  {
    numero: "2023001",
    nome: "João Pedro",
    senha: "12345",
    curso: "Enfermagem Geral",
    foto: "/alunos/joao.jpg",
  },
  {
    numero: "2023002",
    nome: "Maria Luísa",
    senha: "12345",
    curso: "Análises Clínicas",
    foto: "/alunos/maria.jpg",
  },
  {
    numero: "2023003",
    nome: "Carlos António",
    senha: "12345",
    curso: "Radiologia / Imagiologia",
    foto: "/alunos/carlos.jpg",
  },
];

// 🔹 Função que valida número + senha
export function autenticarAluno(
  numero: string,
  senha: string
): { aluno: AlunoPublico; token: string } | null {
  const encontrado = ALUNOS_FAKE.find(
    (a) => a.numero === numero && a.senha === senha
  );

  if (!encontrado) return null;

  // Criar um token simples só para demonstração
  const token = Buffer.from(`${encontrado.numero}:${Date.now()}`).toString(
    "base64"
  );

  const { senha: _omit, ...alunoPublico } = encontrado;

  return {
    aluno: alunoPublico,
    token,
  };
}
