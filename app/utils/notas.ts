// app/utils/notas.ts

export type Nota = {
  id: number;
  alunoNumero: string;
  disciplina: string;
  nota: number; // número mesmo, não string
  estado: "Aprovado" | "Reprovado" | "Frequência";
};

// 🔹 Base de dados FALSA das notas
const NOTAS_FAKE: Nota[] = [
  {
    id: 1,
    alunoNumero: "2025001",
    disciplina: "Introdução à Saúde",
    nota: 16,
    estado: "Aprovado",
  },
  {
    id: 2,
    alunoNumero: "2025001",
    disciplina: "Biologia Geral",
    nota: 14,
    estado: "Aprovado",
  },
  {
    id: 3,
    alunoNumero: "2025001",
    disciplina: "Anatomia I",
    nota: 12,
    estado: "Frequência",
  },
  // Podes criar depois notas para outros alunos:
  {
    id: 4,
    alunoNumero: "2023001",
    disciplina: "Epidemiologia",
    nota: 15,
    estado: "Aprovado",
  },
];

// 🔹 Função para buscar notas de um aluno específico
export function obterNotasPorAluno(numeroAluno: string): Nota[] {
  return NOTAS_FAKE.filter((n) => n.alunoNumero === numeroAluno);
}
