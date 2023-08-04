// funciones
/**
 * funciones tradicional function
 */

function primerNombre(){
    console.log('Jorge');
}

// llamar funcion
primerNombre();

// otra forma de crear funciones, función anonima
const segundoNombre = function(){
    console.log('Enrique');
}

// llamar funcion
segundoNombre();

// crear una funcion con argumentos
/**
 * 
 * @param {Number} edad tipo entero
 */
function miEdad(edad){
    console.log('Mi edad: ' + edad);
    console.log(`Mi edad: ${edad}`);

}

miEdad(35);

// función de flecha sin argumentos

const estadoCivil = () => {
    console.log(`Mi estado civil: ${'soltero'}`);
   
};

estadoCivil();

// ejemplo: crear la suma de dos numeros utilizando funcion de flecha

const suma = (operador1,operador2,operador3) => {
    return operador1 + operador2 + operador3;

};

// llamar la funcion suma

console.log('la suma es: ' + suma(5,2,5));

// funcion para unificar los nombre

const unirNombre = (nombre1,nombre2) => {
    return nombre1 + nombre2;

}

console.log('Mi nombre es: ' + unirNombre('Jorge',' Enrique'));
console.log('Mi nombre es: ' + unirNombre('Jorge1',' E'));
console.log('Mi nombre es: ' + unirNombre('Je',' Eique'));
console.log('Mi nombre es: ' + unirNombre('orge',' Enrique'));
console.log('Mi nombre es: ' + unirNombre('Je',' En'));


