"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    if (
      (email === "admin@iscstj.com" && senha === "admin123") ||
      (email === "secretaria@iscstj.com" && senha === "secretaria123")
    ) {
      // ✅ sessão persistente
      localStorage.setItem(
        "admin",
        JSON.stringify({
          email,
          role: email.includes("admin") ? "admin" : "secretaria",
        })
      );

      document.cookie = "admin_auth=true; path=/";

      // ✅ redirecionamento FORA do /login
      if (email.includes("admin")) {
        router.push("/admin/dashboard");
      } else {
        router.push("/admin/secretaria");
      }
    } else {
      setErro("Credenciais inválidas.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-28">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">
          Área Administrativa
        </h1>

        {erro && <p className="text-red-600 mb-4 text-center">{erro}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Palavra-passe"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-950"
        >
          Entrar
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Direção / Secretaria
        </p>
      </form>
    </div>
  );
}
