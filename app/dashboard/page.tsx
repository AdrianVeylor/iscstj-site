"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem("admin");
    if (!admin) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 pt-32 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8">

        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Painel Administrativo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="font-bold text-blue-900 mb-2">Alunos</h2>
            <p className="text-gray-600">Gerir estudantes matriculados</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="font-bold text-blue-900 mb-2">Secretaria</h2>
            <p className="text-gray-600">Declarações e certificados</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h2 className="font-bold text-blue-900 mb-2">Propinas</h2>
            <p className="text-gray-600">Controlo financeiro</p>
          </div>

        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              document.cookie = "admin_auth=; Max-Age=0; path=/";
              router.push("/admin/login");
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Terminar Sessão
          </button>
        </div>

      </div>
    </div>
  );
}
