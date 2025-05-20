const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function resumenEstadistico(numeros) {
  const promedio = obtenerPromedio(numeros);
  const mayor = obtenerMayor(numeros);
  const menor = obtenerMenor(numeros);

  return { menor, mayor, promedio }
  return { 'menor': menor, 'mayor': mayor, 'promedio': promedio }
}

function nombresConVocal(nombres) {
  const vocales = ["a", "e", "i", "o", "u"];
  const resultado = [];

  for (let i = 0; i < nombres.length; i++) {
    let primeraLetra = nombres[i][0].toLowerCase();
    if (vocales.includes(primeraLetra)) {
      resultado.push(nombres[i]);
    }
  }
  return resultado;
}

async function main() {
  const edades = [20, 18, 25, 30, 22];
  const lista = [5, 20, 8, 99, 3];
  const datos = [70, 80, 90, 100, 85];
  const nombres = ["Ana", "Esteban", "Luis", "Oscar", "María"];

  console.log(`Promedio = ${obtenerPromedio(edades)}`);
  console.log(`El número mayor de ${lista} = ${obtenerMayor(lista)}`);
  const estadistica = resumenEstadistico(datos);
  console.log(`El resumen estadístico de: ${datos}`);
  console.log(`El número menor es: ${estadistica.menor}`);
  console.log(`El número mayor es: ${estadistica.mayor}`);
  console.log(`El promedio es: ${estadistica.promedio}`);
  console.log("Lista de nombres: ", nombres);
  console.log("Nombres solo con vocal: ", nombresConVocal(nombres));

}

main();