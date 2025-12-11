"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { obterNotasPorAluno, Nota } from "@/app/utils/notas";

type Aluno = {
  nome: string;
  numero: string;
  curso: string;
  foto?: string;
};

export default function DashboardAluno() {
  const router = useRouter();
  const [aluno, setAluno] = useState<Aluno | null>(null);
  const [notas, setNotas] = useState<Nota[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("aluno");

    if (!stored) {
      router.push("/login");
      return;
    }

    const data = JSON.parse(stored) as Aluno;
    setAluno(data);

    // Carregar notas simuladas
    const listaNotas = obterNotasPorAluno(data.numero);
    setNotas(listaNotas);
  }, [router]);

  if (!aluno) {
    return (
      <div className="pt-32 text-center text-gray-600">
        A carregar painel do estudante...
      </div>
    );
  }

  // Média Final
  const media =
    notas.length > 0
      ? (
          notas.reduce((acc, n) => acc + Number(n.nota || 0), 0) /
          notas.length
        ).toFixed(1)
      : "—";

  const qtdDisciplinas = notas.length || 4;

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-4 md:px-6 max-w-6xl mx-auto">

      {/* ================================================================= */}
      {/* PERFIL DO ESTUDANTE + SITUAÇÃO GERAL */}
      {/* ================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* CARD DE PERFIL */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6 flex gap-4 items-center">
          {aluno.foto ? (
            <img
              src={aluno.foto}
              alt="Foto do aluno"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-900 object-cover"
            />
          ) : (
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-900 flex items-center justify-center text-3xl font-bold text-white">
              {aluno.nome[0]}
            </div>
          )}

          <div>
            <p className="text-xs uppercase text-gray-500 mb-1">
              Painel do Estudante
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
              {aluno.nome}
            </h1>

            <p className="text-gray-700 text-sm mt-1">
              Nº Estudante: <span className="font-semibold">{aluno.numero}</span>
            </p>

            <p className="text-gray-700 text-sm">
              Curso: <span className="font-semibold">{aluno.curso}</span>
            </p>

            <button
              onClick={() => router.push("/area-do-aluno/perfil")}
              className="mt-3 inline-block text-sm text-blue-900 hover:underline"
            >
              Ver / editar perfil →
            </button>
          </div>
        </div>

        {/* CARD SITUAÇÃO GERAL */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-2">Situação Académica</h2>

          <p className="text-gray-700 text-sm">
            Estado:{" "}
            <span className="font-semibold text-green-600">Ativo • Regular</span>
          </p>

          <p className="text-gray-700 text-sm mt-2">
            Disciplinas no semestre:{" "}
            <span className="font-semibold">{qtdDisciplinas}</span>
          </p>

          <p className="text-gray-700 text-sm mt-2">
            Média geral:{" "}
            <span className="font-semibold">{media}</span>
          </p>

          <button
            onClick={() => router.push("/area-do-aluno/notas")}
            className="mt-4 text-sm text-blue-900 hover:underline"
          >
            Ver histórico de notas →
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* BLOCO: RESUMO DE NOTAS + ACESSOS RÁPIDOS */}
      {/* ================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

        {/* BLOCO DE NOTAS */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-900">Notas Recentes</h2>

            <button
              onClick={() => router.push("/area-do-aluno/notas")}
              className="text-sm text-blue-900 hover:underline"
            >
              Ver todas
            </button>
          </div>

          {notas.length === 0 ? (
            <p className="text-gray-600 text-sm">Sem notas registadas.</p>
          ) : (
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b bg-gray-100">
                  <th className="p-3 text-left">Disciplina</th>
                  <th className="p-3 text-left">Nota</th>
                  <th className="p-3 text-left">Estado</th>
                </tr>
              </thead>

              <tbody>
                {notas.slice(0, 5).map((n, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-3">{n.disciplina}</td>
                    <td className="p-3 font-semibold">{n.nota}</td>
                    <td
                      className={`p-3 font-medium ${
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
          )}

          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-900 rounded">
            <p className="text-blue-900 font-semibold text-sm">
              Média geral atual: <span className="text-lg">{media}</span>
            </p>
          </div>
        </div>

        {/* ACESSOS RÁPIDOS */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <h2 className="text-lg font-bold text-blue-900 mb-3">Acessos Rápidos</h2>

          <button
            onClick={() => router.push("/area-do-aluno/horario")}
            className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            📅 Ver Horário
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/propinas")}
            className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            💰 Consultar Propinas
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/documentos")}
            className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            📄 Certificados e Declarações
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/biblioteca")}
            className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            📚 Biblioteca Digital
          </button>

          <button
            onClick={() => router.push("/area-do-aluno/matricula")}
            className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-gray-50"
          >
            📝 Renovar Matrícula
          </button>
        </div>
      </div>

      {/* ================================================================= */}
      {/* AVISOS + CONTACTOS DA SECRETARIA */}
      {/* ================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">

        {/* Avisos */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Avisos Importantes
          </h2>

          <div className="border-l-4 border-blue-900 pl-4">
            <h4 className="font-semibold text-blue-900">📢 Renovação de Matrícula</h4>
            <p className="text-gray-700 text-sm">
              As matrículas do próximo semestre iniciam a 5 de Agosto. Evite atrasos.
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-semibold text-yellow-600">📘 Material de Estudo</h4>
            <p className="text-gray-700 text-sm">
              Novos ficheiros foram adicionados na biblioteca digital.
            </p>
          </div>
        </div>

        {/* Contactos */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-3">
          <h2 className="text-xl font-bold text-blue-900 mb-2">
            Contactos da Secretaria
          </h2>

          <p className="text-gray-700 text-sm">📍 Soyo — Província do Zaire</p>
          <p className="text-gray-700 text-sm">📧 secretaria@iscstj.ao</p>
          <p className="text-gray-700 text-sm">☎️ +244 999 000 000</p>
          <p className="text-gray-700 text-sm">💬 WhatsApp: +244 925 203 654</p>

          <button
            onClick={() => router.push("/contacto")}
            className="mt-3 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-900 text-white text-sm font-semibold hover:bg-blue-950"
          >
            Ir para página de Contacto
          </button>
        </div>
      </div>
    </div>
  );
}
