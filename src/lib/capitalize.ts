// 'capitalize': Función para capitalizar la primera letra de un texto (colocar en mayúscula)
export const capitalize = (text: string): string => {
  if (!text) return "";
  const result = text.charAt(0).toUpperCase() + text.slice(1);
  return result;
};
