/**
 * Ex.: 480,00 KG (formato alinhado ao mock do cadastro).
 */
export const formatPesoKgCompleto = (kg: number): string => {
  const formatted = kg.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${formatted} KG`;
};
