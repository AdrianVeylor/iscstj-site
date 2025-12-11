"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  async function autenticar(e: any) {
    e.preventDefault();
    setErro("");

    try {
      const resposta = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero, senha }),
      });

      const data = await resposta.json();

      if (!resposta.ok) {
        setErro(data.message || "Credenciais inválidas.");
        return;
      }

      // Guardar aluno sem senha no localStorage
      localStorage.setItem("aluno", JSON.stringify(data.aluno));

      router.push("/area-do-aluno");
    } catch (error) {
      console.error(error);
      setErro("Erro ao comunicar com o servidor.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 pt-32">
      <form
        onSubmit={autenticar}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Área do Aluno
        </h1>

        {erro && <p className="text-red-600 mb-4 text-center">{erro}</p>}

        <input
          type="text"
          placeholder="Número de Estudante"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border p-3 rounded mb-6"
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-950 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
