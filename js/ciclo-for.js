// ciclo for o el para 

// ejemplo 1: Determine la tabla de multiplicar con base en 5 hasta 10
/**
 * 5 X 1 = 5
 */
let num = 1;
const base = 5;
let resultado = '';

for (num = 1; num <= 10; num++) {
    // para mostrar el resulta con el incremento
    resultado +=`${base} X ${num} = ${num * base}\n`;
}

console.log(resultado);
