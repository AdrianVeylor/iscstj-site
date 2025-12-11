"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Aluno = {
  nome: string;
  numero: string;
  curso: string;
  foto?: string;
};

export default function AreaDoAluno() {
  const router = useRouter();
  const [aluno, setAluno] = useState<Aluno | null>(null);

  // Carregar dados
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

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">

      {/* CABEÇALHO */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mb-8 text-center">
        {aluno.foto && (
          <img
            src={aluno.foto}
            alt="Foto"
            className="w-24 h-24 rounded-full border-4 border-blue-900 mx-auto mb-4 object-cover"
          />
        )}

        <h1 className="text-3xl font-bold text-blue-900">
          Olá, {aluno.nome}
        </h1>

        <p className="text-gray-700">Estudante: {aluno.numero}</p>
        <p className="text-gray-700">Curso: {aluno.curso}</p>
      </div>

      {/* CARDS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Meu Perfil */}
        <div
          onClick={() => router.push("/area-do-aluno/perfil")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Meu Perfil</h2>
          <p className="text-gray-600">Atualizar dados pessoais.</p>
        </div>

        {/* Notas */}
        <div
          onClick={() => router.push("/area-do-aluno/notas")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Notas</h2>
          <p className="text-gray-600">Consultar avaliações.</p>
        </div>

        {/* Documentos */}
        <div
          onClick={() => router.push("/area-do-aluno/documentos")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Documentos</h2>
          <p className="text-gray-600">Declarações e certificados.</p>
        </div>

        {/* Horário */}
        <div
          onClick={() => router.push("/area-do-aluno/horario")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Horário</h2>
          <p className="text-gray-600">Horários de aulas.</p>
        </div>

        {/* Matrícula */}
        <div
          onClick={() => router.push("/area-do-aluno/matricula")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Matrícula</h2>
          <p className="text-gray-600">Escolher disciplinas.</p>
        </div>

        {/* Biblioteca Digital */}
        <div
          onClick={() => router.push("/area-do-aluno/biblioteca")}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer transition"
        >
          <h2 className="text-xl font-bold text-blue-900">Biblioteca Digital</h2>
          <p className="text-gray-600">Livros e PDFs de estudo.</p>
        </div>
      </div>

      {/* HISTÓRICO ACADÉMICO */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Histórico Académico</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Introdução à Saúde — Aprovado</li>
          <li>• Biologia Geral — Aprovado</li>
          <li>• Anatomia — Frequência</li>
        </ul>
      </div>

      {/* LOGOUT */}
      <div className="max-w-4xl mx-auto text-center pt-10">
        <button
          onClick={() => {
            localStorage.removeItem("aluno");
            document.cookie = "token=; Max-Age=0; path=/";
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
