// app/utils/propinas.ts

export type Mensalidade = {
  mes: string;
  valor: number;
  pago: boolean;
  dataPagamento?: string;
};

// Simulação de dados vindos do servidor
export function obterPropinas(numeroAluno: string): Mensalidade[] {
  return [
    {
      mes: "Janeiro 2025",
      valor: 25000,
      pago: true,
      dataPagamento: "05/01/2025",
    },
    {
      mes: "Fevereiro 2025",
      valor: 25000,
      pago: true,
      dataPagamento: "05/02/2025",
    },
    {
      mes: "Março 2025",
      valor: 25000,
      pago: false,
    },
    {
      mes: "Abril 2025",
      valor: 25000,
      pago: false,
    },
  ];
}
