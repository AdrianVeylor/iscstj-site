"use client";

import { useState } from "react";

type Documento = {
  id: number;
  titulo: string;
  categoria: "Declarações" | "Certificados" | "Pagamentos";
  ficheiro: string; // caminho do pdf
};

export default function DocumentosAluno() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [preview, setPreview] = useState<string | null>(null);

  // LISTA DOS DOCUMENTOS
  const documentos: Documento[] = [
    {
      id: 1,
      titulo: "Declaração de Frequência",
      categoria: "Declarações",
      ficheiro: "/documentos/declaracao_frequencia.pdf",
    },
    {
      id: 2,
      titulo: "Declaração de Matrícula",
      categoria: "Declarações",
      ficheiro: "/documentos/declaracao_matricula.pdf",
    },
    {
      id: 3,
      titulo: "Certificado de Estudos",
      categoria: "Certificados",
      ficheiro: "/documentos/certificado_estudos.pdf",
    },
    {
      id: 4,
      titulo: "Comprovativo de Pagamento de Propinas",
      categoria: "Pagamentos",
      ficheiro: "/documentos/comprovativo_propinas.pdf",
    },
  ];

  // FILTROS
  const filtrados = documentos.filter((doc) => {
    const matchCategoria = categoria === "Todos" || doc.categoria === categoria;
    const matchBusca = doc.titulo.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">

      {/* TÍTULO */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-blue-900">Documentos</h1>
        <p className="text-gray-600">
          Declarações, certificados e comprovativos disponíveis para download.
        </p>
      </div>

      {/* BUSCA + FILTRO */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row gap-4">
        
        {/* CAMPO DE BUSCA */}
        <input
          type="text"
          placeholder="Pesquisar documento..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 shadow-sm"
        />

        {/* FILTRO */}
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border rounded-lg px-4 py-2 shadow-sm"
        >
          <option value="Todos">Todas categorias</option>
          <option value="Declarações">Declarações</option>
          <option value="Certificados">Certificados</option>
          <option value="Pagamentos">Pagamentos</option>
        </select>
      </div>

      {/* LISTA DE DOCUMENTOS */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {filtrados.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-900 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-blue-900">{doc.titulo}</h2>
              <p className="text-gray-600 text-sm mt-1">{doc.categoria}</p>
            </div>

            <div className="flex gap-3 mt-4">
              {/* PRÉ-VISUALIZAR */}
              <button
                onClick={() => setPreview(doc.ficheiro)}
                className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-950"
              >
                Visualizar
              </button>

              {/* DOWNLOAD */}
              <a
                href={doc.ficheiro}
                download
                className="flex-1 bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 text-center"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL DE PRÉ-VISUALIZAÇÃO */}
      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6 z-50">

          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg relative">

            {/* BOTÃO FECHAR */}
            <button
              onClick={() => setPreview(null)}
              className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            {/* FRAME DO PDF */}
            <iframe
              src={preview}
              className="w-full h-[80vh] rounded-b-lg"
            ></iframe>

          </div>
        </div>
      )}
    </div>
  );
}
