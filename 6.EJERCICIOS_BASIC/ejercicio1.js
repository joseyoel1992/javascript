//programa que pida dos numeros y nos diga el mayor, el menor o si son iguales
// si los valores introducidos no son números o son menores a cero, se tien que pedir otra vez los datos

"use strict"

var num1= parseInt(prompt("introduce el primer número, por favor:"));
var num2=parseInt(prompt("Introduce otro número, por favor"));
if (isNaN(num1) ||isNaN(num2)){
    alert("introduce solo números por favor");
}
if(isNaN(num1)==false && isNaN(num2)==false){
    if (num1>num2){
    console.log("el número mayor es " + num1);
    alert("el número mayor es " + num1);
}

    else if ( num1<num2){
    console.log("el número mayor es " + num2);
    alert("el número mayor es " + num2);

}
    else {
    console.log("Los números son iguales");
    alert("los números son iguales");
}
}