const { ask } = require('../helpers/input');

async function main() {
  const nombres = ["Ana", "Roberto", "Luis", "Mariana", "Sol"];

  for (let index = 0; index < nombres.length; index++) {
    if (nombres[index].length >= 5) {
      console.log(`${nombres[index]} tiene mas de 5 caracteres`);
    } else {
      console.log(`${nombres[index]} tiene solo ${nombres[index].length} caractes `);
    }
  }

  const nombres2 = ["Oscar", "Ana", "Luis", "Eduardo", "Isabel", "María", "Úrsula", "Pedro"];
  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  for (let index1 = 0; index1 < nombres2.length; index1++) {
    const primerLetra = nombres2[index1][0].toLowerCase();
    for (let index2 = 0; index2 < vocales.length; index2++) {
      if (primerLetra === vocales[index2]) {
        console.log(`${nombres2[index1]} empieza con ${vocales[index2].toUpperCase()}`);
      }
    }
  }

  const palabraAlReves = await ask("Escribe una palabra\n");
  let resultado = "";
  for (let i = palabraAlReves.length - 1; i >= 0; i--) {
    resultado = resultado + palabraAlReves[i];
  }
  console.log("Al revés", resultado);
}
main();