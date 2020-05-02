'use strict'

// seleccionar los div con clase rojo

var clase_rojo=document.getElementsByClassName("rojo");
var i;
for(var i in clase_rojo){
    if(typeof clase_rojo[i].innerHTML=="string"){
    console.log(clase_rojo[i].innerHTML);
    // si quiero cambiar su estilo del fondo del color. Hago lo siguiente
    clase_rojo[i].style.background= "red";

 
}
}