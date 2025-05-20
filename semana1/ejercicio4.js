// Ejercicio: Crear una función que reciba dos números y devuelva el mayor de ellos
//
// Instrucciones:
// 1. Crear una función llamada `obtenerMayor` que reciba dos números como parámetros.
// 2. La función debe devolver el mayor de los dos números.
// 3. Pedir al usuario que ingrese dos números y mostrar el resultado de la función `obtenerMayor`.

const { ask } = require('../helpers/input');

// TODO: Función que devuelve el mayor de dos números
function obtenerMayor(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

async function main() {
  const num1 = Number(await ask("Introduce el primer número a evaluar: "));
  const num2 = Number(await ask("Introduce el segundo número a evaluar: "));

  if (num1 === num2) {
    console.log("Los dos numeros que ingresaste son iguales");
  } else {
    const resultado = obtenerMayor(num1, num2);
    console.log("El numero mayor es: ", resultado);
  }

}

main();