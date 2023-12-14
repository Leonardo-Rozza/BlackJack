import _ from "underscore";

/**
 *Esta funcion crea un deck
 * @param {array<string>} tiposDeCartas
 * @param {array<string>} tipoEspeciales
 * @returns {array<string>} retorna un nuevo deck de cartas.
 */
export const crearDeck = (tiposDeCartas, tipoEspeciales) => {
  if (!tiposDeCartas || tiposDeCartas === 0)
    throw new Error("TiposDeCartas es obligatorio como un arreglo de String");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of tipoEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  return deck;
};
