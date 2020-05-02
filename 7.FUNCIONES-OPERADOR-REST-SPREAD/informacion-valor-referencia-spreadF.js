// En JS los datos primitivos pasan información por valor mientras que los objetos pasan inforamción por referencia
// INFORMACIÓN POR VALOR: no afecta porque el cambio de valor de los datos primitivos no afecta el mismo lugar en memoria
// INFORMACIÓN POR REFERENCIA: Si afecta la información de los objetos porque la información se pasa
// por referencia y ocupa el mismo lugar en memoria

// PASO DE INFORMACIÓN POR VALOR
let a = 10,
    b = a;

console.log({ a, b });

// si cambio el valor de la variable a=30;
a = 30;
console.log({ a, b }); // A pesar que he modificado el valor de "a" no me ha afectado en el código de arriba. Esto se llama pasar
// información por valor

//PASO DE INFORMACIÓN POR REFERENCIA
// let juan = { nombre: 'juan' },
//     ana = juan;
// console.log({ ana, juan }); // Para este caso tanto juan como ana son considerados un objeto con propiedad nombre igual a juan

// Si procedoa a cambiar el  nombre de ana, en teoría no debería afectar las propiedades del objeto de la variable juan,pero 
// si las afecta porque el paso de información es por referencia

// ana.nombre = 'ana';
// console.log({ ana, juan }); Por tanto este caso nos afecta a las lineas de código anterior porque está relacionado con 
// con la propiedad del objeto que se ha modificado
// ¿Como eliminar esa relación de referencia? Con el operador spread que se muestra a continuación
// {...juan}

let juan = { nombre: 'juan' },
    ana = {...juan }; // esto se llama operador spread y permite realizar una copia de ese objeto sin perjudicarlo
ana.nombre = 'ana';
console.log({ ana, juan }); // Para este caso tanto juan como ana son considerados un objeto con propiedad nombre igual a juan