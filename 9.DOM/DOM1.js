// seleccionar y modificar elementos de HTML

'use strict'

var Todos_Div = document.getElementsByTagName("div");
console.log(Todos_Div);

// si quiero modificar a uno de estos elementos hago lo siguiente

var un_div = Todos_Div[2];
console.log(un_div);
//var seccion=document.getElementById("#seccion");

// recorrer todos los div de HTML
var div;
for (div in Todos_Div) {
    if (typeof Todos_Div[div].textContent == 'string') {
        // creo un variable para tomar el contenido de cada div
        var texto = document.createTextNode(Todos_Div[div].textContent);

        // creo una variable para arrojar ese contenido en un parrafo. Por tanto creo un nuevo elemento (etiqueta) parrafo
        var parrafo = document.createElement("p");

        parrafo.append(texto);
        var a = document.getElementById("seccion").append(parrafo);
        console.log(a);
    }

}