"use strict"

/* Utilizando un bucle Mostrar la media y la suma de los números introducidos hasta introducir un número negrativo y en ese momento mostrar el 
resultado */
var entrada, suma = 0;
var i = 0;



//while (isNaN(entrada)){
//  entrada=parseInt(prompt("introduce un número entero, por favor"));
//}
// El "parseInt" convierta el valor recibo en dato tipo entero. 
do {
    entrada = parseInt(prompt("introduce un número entero, por favor"));
    while (isNaN(entrada)) {
        entrada = parseInt(prompt("introduc solo números, por favor"));
    }

    if (entrada >= 0) {
        suma += entrada;
        i++;
    } else if (entrada < 0) {

        break;

    }
    // El break me permite salir del bucle con la finalidad que no caigamos en un bucle infinito

    // si quiero ver cada iteracion del código por número introducido en la consola coloco los siguiente

    console.log(entrada);
    console.log(suma);
    console.log(i);
} while (entrada >= 0);

alert("la suma de los números es " + suma + " y la media es " + (suma / i));