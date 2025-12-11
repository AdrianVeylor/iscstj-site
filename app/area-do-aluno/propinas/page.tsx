"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Tipos
export type Mensalidade = {
  id: number;
  mes: string;
  valor: number;
  estado: "Pendente" | "Paga";
};

// Mensalidades iniciais
const mensalidadesIniciais: Mensalidade[] = [
  { id: 1, mes: "Janeiro", valor: 25000, estado: "Pendente" },
  { id: 2, mes: "Fevereiro", valor: 25000, estado: "Pendente" },
  { id: 3, mes: "Março", valor: 25000, estado: "Pendente" },
  { id: 4, mes: "Abril", valor: 25000, estado: "Pendente" },
  { id: 5, mes: "Maio", valor: 25000, estado: "Pendente" },
];

export default function PropinasPage() {
  const router = useRouter();

  const [aluno, setAluno] = useState<any>(null);
  const [mensalidades, setMensalidades] = useState<Mensalidade[]>(mensalidadesIniciais);
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  // Carregar dados
  useEffect(() => {
    const stored = localStorage.getItem("aluno");
    const savedMensalidades = localStorage.getItem("mensalidades");

    if (!stored) {
      router.push("/login");
      return;
    }

    setAluno(JSON.parse(stored));

    if (savedMensalidades) {
      setMensalidades(JSON.parse(savedMensalidades));
    } else {
      setMensalidades(mensalidadesIniciais);
    }
  }, [router]);

  // Marcar pagamento
  function pagarMensalidade(id: number) {
    const atualizadas: Mensalidade[] = mensalidades.map((m) =>
      m.id === id ? { ...m, estado: "Paga" } : m
    );

    setMensalidades(atualizadas);
    localStorage.setItem("mensalidades", JSON.stringify(atualizadas));

    setMensagemSucesso("Pagamento registado com sucesso!");
    setTimeout(() => setMensagemSucesso(""), 3000);
  }

  if (!aluno) {
    return (
      <div className="pt-32 text-center text-gray-600">
        A carregar dados...
      </div>
    );
  }

  // Calcular totais
  const total = mensalidades.reduce((acc, m) => acc + m.valor, 0);
  const pagas = mensalidades.filter((m) => m.estado === "Paga").length;
  const pendentes = mensalidades.length - pagas;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">

      {/* Botão voltar */}
      <button
        onClick={() => router.push("/area-do-aluno")}
        className="text-blue-900 text-sm hover:underline mb-4"
      >
        ← Voltar à Área do Aluno
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Propinas / Mensalidades
        </h1>

        {/* Mensagem de sucesso */}
        {mensagemSucesso && (
          <div className="mb-4 rounded-lg bg-green-100 text-green-700 px-4 py-2 text-sm">
            {mensagemSucesso}
          </div>
        )}

        {/* Tabela */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="p-3 text-left">Mês</th>
              <th className="p-3 text-left">Valor</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Ação</th>
            </tr>
          </thead>

          <tbody>
            {mensalidades.map((m) => (
              <tr key={m.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{m.mes}</td>
                <td className="p-3">{m.valor.toLocaleString()} Kz</td>
                <td
                  className={`p-3 font-semibold ${
                    m.estado === "Paga" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {m.estado}
                </td>
                <td className="p-3">
                  {m.estado === "Pendente" ? (
                    <button
                      onClick={() => pagarMensalidade(m.id)}
                      className="px-4 py-1 bg-blue-900 text-white rounded-lg hover:bg-blue-950"
                    >
                      Marcar como Paga
                    </button>
                  ) : (
                    <span className="text-gray-500">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Resumo */}
        <div className="mt-6 bg-blue-50 border-l-4 border-blue-900 p-4 rounded">
          <p className="text-blue-900 font-bold text-lg">
            Total: {total.toLocaleString()} Kz
          </p>
          <p className="text-gray-700">Mensalidades pagas: {pagas}</p>
          <p className="text-gray-700">Mensalidades pendentes: {pendentes}</p>
        </div>
      </div>
    </div>
  );
}
