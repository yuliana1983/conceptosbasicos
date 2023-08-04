// sintaxis de un objeto literal

let auto = {
    nombre: 'Sandero',
    marca:'Renoult',
    placa:'ARY-510',
    color:'Negro',
    precio: 52000000,
    Estado:true,
    ciudad:'Medellín',
};

// muestra en la consola todo las propiedades del objeto
console.table(auto);

// mostrar el nombre de lo auto
console.warn('Mostrar el nombre del auto');
console.log('Nombre: ', auto.nombre);
console.log('Precio y el color: ', auto['precio'],auto['color']);

// crear una nueva propiedad para el objeto
auto.tipoAuto = 'Familiar';
auto.tipoAuto1 = 'Familiar-GamaBaja';
auto.tipoAuto2 = 'Familiar-GamaAlta';
console.log(auto);

// eliminar una propiedad del objeto
delete auto.tipoAuto;
console.log(auto);

// crear un objeto literal para determimar las propiedades de una película

let pelicula={
    nombre: 'Indiana Jones 5',
    actor1: 'Antonio Banderas',
    actor2: 'Phoebe M',
    actor3: 'Boyd H',
    actor4: 'Thomas K',
    Estreno: '29 de junio de 2023',
    Director: 'James Mangold',
    Presupuesto: 300000000,
    // arreglo llamado actores
    actores:['Antonio Banderas','Phoebe M','Boyd H','Thomas K'],
};

console.warn('Pelicula');
console.table(pelicula);

// cuántos actores hay en el objeto de pelicula
console.log('Los actores son: ', pelicula.actores.length);

// anexar una propiedad para el objeto pelicula, en que salas
pelicula.Salas = ['Viva','Mayorca','Florida','Los Puentes'];
console.log(pelicula);