"use client";

import { useRouter } from "next/navigation";

const alunosMock = [
  {
    nome: "João Miguel",
    numero: "2024001",
    curso: "Enfermagem",
  },
  {
    nome: "Ana Paula",
    numero: "2024002",
    curso: "Análises Clínicas",
  },
  {
    nome: "Carlos André",
    numero: "2024003",
    curso: "Saúde Pública",
  },
];

export default function SecretariaDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* CABEÇALHO */}
        <div className="bg-white p-6 rounded-xl shadow mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Painel da Secretaria
            </h1>
            <p className="text-gray-600">
              Gestão académica e administrativa
            </p>
          </div>

          <button
            onClick={() => router.push("/admin/login")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Terminar Sessão
          </button>
        </div>

        {/* ATALHOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div
            onClick={() => router.push("/admin/login/secretaria/documentos")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-bold text-blue-900">Documentos</h2>
            <p className="text-gray-600">
              Emitir declarações e certificados
            </p>
          </div>

          <div
            onClick={() => router.push("/admin/login/secretaria/propinas")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-bold text-blue-900">Propinas</h2>
            <p className="text-gray-600">
              Confirmar e registar pagamentos
            </p>
          </div>

          <div
            onClick={() => router.push("/admin/login/secretaria/matriculas")}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer"
          >
            <h2 className="text-xl font-bold text-blue-900">Matrículas</h2>
            <p className="text-gray-600">
              Pedidos de inscrição dos alunos
            </p>
          </div>
        </div>

        {/* LISTA DE ALUNOS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-blue-900 mb-4">
            Alunos Recentes
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 border-b">
                <th className="text-left p-3">Nome</th>
                <th className="text-left p-3">Número</th>
                <th className="text-left p-3">Curso</th>
                <th className="text-left p-3">Ações</th>
              </tr>
            </thead>

            <tbody>
              {alunosMock.map((aluno, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3">{aluno.nome}</td>
                  <td className="p-3">{aluno.numero}</td>
                  <td className="p-3">{aluno.curso}</td>
                  <td className="p-3">
                    <button
                      onClick={() =>
                        router.push(
                          `/admin/login/secretaria/documentos?aluno=${aluno.numero}`
                        )
                      }
                      className="text-blue-900 hover:underline text-sm"
                    >
                      Ver Documentos
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
