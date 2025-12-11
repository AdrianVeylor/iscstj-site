export default function Candidaturas() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
        Formulário de Candidatura
      </h1>

      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

      <form className="bg-white shadow-lg rounded-xl p-8 space-y-6 border border-gray-200">

        {/* Nome */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Nome Completo</label>
          <input
            type="text"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Telefone</label>
          <input
            type="text"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Escolha do curso */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Curso Pretendido</label>
          <select
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          >
            <option value="">Selecione um curso</option>
            <option>Enfermagem Geral</option>
            <option>Análises Clínicas</option>
            <option>Radiologia / Imagiologia</option>
            <option>Gestão Hospitalar</option>
            <option>Saúde Pública</option>
            <option>Epidemiologia</option>
          </select>
        </div>

        {/* Mensagem */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Mensagem (opcional)</label>
          <textarea
            rows={4}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          ></textarea>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-950 text-white py-3 rounded-lg font-semibold"
        >
          Enviar Candidatura
        </button>

      </form>
    </section>
  );
}
