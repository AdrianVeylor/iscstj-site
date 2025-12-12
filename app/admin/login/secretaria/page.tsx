"use client";

import { useRouter } from "next/navigation";

export default function SecretariaDigital() {
  const router = useRouter();

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-2">
        Secretaria Digital
      </h1>
      <p className="text-gray-600 mb-8">
        Gestão administrativa e académica do ISCSTJ
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* DOCUMENTOS */}
        <div
          onClick={() => router.push("/admin/login/secretaria/documentos")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="font-bold text-blue-900 mb-2">📄 Documentos</h2>
          <p className="text-gray-600 text-sm">
            Declarações, certificados e comprovativos.
          </p>
        </div>

        {/* MATRÍCULAS */}
        <div
          onClick={() => router.push("/admin/login/secretaria/matriculas")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="font-bold text-blue-900 mb-2">🎓 Matrículas</h2>
          <p className="text-gray-600 text-sm">
            Validação e gestão de inscrições.
          </p>
        </div>

        {/* PROPINA */}
        <div
          onClick={() => router.push("/admin/login/secretaria/propinas")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="font-bold text-blue-900 mb-2">💰 Propinas</h2>
          <p className="text-gray-600 text-sm">
            Registo e controlo de pagamentos.
          </p>
        </div>

        {/* ALUNOS */}
        <div
          onClick={() => router.push("/admin/login/secretaria/alunos")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
        >
          <h2 className="font-bold text-blue-900 mb-2">👨‍🎓 Alunos</h2>
          <p className="text-gray-600 text-sm">
            Dados académicos dos estudantes.
          </p>
        </div>

      </div>
    </div>
  );
}
