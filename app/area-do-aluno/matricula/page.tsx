"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Disciplina = {
  id: number;
  nome: string;
  docente: string;
  horas: number;
};

const disciplinasDisponiveis: Disciplina[] = [
  { id: 1, nome: "Anatomia I", docente: "Prof. António Manuel", horas: 60 },
  { id: 2, nome: "Microbiologia", docente: "Prof. Ana Vieira", horas: 45 },
  { id: 3, nome: "Saúde Pública I", docente: "Prof. Joaquim Paulo", horas: 40 },
  { id: 4, nome: "Ética e Deontologia", docente: "Prof. Maria João", horas: 30 },
  { id: 5, nome: "Bioestatística", docente: "Prof. Manuel Alberto", horas: 45 },
  { id: 6, nome: "Enfermagem Geral I", docente: "Prof. Sofia Andrade", horas: 60 },
];

export default function MatriculaPage() {
  const router = useRouter();

  const [aluno, setAluno] = useState<any>(null);
  const [selecionadas, setSelecionadas] = useState<number[]>([]);
  const [mensagem, setMensagem] = useState("");

  // Carregar aluno e matrículas
  useEffect(() => {
    const stored = localStorage.getItem("aluno");
    const saved = localStorage.getItem("matricula");

    if (!stored) {
      router.push("/login");
      return;
    }

    setAluno(JSON.parse(stored));

    if (saved) {
      setSelecionadas(JSON.parse(saved));
    }
  }, [router]);

  if (!aluno) {
    return <div className="pt-32 text-center text-gray-600">A carregar...</div>;
  }

  // Marcar disciplina
  function toggleDisciplina(id: number) {
    let novaLista: number[];

    if (selecionadas.includes(id)) {
      novaLista = selecionadas.filter((d) => d !== id);
    } else {
      novaLista = [...selecionadas, id];
    }

    setSelecionadas(novaLista);
    localStorage.setItem("matricula", JSON.stringify(novaLista));
  }

  // Concluir matrícula
  function finalizar() {
    setMensagem("Matrícula realizada com sucesso!");

    setTimeout(() => setMensagem(""), 3000);
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">
      
      {/* Voltar */}
      <button
        onClick={() => router.push("/area-do-aluno")}
        className="text-blue-900 text-sm hover:underline mb-4"
      >
        ← Voltar à Área do Aluno
      </button>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Matrícula – Seleção de Disciplinas
        </h1>

        <p className="text-gray-700 mb-6">
          Selecione as disciplinas que pretende frequentar neste semestre.
        </p>

        {/* Mensagem */}
        {mensagem && (
          <div className="mb-4 rounded-lg bg-green-100 text-green-700 px-4 py-2 text-sm">
            {mensagem}
          </div>
        )}

        {/* Lista de disciplinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disciplinasDisponiveis.map((disc) => {
            const ativo = selecionadas.includes(disc.id);

            return (
              <div
                key={disc.id}
                className={`p-5 rounded-xl border shadow-sm cursor-pointer transition ${
                  ativo
                    ? "bg-blue-50 border-blue-900"
                    : "bg-white hover:shadow-lg"
                }`}
                onClick={() => toggleDisciplina(disc.id)}
              >
                <h2 className="text-xl font-bold text-blue-900">{disc.nome}</h2>
                <p className="text-gray-600 text-sm">Docente: {disc.docente}</p>
                <p className="text-gray-600 text-sm">Horas: {disc.horas}</p>

                <div className="mt-3">
                  {ativo ? (
                    <span className="text-green-700 font-semibold">
                      ✔ Selecionada
                    </span>
                  ) : (
                    <span className="text-gray-500">Clique para selecionar</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Finalizar */}
        <div className="mt-8 text-right">
          <button
            onClick={finalizar}
            className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-950"
          >
            Finalizar Matrícula
          </button>
        </div>

        {/* Resumo */}
        <div className="mt-10 bg-blue-50 border-l-4 border-blue-900 p-4 rounded">
          <h2 className="text-lg font-bold text-blue-900 mb-2">Resumo</h2>

          {selecionadas.length === 0 ? (
            <p className="text-gray-600">Nenhuma disciplina selecionada.</p>
          ) : (
            <ul className="list-disc pl-6 text-gray-700">
              {selecionadas.map((id) => {
                const d = disciplinasDisponiveis.find((x) => x.id === id);
                return <li key={id}>{d?.nome}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
