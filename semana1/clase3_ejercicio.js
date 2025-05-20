// Día de la semana según número
// Función que devuelve el día de la semana según un número del 1 al 7
// Ejercicio: Crear un programa que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.).

const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número del 1 al 7:"));
  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  if (dia >= 1 && dia <= 7) {
    console.log(diasSemana[dia - 1]);
  } else {
    console.log("No es un número válido");
  }

  switch (dia) {
    case 1:
      console.log(diasSemana[0]);
      break;
    case 2:
      console.log(diasSemana[1]);
      break;
    case 3:
      console.log(diasSemana[2]);
      break;
    case 4:
      console.log(diasSemana[3]);
      break;
    case 5:
      console.log(diasSemana[4]);
      break;
    case 6:
      console.log(diasSemana[5]);
      break;
    case 7:
      console.log(diasSemana[6]);
      break;
    default:
      console.log("No es un número válido");
      break;
  }

}

main();