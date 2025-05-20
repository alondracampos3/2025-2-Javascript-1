const { ask } = require('../helpers/input');

async function main() {
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  console.log("Recorriendo matriz completa:");

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      console.log(`Elemento en posición [${i}][${j}] es: ${matriz[i][j]}`);
    }
  }
}

main();