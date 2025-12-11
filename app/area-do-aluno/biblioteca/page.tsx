"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LIVROS, Livro } from "@/app/utils/biblioteca";

export default function BibliotecaDigital() {
  const router = useRouter();
  const [pesquisa, setPesquisa] = useState("");
  const [livrosFiltrados, setLivrosFiltrados] = useState<Livro[]>(LIVROS);

  useEffect(() => {
    setLivrosFiltrados(
      LIVROS.filter(
        (l) =>
          l.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
          l.autor.toLowerCase().includes(pesquisa.toLowerCase()) ||
          l.categoria.toLowerCase().includes(pesquisa.toLowerCase())
      )
    );
  }, [pesquisa]);

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">

      {/* Voltar */}
      <button
        onClick={() => router.push("/area-do-aluno")}
        className="text-blue-900 text-sm hover:underline mb-4"
      >
        ← Voltar à Área do Aluno
      </button>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Biblioteca Digital
        </h1>

        {/* Campo de pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar por título, autor ou categoria..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          className="w-full border p-3 rounded-lg mb-8"
        />

        {/* Lista de livros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {livrosFiltrados.map((livro) => (
            <div
              key={livro.id}
              className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={livro.capa}
                className="w-full h-56 object-cover rounded-lg mb-4"
                alt={livro.titulo}
              />

              <h3 className="text-xl font-bold text-blue-900">
                {livro.titulo}
              </h3>

              <p className="text-gray-700 text-sm">Autor: {livro.autor}</p>
              <p className="text-gray-500 text-sm mb-3">
                Categoria: {livro.categoria}
              </p>

              <a
                href={livro.link}
                target="_blank"
                className="block text-center bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-950"
              >
                Abrir PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
