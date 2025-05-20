// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    const num1 = Number(await ask('Ingresa el primer número: '));
    const num2 = Number(await ask('Ingresa el segundo número menor a 100: '));
    
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
        }
    }

    

}

main();
