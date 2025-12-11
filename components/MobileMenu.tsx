"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-blue-900 text-3xl"
      >
        <HiMenu />
      </button>

      {/* Overlay escuro */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* Menu lateral */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-6
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300
        `}
      >

        {/* Botão fechar */}
        <button
          onClick={() => setOpen(false)}
          className="text-blue-900 text-3xl mb-6"
        >
          <HiX />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-4 text-blue-900 font-medium">
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/quem-somos" onClick={() => setOpen(false)}>Quem Somos</a>
          <a href="/cursos" onClick={() => setOpen(false)}>Cursos</a>
          <a href="/candidaturas" onClick={() => setOpen(false)}>Candidaturas</a>
          <a href="/area-do-aluno" onClick={() => setOpen(false)}>Área do Aluno</a>
          <a href="/contacto" onClick={() => setOpen(false)}>Contacto</a>
        </nav>
      </div>
    </>
  );
}
