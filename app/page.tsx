export default function Home() {
  return (
    <>

      {/* ======================== HERO ======================== */}
      <section className="bg-[#003B8E] text-white px-6 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Formação de Excelência em Ciências da Saúde
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          O ISCSTJ forma profissionais éticos, competentes e comprometidos com Angola.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="/candidaturas"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Candidatar-se Agora
          </a>

          <a
            href="/cursos"
            className="bg-white hover:bg-gray-200 text-blue-900 font-semibold px-8 py-3 rounded-lg transition"
          >
            Ver Cursos
          </a>
        </div>
      </section>

      {/* ======================== QUEM SOMOS ======================== */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          Quem Somos
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>

        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          O <span className="font-semibold">Instituto Superior de Ciências da Saúde Tchiema João (ISCSTJ)</span>
          é uma instituição dedicada à formação de profissionais altamente qualificados nas Ciências da Saúde.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mt-6">
          Localizado na província do Zaire, o ISCSTJ prepara futuros profissionais para os desafios
          do Sistema Nacional de Saúde e da sociedade angolana.
        </p>
      </section>

      {/* ======================== CURSOS ======================== */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          Nossos Cursos
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            ["Enfermagem Geral", "Cuidados essenciais em saúde e bem-estar."],
            ["Análises Clínicas", "Formação para atuar em laboratórios de diagnóstico e biotecnologia."],
            ["Radiologia / Imagiologia", "Tecnologia radiológica e diagnóstico por imagem."],
            ["Gestão Hospitalar", "Administração de hospitais, clínicas e serviços de saúde."],
            ["Saúde Pública", "Gestão de políticas e programas de saúde comunitária."],
            ["Epidemiologia", "Estudo e controle de doenças e vigilância epidemiológica."]
          ].map(([titulo, desc], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">{titulo}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <a
            href="/cursos"
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold px-10 py-3 rounded-lg transition"
          >
            Ver Todos os Cursos
          </a>
        </div>
      </section>

      {/* ======================== INFRAESTRUTURAS ======================== */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          Infraestruturas & Laboratórios
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            ["Laboratórios Modernos", "Equipamentos avançados para práticas técnicas."],
            ["Biblioteca", "Acervo académico completo para estudo e pesquisa."],
            ["Campus Seguro", "Ambiente organizado, seguro e adequado ao ensino."]
          ].map(([titulo, desc], i) => (
            <div key={i} className="bg-white p-6 shadow rounded-xl text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-2">{titulo}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== DEPOIMENTOS ======================== */}
      <section className="px-6 py-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-6">
          O que dizem os nossos estudantes
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            ["Maria João", "Enfermagem Geral", "Uma formação completa que mudou a minha vida."],
            ["Pedro António", "Radiologia", "Professores excelentes e ótimos laboratórios."]
          ].map(([nome, curso, texto], i) => (
            <div key={i} className="bg-white shadow p-6 rounded-xl">
              <p className="text-gray-700 italic mb-4">“{texto}”</p>
              <h4 className="font-bold text-blue-900">{nome}</h4>
              <span className="text-sm text-gray-600">{curso}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== MAPA ======================== */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Localização
        </h2>

        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-10"></div>

        <iframe
          className="w-full h-96 rounded-xl shadow"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5743274167404!2d12.3689545!3d-6.146046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a44380f652c5abf%3A0x7e76e8864c8ad5c9!2sSoyo%2C%20Zaire%2C%20Angola!5e0!3m2!1spt-PT!2sao!4v9999999999999"
          loading="lazy"
        ></iframe>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer className="bg-blue-900 text-white py-10 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-bold mb-3">ISCSTJ</h3>
            <p className="text-blue-100">
              Formação superior de excelência ao serviço da saúde em Angola.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/cursos" className="hover:underline">Cursos</a></li>
              <li><a href="/candidaturas" className="hover:underline">Candidaturas</a></li>
              <li><a href="/contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Contacto</h4>
            <p>Email: info@iscstj.com</p>
            <p>Telefone: +244 999 000 000</p>
            <p>Soyo — Província do Zaire</p>
          </div>

        </div>

        <div className="text-center text-blue-200 mt-10 text-sm">
          © {new Date().getFullYear()} ISCSTJ — Todos os direitos reservados.<br />
          <span className="text-yellow-400 font-semibold">Desenvolvido por Mitigra, Lda</span>
        </div>
      </footer>

    </>
  );
}
