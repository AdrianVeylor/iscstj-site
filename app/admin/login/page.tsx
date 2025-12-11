"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function autenticar(e: React.FormEvent) {
    e.preventDefault();

    // 🔐 Credenciais fictícias de ADMIN
    if (email === "admin@iscstj.ao" && senha === "admin123") {
      // Guarda info simples do admin (apenas no browser)
      localStorage.setItem(
        "admin",
        JSON.stringify({
          nome: "Administrador",
          funcao: "Secretaria Geral",
        })
      );

      document.cookie = "admin_token=valido; path=/;";

      router.push("/admin/dashboard");
    } else {
      setErro("Credenciais inválidas.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 pt-32">
      <form
        onSubmit={autenticar}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Área Administrativa
        </h1>

        {erro && (
          <p className="text-red-600 mb-4 text-center text-sm">{erro}</p>
        )}

        <input
          type="email"
          placeholder="Email institucional"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4 text-sm"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full border p-3 rounded mb-6 text-sm"
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-950 transition text-sm font-semibold"
        >
          Entrar como Admin
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Acesso exclusivo da Secretaria / Direção.
        </p>
      </form>
    </div>
  );
}
