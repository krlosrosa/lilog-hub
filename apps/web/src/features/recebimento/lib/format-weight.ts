export const formatWeightKg = (kg: number): string => {
  const formatted = kg.toLocaleString('pt-BR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `${formatted} kg`;
};
