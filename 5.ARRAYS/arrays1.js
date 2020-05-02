/*  1. Un programa que pida seis números por pantalla y los meta en un array
    2. Mostrar todos los elementos del array en el cuerpo de la pagina y en la consola
    3. Sacar el array de forma ordenada y mostrarlo
    4. Invertir su orden y mostrarlo
    5. Cuantos elementos tiene el array
    6. Buscar un valor introducido por el usuario y nos diga si esta en el array y cual es su posición.
 */ 

 'use strict'

 var matriz = new Array();
 var i=0;


 do {
     matriz[i]=parseInt(prompt("Introduce seis números, por favor:"));
    while (isNaN(matriz[i])){
     //while (matriz[i].value==null){ // este método es para detectar que el input no esté vacío, pero con la linea de codigo anterior no hace falta

        matriz[i]=parseInt(prompt("Introduce solo números, por favor:"));
     }
     i++;

 }while(i<6);

 // Mostrar todos los elementos del array (1. Consola 2. Pagina de HTML):
 //1. Consola
 console.log(matriz);
 //2. Pagina de HTML
 document.write("<h1>Array con todos los elementos introducidos</h1>");

 document.write("<h3>[" +  matriz +"]</h3>");


 // Ordenar el array y mostrarlo
 document.write("<h1>Array ordenado</h1>");

 document.write("<h3> [" + matriz.sort((a,b)=> {return (a-b)})+"]</h3>");
 //Invertir su orden y mostrarlo
 
 document.write("<h1>Array invertido</h1>");

 document.write("<h3>" + matriz.reverse(function(a,b) {return (a-b)})+"</h3>");

 // cuantos elementos tiene el array
 document.write("<h3>cantidad de elementos del array</h3>");

document.write("el array tiene "+ matriz.length + " elementos </br>");

//    6. Buscar un valor introducido por el usuario y nos diga si esta en el array y cual es su posición.
var buscar= parseInt(prompt("Introduce el valor a buscar:" ));

var buscar1=matriz.find(indice=>{return buscar==indice});

if (buscar1){

document.write("si esta el elemento en el array </br>");
}
else{

    document.write("no esta el elemento en el array");

}