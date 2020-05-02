'use strict'
var nombre= prompt("Introduce tu nombre, por favor:");
var apellidos=prompt("Introduce tus apellidos, por favor:");

// creamos otra variable con sintaxis de HTML para poder
// imprimir en el cuerpo de la pagina la información recibida

// a esto se le llama plantilla de texto

var texto = `
    <h1>Hola que tal</h1>
    <h3>mi nombre es: ${nombre} </h3>
    <h3>mis apellidos son: ${apellidos} </h3>`;


document.write(texto);
