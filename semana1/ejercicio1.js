// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main() {
  const name = await ask("¿Cómo te llamas? ");
  const age = Number(await ask("¿Cuántos años tienes? "));
  const comida = await ask("¿Cual es tu comida favorita? ");
  // TODO : Agregar pregunta para comida favorita

  console.log("Hola " + name + ", tienes " + age + " años.");
  console.log(`Tu comida favorita son ${comida}.`);
  //console.log(`Tu comida favorita es ${comida}.`);
}


main();