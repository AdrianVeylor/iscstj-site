"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type AdminUser = {
  nome: string;
  funcao: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminUser | null>(null);

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
        A carregar painel administrativo...
      </div>
    );
  }

  // Dados fictícios para o painel
  const totalAlunos = 320;
  const pendenciasPropinas = 57;
  const docsPendentes = 18;
  const matriculasPendentes = 23;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 md:px-6 max-w-6xl mx-auto">
      {/* CABEÇALHO */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase text-gray-500">
            Painel Administrativo
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Bem-vindo, {admin.nome}
          </h1>
          <p className="text-gray-600 text-sm">
            Função: <span className="font-semibold">{admin.funcao}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => router.push("/admin/secretaria")}
            className="px-4 py-2 rounded-lg bg-blue-900 text-white text-sm hover:bg-blue-950"
          >
            Abrir Secretaria Digital
          </button>
          <button
            onClick={() => router.push("/area-do-aluno/dashboard")}
            className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100"
          >
            Ver Painel do Estudante
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              document.cookie =
                "admin_token=; Max-Age=0; path=/;";
              router.push("/admin/login");
            }}
            className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700"
          >
            Terminar Sessão
          </button>
        </div>
      </div>

      {/* CARDS DE RESUMO */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-900">
          <p className="text-xs text-gray-500">Alunos Ativos</p>
          <p className="text-2xl font-bold text-blue-900">{totalAlunos}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-yellow-500">
          <p className="text-xs text-gray-500">Matrículas Pendentes</p>
          <p className="text-2xl font-bold text-yellow-600">
            {matriculasPendentes}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-red-500">
          <p className="text-xs text-gray-500">Pendências de Propinas</p>
          <p className="text-2xl font-bold text-red-600">
            {pendenciasPropinas}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-600">
          <p className="text-xs text-gray-500">Documentos Pendentes</p>
          <p className="text-2xl font-bold text-green-700">
            {docsPendentes}
          </p>
        </div>
      </div>

      {/* SECÇÃO CENTRAL: GESTÃO RÁPIDA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        {/* Atalhos de Gestão */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-900 mb-3">
            Ações Rápidas
          </h2>

          <button
            onClick={() => router.push("/admin/secretaria")}
            className="w-full text-left px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            📄 Gerir pedidos de documentos
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/matricula")}
            className="w-full text-left px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            📝 Ver simulação de matrícula do aluno
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/propinas")}
            className="w-full text-left px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            💰 Ver área de propinas (lado do aluno)
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/biblioteca")}
            className="w-full text-left px-4 py-2 rounded-lg border text-sm hover:bg-gray-50"
          >
            📚 Ver biblioteca digital (lado do aluno)
          </button>
        </div>

        {/* Avisos Internos */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Avisos Internos
          </h2>

          <div className="border-l-4 border-blue-900 pl-4">
            <h3 className="font-semibold text-blue-900 text-sm">
              Atualizar base de dados dos estudantes
            </h3>
            <p className="text-gray-700 text-xs">
              Antes do início oficial das aulas, confirmar listas de
              estudantes por curso e turno.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-semibold text-yellow-600 text-sm">
              Padronizar modelos de documentos
            </h3>
            <p className="text-gray-700 text-xs">
              Certificados e declarações devem seguir o layout oficial
              homologado pela direção.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
