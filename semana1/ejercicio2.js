// Clase 2: Operadores y Condicionales
const { ask } = require('../helpers/input');

async function main() {

  const age = Number(await ask("¿Cuántos años tienes? "));
  const genere = await ask("¿Cuál es tu género? (masculino/femenino) ");

  if (age <= 12 && genere === "masculino") {
    console.log("Eres un niño");
  } else if ((age > 12 && age <= 18) && genere !== "femenino") {
    console.log("Eres un adolescente masculino");
  } else if ((age > 18 && age <= 60) && genere === "masculino") {
    console.log("Eres un adulto masculino");
  } else {
    console.log("No se encontraron coincidencias");
  }
}

main();
