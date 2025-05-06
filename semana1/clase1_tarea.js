// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.
const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  console.log('\n¿Qué operación deseas realizar?');
  console.log('1. Suma');
  console.log('2. Resta');
  console.log('3. Multiplicación');
  console.log('4. División');

  const opcion = await ask('Selecciona una opción (1-4): '); // Aquí defines correctamente la variable

  let resultado;

  switch (opcion) {
    case '1':
      resultado = num1 + num2;
      console.log(`Resultado de la suma: ${resultado}`);
      break;
    case '2':
      resultado = num1 - num2;
      console.log(`Resultado de la resta: ${resultado}`);
      break;
    case '3':
      resultado = num1 * num2;
      console.log(`Resultado de la multiplicación: ${resultado}`);
      break;
    case '4':
      if (num2 !== 0) {
        resultado = num1 / num2;
        console.log(`Resultado de la división: ${resultado}`);
      } else {
        console.log('Error: No se puede dividir entre cero.');
      }
      break;
    default:
      console.log('Opción inválida. Por favor, elige entre 1 y 4.');
  }
}

main();


   
