"use client";

export default function DocumentosAdmin() {
  return (
    <div className="pt-32 px-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Emissão de Documentos
      </h1>

      <table className="w-full bg-white shadow rounded-xl overflow-hidden">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-3 text-left">Aluno</th>
            <th className="p-3">Documento</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Ação</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-b">
            <td className="p-3">João Miguel</td>
            <td className="p-3">Declaração de Frequência</td>
            <td className="p-3 text-green-600">Aprovado</td>
            <td className="p-3">
              <button className="bg-blue-900 text-white px-3 py-1 rounded">
                Emitir PDF
              </button>
            </td>
          </tr>

          <tr>
            <td className="p-3">Ana Paulo</td>
            <td className="p-3">Certificado</td>
            <td className="p-3 text-yellow-600">Pendente</td>
            <td className="p-3">
              <button className="bg-gray-400 text-white px-3 py-1 rounded">
                Aguardar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
