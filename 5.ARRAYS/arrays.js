'use strict'
// una forma de definir un array
var matriz = ["yoel", "carlos", "pedro", 5, true];

// Otra forma de representar arras y es en forma de objeto

var matriz1=new Array ("yoel","carlos","pedro");

console.log(matriz);
console.log(matriz1);

// si queremos conocer un elemento del Array. Hacemos lo siguiente



/*do{
    var elemento = parseInt(prompt("Introduce el número del elemento, por favor: "));
    alert( "Introduce un número acorde con la cantidad de elementos de la matriz");
}while (elemento >= matriz.length)*/

document.write("<h1>Lenguajes de programacón del 2020</h1>")
document.write("<ul>");
for (var i=0; i< matriz1.length; i++){

    document.write("<li>" + matriz1[i] + "</li>");

}
document.write("</ul>");


// si queremos otra forma de imprimir los elementos de un array

matriz.forEach(elemento => {document.write("<li>" +elemento + "</li>")});

// si quiero conocer cada elemento y su indice correspondiente:
matriz.forEach((elemento,index) => {document.write("<li>[" + index + "]" + elemento + "</li>")});

// si quiero conocer cada elemento, su indice correspondiente y los la matriz con todos sus elementos:
matriz.forEach((elemento,index,matriz_total) => {document.write("<li>[" + index + "]" + elemento + "</li>");
                                                 document.write("["+matriz_total+"]");
});