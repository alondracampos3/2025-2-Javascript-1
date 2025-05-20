// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate, birthDate) {
  const diff = actualDate - birthDate;
  const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return edadEnDias;
}

async function main() {
  const actualDate = new Date();

  const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
  const birthDateMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
  const birthDateYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");
  //const birthDate = await ask("¿Cuál es tu fecha de nacimiento? (formato YYYY-MM-DD)");
  const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`);

  console.log("Haz vivido aproximadamente: ");
  console.log(`${diffDays(actualDate, birthDate)} días`);

}

main();