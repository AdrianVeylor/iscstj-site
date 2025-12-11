"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Aluno = {
  nome: string;
  numero: string;
  curso: string;
};

export default function HorarioDoAluno() {
  const router = useRouter();
  const [aluno, setAluno] = useState<Aluno | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("aluno");

    if (!stored) {
      router.push("/login");
      return;
    }

    setAluno(JSON.parse(stored));
  }, [router]);

  if (!aluno) {
    return (
      <div className="pt-32 p-10 text-center text-gray-600">
        A carregar dados...
      </div>
    );
  }

  const horario = [
    { dia: "Segunda-feira", disciplina: "Anatomia", hora: "08:00 - 10:00" },
    { dia: "Segunda-feira", disciplina: "Saúde Pública I", hora: "10:30 - 12:00" },
    { dia: "Terça-feira", disciplina: "Microbiologia", hora: "08:00 - 10:00" },
    { dia: "Quarta-feira", disciplina: "Ética e Deontologia", hora: "09:00 - 11:00" },
    { dia: "Quinta-feira", disciplina: "Fisiologia Humana", hora: "08:00 - 10:00" },
    { dia: "Sexta-feira", disciplina: "Bioquímica", hora: "10:00 - 12:00" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">
      {/* Voltar */}
      <button
        onClick={() => router.push("/area-do-aluno")}
        className="text-blue-900 text-sm hover:underline mb-4"
      >
        ← Voltar à Área do Aluno
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Horário Semanal
        </h1>

        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="p-3">Dia</th>
              <th className="p-3">Disciplina</th>
              <th className="p-3">Horário</th>
            </tr>
          </thead>

          <tbody>
            {horario.map((linha, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{linha.dia}</td>
                <td className="p-3">{linha.disciplina}</td>
                <td className="p-3">{linha.hora}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
