import "./globals.css";
import type { Metadata } from "next";
import MobileMenu from "../components/MobileMenu";

export const metadata: Metadata = {
  title: "ISCSTJ - Instituto Superior de Ciências da Saúde Tchiema João",
  description: "Excelência e Humanismo ao Serviço da Vida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className="bg-gray-50 text-gray-900">

        {/* =================== HEADER =================== */}
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="ISCSTJ" className="h-12 w-auto" />
              <div className="leading-tight hidden sm:block">
                <h1 className="text-xl font-bold text-blue-900">ISCSTJ</h1>
                <span className="text-xs text-gray-600">
                  Instituto Superior de Ciências da Saúde Tchiema João
                </span>
              </div>
            </a>

            {/* MENU DESKTOP */}
            <nav className="hidden md:flex gap-6 text-blue-900 font-medium">
              <a href="/" className="hover:text-yellow-500">Home</a>
              <a href="/quem-somos" className="hover:text-yellow-500">Quem Somos</a>
              <a href="/cursos" className="hover:text-yellow-500">Cursos</a>
              <a href="/candidaturas" className="hover:text-yellow-500">Candidaturas</a>
              <a href="/area-do-aluno" className="hover:text-yellow-500">Área do Aluno</a>
              <a href="/contacto" className="hover:text-yellow-500">Contacto</a>
            </nav>

            {/* MENU MOBILE */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* =================== CONTEÚDO =================== */}
        <main className="pt-28">{children}</main>

        {/* =================== BOTÃO WHATSAPP =================== */}
        <a
          href="https://wa.me/244925203654"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
        >
          <img src="/whatsapp.png" className="w-8 h-8" alt="WhatsApp" />
        </a>

      </body>
    </html>
  );
}
