//métodos para la búsqueda de letras o palabras dentro de un cadena de caracteres
'use strict'

var texto="este es un curso de javascript es muy buen curso";

var busqueda = texto.indexOf("curso");
// para este tipo de busquedas tambien se puede usar el metodo search. Por ejemplo:
var busqueda1 = texto.search("curso");
// otr método de busqueda es el match. Este devuelve la posicion de la palabra en un arrays
var busqueda2= texto.match("curso");
// pero si tenemos dos palabra repetidas en la cadena de string podemos buscar las dos con el método match de la siguiente
//manera
var busqueda3= texto.match(/curso/g);
//también existe el método substr que sirve para sacar una parte de la cadena de string indicando a partir de que posicion
// y cuantos caracteres
var busqueda4= texto.substr(11,5);
// Hay otro método que me permite sacar una letra en concreto de un string. Por ejemplo
var busqueda5=texto.charAt(11);
// Hay otro método que permite arrojar true o false si un texto comienza con una descripción indicada
var busqueda6=texto.startsWith("este es un curso");
// de igual modo un método para determinar sin un texto termina con una determinada frase. arroja tru o false
var busqueda7=texto.endsWith("es muy buen curso");

// ahora le pido que me muestre por console a partir de que posicion inicia esta palabra
console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);

// Ahora si tengo la misma palabra repetida varias veces y quiero saber la posicion de la ultima palabra que se repite
// utilizamos lo siguiente

// curso se repite dos veces

// queremos saber la posicion de la segunda palabra curso
var busqueda = texto.lastIndexOf("curso");

// ahora le pido que me muestre por consola a partir de que posicion inicia la ultima palabra curso
console.log(busqueda);