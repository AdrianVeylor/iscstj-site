export default function Cursos() {
  const listaCursos = [
    {
      titulo: "Enfermagem Geral",
      descricao: "Formação técnica e humanista voltada para cuidados essenciais em saúde e bem-estar.",
      imagem: "/cursos/enfermagem.jpg",
    },
    {
      titulo: "Análises Clínicas",
      descricao: "Capacitação para atuação em laboratórios de diagnóstico, análises e biotecnologia.",
      imagem: "/cursos/analises.jpg",
    },
    {
      titulo: "Radiologia / Imagiologia",
      descricao: "Formação em exames por imagem e tecnologias radiológicas modernas.",
      imagem: "/cursos/radiologia.jpg",
    },
    {
      titulo: "Gestão Hospitalar",
      descricao: "Administração, organização e gestão de unidades e serviços de saúde.",
      imagem: "/cursos/gestao.jpg",
    },
    {
      titulo: "Saúde Pública",
      descricao: "Gestão de políticas públicas, epidemiologia e programas de saúde comunitária.",
      imagem: "/cursos/saude-publica.jpg",
    },
    {
      titulo: "Epidemiologia",
      descricao: "Estudo e controlo de doenças, estatísticas de saúde e vigilância epidemiológica.",
      imagem: "/cursos/epidemiologia.jpg",
    },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">

      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-6">
        Nossos Cursos
      </h1>

      {/* Linha decorativa */}
      <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

      {/* Lista de cursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {listaCursos.map((curso, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200"
          >
            {/* Imagem */}
            <img
              src={curso.imagem}
              alt={curso.titulo}
              className="w-full h-48 object-cover"
            />

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {curso.titulo}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {curso.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botão para regressar */}
      <div className="text-center mt-12">
        <a
          href="/"
          className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-10 py-3 rounded-lg transition"
        >
          Voltar à Página Inicial
        </a>
      </div>
    </section>
  );
}
