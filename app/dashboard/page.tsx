"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();
  const [admin, setAdmin] = useState<any>(null);

  // Simulação de autenticação administrativa
  useEffect(() => {
    const stored = localStorage.getItem("admin");

    if (!stored) {
      router.push("/admin/login"); // Redireciona se não estiver autenticado
      return;
    }

    setAdmin(JSON.parse(stored));
  }, [router]);

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 pt-32">
        A carregar painel administrativo...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-32">

      {/* CABEÇALHO */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Painel Administrativo
        </h1>
        <p className="text-gray-700">Bem-vindo, {admin.nome}</p>
      </div>

      {/* CARDS PRINCIPAIS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ALUNOS */}
        <div
          onClick={() => router.push("/admin/alunos")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Alunos</h2>
          <p className="text-gray-600">Gestão de estudantes e matrículas.</p>
        </div>

        {/* SECRETARIA */}
        <div
          onClick={() => router.push("/admin/login/secretaria")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Secretaria Digital</h2>
          <p className="text-gray-600">Processamento de documentos.</p>
        </div>

        {/* FINANÇAS */}
        <div
          onClick={() => router.push("/admin/financas")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Finanças</h2>
          <p className="text-gray-600">Pagamentos, propinas e controlo financeiro.</p>
        </div>

        {/* BIBLIOTECA */}
        <div
          onClick={() => router.push("/admin/biblioteca")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Biblioteca</h2>
          <p className="text-gray-600">Gerenciar materiais e PDFs.</p>
        </div>

        {/* SISTEMA ACADÉMICO */}
        <div
          onClick={() => router.push("/admin/academico")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Sistema Académico</h2>
          <p className="text-gray-600">Disciplinas, horários e docentes.</p>
        </div>

        {/* CONFIGURAÇÕES */}
        <div
          onClick={() => router.push("/admin/configuracoes")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Configurações</h2>
          <p className="text-gray-600">Definições do sistema.</p>
        </div>
      </div>

      {/* LOGOUT */}
      <div className="max-w-5xl mx-auto text-center pt-10">
        <button
          onClick={() => {
            localStorage.removeItem("admin");
            router.push("/admin/login");
          }}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Terminar Sessão
        </button>
      </div>

    </div>
  );
}
