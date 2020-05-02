// aprenderemos que es un función anónima y un callback
"use strict"

// Función anónima
// es aquella función que no tiene nombre

var funcion_anonima= nombre =>{
    return "mi nombre es " + nombre;
}

console.log(funcion_anonima("Yoel"));

// funcion callback
// es una funcion dentro de otra funcion, es decir una funcion que pasa como un parametro de otra función

function suma (a,b,muestra, muestra_pordos){
    var operacion= (a+b);
    muestra(operacion);
    muestra_pordos(operacion);
}
function mostrar (dato){
    console.log(" se muestra " + dato);
};
function doble (dato){
console.log(" doble " + 2*dato);
};

suma(5,7,mostrar,doble);

/*

suma(5,7,function(operacion){console.log("se muestra " + operacion) }, 
function(operacion){console.log("se multiplica por dos "+2*operacion)});*/