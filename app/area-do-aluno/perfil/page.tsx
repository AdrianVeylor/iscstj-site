"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Aluno = {
  nome: string;
  numero: string;
  curso: string;
  email?: string;
  telefone?: string;
  foto?: string;
};

export default function AreaDoAluno() {
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
      <div className="p-10 text-center text-gray-600 pt-32">
        A carregar dados...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">
      {/* Cabeçalho */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          Olá, {aluno.nome}
        </h1>
        <p className="text-gray-600">Número de Estudante: {aluno.numero}</p>
        <p className="text-gray-600">Curso: {aluno.curso}</p>
      </div>

      {/* Cards principais */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Meu Perfil */}
        <div
          onClick={() => router.push("/area-do-aluno/perfil")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-bold text-blue-900 mb-2">Meu Perfil</h2>
          <p className="text-gray-600">Atualizar foto e dados pessoais.</p>
        </div>

        {/* Notas */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Notas</h2>
          <p className="text-gray-600">Consulte as suas avaliações.</p>
        </div>

        {/* Horário */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Horário</h2>
          <p className="text-gray-600">Veja o horário das suas aulas.</p>
        </div>

        {/* Mensalidades */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Mensalidades</h2>
          <p className="text-gray-600">Acompanhe pagamentos e pendências.</p>
        </div>
      </div>

      {/* Histórico Académico simples (placeholder) */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Histórico Académico</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Introdução à Saúde — Aprovado</li>
          <li>• Biologia Geral — Aprovado</li>
          <li>• Anatomia — Frequência</li>
        </ul>
      </div>

      {/* Logout */}
      <div className="max-w-4xl mx-auto py-10 text-center">
        <button
          onClick={() => {
            localStorage.removeItem("aluno");
            document.cookie = "token=; Max-Age=0; path=/;";
            router.push("/login");
          }}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
        >
          Terminar Sessão
        </button>
      </div>
    </div>
  );
}
