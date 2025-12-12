"use client";

export default function MatriculasAdmin() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Gestão de Matrículas
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>Pedro António — Enfermagem</span>
            <button className="bg-green-600 text-white px-4 py-1 rounded">
              Validar
            </button>
          </li>

          <li className="flex justify-between items-center">
            <span>Maria José — Saúde Pública</span>
            <span className="text-gray-500">Validada</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
