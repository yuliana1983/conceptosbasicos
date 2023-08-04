// if y else 

// ejemplo1: Las personas mayores igual a 18 pueden ingresar a un bar
let edad = 17;

if (edad >= 18) {

    console.log(`Puedes ingrear, tu edad es ${edad}`);
    
}else{
    console.log('No puedes ingresar, tu edad es: ' + edad);
}

// ejemplo2: Para las elecciones de presidente, los votantes deben ser mayores de edad.

console.warn ('para elecciones, aplicando el condicional if y else')

let edadVotante = 17;

if (edadVotante >= 18) {
    console.log ('Puedes votar');
    
}else{
    console.log ('No puedes votar');
}

// ejemplo 3: cuáles fueron las asignaturas del dia martes habilidades y frontend, mostrar un mensaje con los nombre de los profes

console.warn('condicional con operadores de comparación and (&&)');
const asig = 'habilidades';
const asig2 = 'frontend';
let dia = 'martes';



if (dia ==='martes' && asig2 === 'frontend' && asig === 'habilidades') {
    // mostrar los mensajes con los nombre de los profes
    console.log('Jorge ' + 'y' + ' Diana');
}else{
    console.log('No son los profes');
}

// condicional llamado switch
// ejemplo4: Determinar las actividades habituales de acuerdo a los dias de la semana.

console.warn('condicional switch');
const diaSemana = 6;

switch (diaSemana) {
    case 0:
        console.log("Dia Semana: " + 'Domingo');
        console.log("ciclovia ");
        console.log("voy a cine ");
        
        break;
    case 1:
        console.log("Dia Semana: " + 'Lunes');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("Doy clases al grupo 3 ");
        
        break;
    case 2:
        console.log("Dia Semana: " + 'Martes');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("Doy clases al grupo 3 ");
        
        break;
    case 3:
        console.log("Dia Semana: " + 'Miercoles');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("Doy clases al grupo 2 y 5 ");
        
        break;
    case 4:
        console.log("Dia Semana: " + 'Jueves');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("Doy clases al grupo 1 y 3 ");
        
        break;
    case 5:
        console.log("Dia Semana: " + 'Viernes');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("Doy clases al grupo 2 y 5 ");
        
        break;
    case 6:
        console.log("Dia Semana: " + 'Sabado');
        console.log("Estudiar  ");
        console.log("Trabajar ");
        console.log("tomarme unas politas en la noche ");
        
        break;

    default:
        console.log("Dia Semana: " + 'no encontrado');
        break;
}

// ejemplo5: Determinar los eventos de la feria de las flores

const diaEvento = 'Jueves';

switch (diaEvento) {
    case 'Viernes':
        console.log('Apertura de la feria' + 'Viernes 28/07/23')
        
        break;
    case 'Sabado':
        console.log('FERIA A RITMO DE BICICLETA' + 'Sabado 29/07/23')
        
        break;
    case 'Domingo':
        console.log('FERIA A RITMO DE BICICLETA' + 'Domingo 30/07/23')
        
        break;

    default:
        console.log('Evento no encontrado');
        break;
}