"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardAdmin() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (!auth) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="pt-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Painel Administrativo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => router.push("/admin/login/secretaria")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg"
        >
          <h2 className="text-xl font-bold text-blue-900">
            Secretaria Digital
          </h2>
          <p className="text-gray-600">Gestão académica e administrativa.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-blue-900">Alunos</h2>
          <p className="text-gray-600">Lista e gestão de estudantes.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-blue-900">Candidaturas</h2>
          <p className="text-gray-600">Novas inscrições.</p>
        </div>
      </div>
    </div>
  );
}
