"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      // REDIRECIONAMENTO POR ROLE
      if (email.includes("admin")) {
        router.push("/admin/login/dashboard");
      } else {
        router.push("/admin/login/secretaria");
      }
    } else {
      setErro("Credenciais inválidas.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-blue-900 text-center mb-6">
          Área Administrativa
        </h1>

        {erro && (
          <p className="text-red-600 text-sm text-center mb-4">
            {erro}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Entrar como Admin
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Acesso exclusivo da Secretaria / Direção
        </p>
      </form>
    </div>
  );
}
