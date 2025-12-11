// utils/notas.ts

export const notasFake = [
  {
    id: 1,
    disciplina: "Introdução à Saúde",
    nota: 14,
    estado: "Aprovado"
  },
  {
    id: 2,
    disciplina: "Biologia Geral",
    nota: 16,
    estado: "Aprovado"
  },
  {
    id: 3,
    disciplina: "Anatomia",
    nota: 10,
    estado: "Frequência"
  }
];

// Função que retorna as notas do aluno
export function getNotasAluno() {
  // No futuro podemos filtrar por aluno
  return notasFake;
}
