let arreglos = ['inicio', 'juegos', 2, true, undefined, null, 'fin'];

console.log({ arreglos });
console.log(arreglos);

// Mi primer elemento del array
console.log(arreglos[0]);
let primero = arreglos[0];
// conocer cuantos elementos tiene el array
console.log(arreglos.length);
// conocer el último elemento 
console.log(arreglos[arreglos.length - 1]);
let ultimo = arreglos[arreglos.length - 1];
// Imprimir el primer  y último elemento
console.log({ primero }, { ultimo });
console.log({ primero, ultimo });

arreglos.forEach((elemento, indice, array) => {
    console.log({ elemento, indice, array });
});

// Añadir un nuevo elemento  en la última posición del array
let nuevoElemento = arreglos.push('elementoAdd');
console.log({ nuevoElemento });
console.log(arreglos);
// Añadir un elemento al inicio del array
let newStartElement = arreglos.unshift('AhoraSoyelPrimero');
console.log(newStartElement);
console.log({ arreglos });
// Elimiar el último elemento del array
let eliminarUltimo = arreglos.pop();
console.log('se ha eliminado:', eliminarUltimo);
console.log(arreglos);
arreglos.indexOf
    // eliminar un elemento especifico del array
let deleteElementSpecific = arreglos.splice(2, 1);
console.log({ deleteElementSpecific, arreglos });
//saber la posición del indice de un elemento del array
let indexEncontrado = arreglos.indexOf(true);
console.log({ indexEncontrado, arreglos });