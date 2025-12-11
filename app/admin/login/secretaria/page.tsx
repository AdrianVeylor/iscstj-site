"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AdminUser = {
  nome: string;
  funcao: string;
};

type PedidoDocumento = {
  id: number;
  aluno: string;
  numero: string;
  curso: string;
  tipo: "Declaração de Frequência" | "Certificado" | "Histórico";
  estado: "Pendente" | "Em processamento" | "Concluído";
  dataPedido: string;
};

const PEDIDOS_FAKE: PedidoDocumento[] = [
  {
    id: 1,
    aluno: "João Pedro",
    numero: "2023001",
    curso: "Enfermagem Geral",
    tipo: "Declaração de Frequência",
    estado: "Pendente",
    dataPedido: "10/12/2025",
  },
  {
    id: 2,
    aluno: "Maria Luísa",
    numero: "2023002",
    curso: "Análises Clínicas",
    tipo: "Certificado",
    estado: "Em processamento",
    dataPedido: "08/12/2025",
  },
  {
    id: 3,
    aluno: "Carlos António",
    numero: "2023003",
    curso: "Radiologia / Imagiologia",
    tipo: "Histórico",
    estado: "Pendente",
    dataPedido: "09/12/2025",
  },
];

export default function SecretariaDigital() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminUser | null>(null);
  const [pedidos, setPedidos] = useState<PedidoDocumento[]>(PEDIDOS_FAKE);

  useEffect(() => {
    const stored = localStorage.getItem("admin");

    if (!stored) {
      router.push("/admin/login");
      return;
    }

    try {
      setAdmin(JSON.parse(stored));
    } catch {
      router.push("/admin/login");
    }
  }, [router]);

  if (!admin) {
    return (
      <div className="pt-32 text-center text-gray-600">
        A carregar secretaria digital...
      </div>
    );
  }

  function atualizarEstado(id: number, novoEstado: PedidoDocumento["estado"]) {
    setPedidos((lista) =>
      lista.map((p) =>
        p.id === id
          ? {
              ...p,
              estado: novoEstado,
            }
          : p
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 md:px-6 max-w-6xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <button
            onClick={() => router.push("/admin/dashboard")}
            className="text-xs text-blue-900 hover:underline mb-1"
          >
            ← Voltar ao Painel Admin
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Secretaria Digital
          </h1>
          <p className="text-gray-600 text-sm">
            Gestão de pedidos de declarações, certificados e históricos.
          </p>
        </div>

        <div className="text-right text-xs text-gray-500">
          Operador: <span className="font-semibold">{admin.nome}</span>
          <br />
          Função: <span className="font-semibold">{admin.funcao}</span>
        </div>
      </div>

      {/* Lista de Pedidos */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-bold text-blue-900 mb-4">
          Pedidos de Documentos
        </h2>

        {pedidos.length === 0 ? (
          <p className="text-gray-600 text-sm">
            Não existem pedidos pendentes no momento.
          </p>
        ) : (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-3 text-left">Aluno</th>
                <th className="p-3 text-left">Nº</th>
                <th className="p-3 text-left">Curso</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Data</th>
                <th className="p-3 text-left">Ações</th>
              </tr>
            </thead>

            <tbody>
              {pedidos.map((p) => (
                <tr key={p.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{p.aluno}</td>
                  <td className="p-3">{p.numero}</td>
                  <td className="p-3">{p.curso}</td>
                  <td className="p-3">{p.tipo}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        p.estado === "Concluído"
                          ? "bg-green-100 text-green-700"
                          : p.estado === "Em processamento"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {p.estado}
                    </span>
                  </td>
                  <td className="p-3">{p.dataPedido}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() =>
                        atualizarEstado(p.id, "Em processamento")
                      }
                      className="px-2 py-1 text-xs rounded border hover:bg-gray-100"
                    >
                      Processar
                    </button>
                    <button
                      onClick={() => atualizarEstado(p.id, "Concluído")}
                      className="px-2 py-1 text-xs rounded bg-green-600 text-white hover:bg-green-700"
                    >
                      Concluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <p className="mt-4 text-xs text-gray-500">
          * Sistema em modo de demonstração. Integração real com base de dados
          poderá ser feita futuramente.
        </p>
      </div>
    </div>
  );
}
