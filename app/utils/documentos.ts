// app/utils/documentos.ts

export type Documento = {
  id: string;
  titulo: string;
  tipo: string;
  data: string;
  link: string; // URL do PDF ou ficheiro
};

// Documentos simulados (aparecem como se viessem do servidor)
export function obterDocumentosAluno(numeroAluno: string): Documento[] {
  return [
    {
      id: "doc1",
      titulo: "Declaração de Matrícula",
      tipo: "PDF",
      data: "12/01/2025",
      link: "/docs/declaracao_matricula.pdf"
    },
    {
      id: "doc2",
      titulo: "Comprovativo de Pagamento - Janeiro",
      tipo: "PDF",
      data: "05/01/2025",
      link: "/docs/comprovativo_jan.pdf"
    },
    {
      id: "doc3",
      titulo: "Plano Curricular do Curso",
      tipo: "PDF",
      data: "10/12/2024",
      link: "/docs/plano_curricular.pdf"
    }
  ];
}
