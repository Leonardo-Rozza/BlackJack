/**
 * Esta funcion me permite saber cual es el valor de mi carta.
 * @param {String} carta
 * @returns {Number} retorna un valor dependiendo si la carta es un As u otra Especial
 */
export const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
