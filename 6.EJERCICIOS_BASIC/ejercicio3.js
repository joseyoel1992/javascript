//tabla de multiplicar de un número introducido
"use strict"

var entrada=parseInt(prompt("introduce un número entero,por favor"));

var i=1;
document.write( "<h1>" +"tabla del número " + entrada + "</h1>");

for (i=1;i<=10;i++){

    document.write( entrada +"x" + i + "= " +  entrada*i + "<br/>");
}

// si quiero todas las tablas de multiplicar, hago lo siguiente


for (var i=1;i<=10;i++){
    document.write( "<h1>" +"tabla del número " + i + "</h1>");
    for (var j=1;j<=10;j++){
        document.write( i +"x" + j + "= " +  j*i + "<br/>");
    }

    
}