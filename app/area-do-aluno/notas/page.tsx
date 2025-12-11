"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { obterNotasPorAluno, Nota } from "@/app/utils/notas";

export default function NotasDoAluno() {
  const router = useRouter();
  const [aluno, setAluno] = useState<any>(null);
  const [notas, setNotas] = useState<Nota[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("aluno");

    if (!stored) {
      router.push("/login");
      return;
    }

    const data = JSON.parse(stored);
    setAluno(data);

    const dadosNotas = obterNotasPorAluno(data.numero);
    setNotas(dadosNotas);
  }, [router]);

  if (!aluno) {
    return (
      <div className="pt-32 p-10 text-center text-gray-600">
        A carregar dados...
      </div>
    );
  }

  const media =
    notas.length > 0
      ? (
          notas.reduce((acc, n) => acc + Number(n.nota), 0) / notas.length
        ).toFixed(1)
      : "—";

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">
      <button
        onClick={() => router.push("/area-do-aluno")}
        className="text-blue-900 text-sm hover:underline mb-4"
      >
        ← Voltar à Área do Aluno
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Notas do Aluno
        </h1>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="p-3">Disciplina</th>
              <th className="p-3">Nota</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>

          <tbody>
            {notas.map((n, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{n.disciplina}</td>
                <td className="p-3 font-bold">{n.nota}</td>
                <td
                  className={`p-3 ${
                    n.estado === "Aprovado"
                      ? "text-green-600"
                      : n.estado === "Reprovado"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {n.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-900 rounded">
          <p className="text-blue-900 font-bold text-lg">Média Final: {media}</p>
        </div>
      </div>
    </div>
  );
}
