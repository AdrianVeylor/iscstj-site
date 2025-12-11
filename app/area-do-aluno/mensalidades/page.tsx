"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { obterPropinas, Mensalidade } from "@/app/utils/propinas";

export default function PaginaPropinas() {
  const router = useRouter();
  const [aluno, setAluno] = useState<any>(null);
  const [propinas, setPropinas] = useState<Mensalidade[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("aluno");

    if (!stored) {
      router.push("/login");
      return;
    }

    const data = JSON.parse(stored);
    setAluno(data);

    const dadosPropinas = obterPropinas(data.numero);
    setPropinas(dadosPropinas);
  }, [router]);

  if (!aluno) {
    return (
      <div className="pt-32 p-10 text-center text-gray-600">
        A carregar dados...
      </div>
    );
  }

  const totalPago = propinas
    .filter((p) => p.pago)
    .reduce((soma, p) => soma + p.valor, 0);

  const totalPendente = propinas
    .filter((p) => !p.pago)
    .reduce((soma, p) => soma + p.valor, 0);

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

        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Propinas / Mensalidades
        </h1>

        {/* Resumo geral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl shadow bg-green-50 border-l-4 border-green-600">
            <h2 className="text-green-700 font-bold text-xl">Total Pago</h2>
            <p className="text-green-800 text-2xl font-semibold mt-2">
              {totalPago.toLocaleString()} Kz
            </p>
          </div>

          <div className="p-6 rounded-xl shadow bg-red-50 border-l-4 border-red-600">
            <h2 className="text-red-700 font-bold text-xl">Pendente</h2>
            <p className="text-red-800 text-2xl font-semibold mt-2">
              {totalPendente.toLocaleString()} Kz
            </p>
          </div>
        </div>

        {/* Tabela das propinas */}
        <table className="w-full border-collapse mb-6">
          <thead>
            <tr className="border-b bg-gray-200">
              <th className="p-3 text-left">Mês</th>
              <th className="p-3 text-left">Valor</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Data de Pagamento</th>
            </tr>
          </thead>

          <tbody>
            {propinas.map((p, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.mes}</td>
                <td className="p-3">{p.valor.toLocaleString()} Kz</td>
                <td
                  className={`p-3 font-bold ${
                    p.pago ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.pago ? "Pago" : "Pendente"}
                </td>
                <td className="p-3">
                  {p.pago ? p.dataPagamento : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Aviso */}
        {totalPendente > 0 && (
          <div className="p-4 bg-yellow-100 border-l-4 border-yellow-600 rounded">
            <p className="text-yellow-700">
              Algumas mensalidades estão pendentes. Dirija-se à secretaria para regularização.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
