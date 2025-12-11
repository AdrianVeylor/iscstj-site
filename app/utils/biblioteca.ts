// app/utils/biblioteca.ts

export type Livro = {
  id: string;
  titulo: string;
  autor: string;
  categoria: string;
  capa: string;
  link: string; // PDF ou visualização
};

// Base de livros (fake por agora)
export const LIVROS: Livro[] = [
  {
    id: "1",
    titulo: "Anatomia Humana – Volume I",
    autor: "Prof. António Manuel",
    categoria: "Anatomia",
    capa: "/biblioteca/anatomia1.jpg",
    link: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "2",
    titulo: "Microbiologia Básica",
    autor: "Ana Vieira",
    categoria: "Microbiologia",
    capa: "/biblioteca/microbio.jpg",
    link: "https://www.africau.edu/images/default/sample.pdf",
  },
  {
    id: "3",
    titulo: "Saúde Pública – Introdução",
    autor: "Joaquim Paulo",
    categoria: "Saúde Pública",
    capa: "/biblioteca/saude_publica.jpg",
    link: "https://www.africau.edu/images/default/sample.pdf",
  },
];
