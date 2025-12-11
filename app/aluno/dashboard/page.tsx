"use client";

export default function DashboardAluno() {
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">

      {/* TÍTULO PRINCIPAL */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Painel do Estudante
      </h1>

      <p className="text-gray-600 mb-10">
        Bem-vindo ao seu ambiente académico. Aqui encontra as suas informações e ferramentas.
      </p>

      {/* ===================== CARDS RESUMO ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* CARD 1 */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-blue-900">
          <h3 className="text-lg font-bold text-blue-900">Propinas</h3>
          <p className="text-gray-600 mt-2">Estado: <span className="font-semibold text-green-600">Regularizado</span></p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-yellow-500">
          <h3 className="text-lg font-bold text-yellow-600">Documentos</h3>
          <p className="text-gray-600 mt-2">3 documentos disponíveis</p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white shadow-md p-6 rounded-xl border-l-4 border-green-600">
          <h3 className="text-lg font-bold text-green-700">Notas</h3>
          <p className="text-gray-600 mt-2">Notas do semestre disponíveis</p>
        </div>

      </div>

      {/* ===================== ÁREA DE MÓDULOS ===================== */}
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Disciplinas do Semestre</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

        {[
          ["Anatomia", "Prof. António Manuel", "60 horas"],
          ["Microbiologia", "Prof. Ana Vieira", "45 horas"],
          ["Saúde Pública I", "Prof. Joaquim Paulo", "40 horas"],
          ["Ética e Deontologia", "Prof. Maria João", "30 horas"]
        ].map(([disc, prof, carga], i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-900">{disc}</h3>
            <p className="text-gray-600">Docente: {prof}</p>
            <p className="text-gray-600 text-sm mt-1">Carga horária: {carga}</p>
          </div>
        ))}

      </div>

      {/* ===================== AVISOS ===================== */}
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Avisos Importantes</h2>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">

        <div className="border-l-4 border-blue-900 pl-4">
          <h4 className="font-bold text-blue-900">📢 Renovação de Matrícula</h4>
          <p className="text-gray-600 text-sm">
            As matrículas para o próximo semestre iniciam no dia 5. Fique atento às datas.
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h4 className="font-bold text-yellow-600">📘 Material de Estudo</h4>
          <p className="text-gray-600 text-sm">
            Novos materiais foram adicionados à biblioteca digital. Acesse e confira.
          </p>
        </div>

      </div>

    </div>
  );
}
