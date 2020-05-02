'use strict'
// función para mostrar el ancho y el alto de la pagina
function mostrar(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);
}

// otra forma de obtener las dimensiones de una pagina
function OTRAFORMA(){
console.log(screen.height);
console.log(screen.width);
}
// conocer el url de pagina WEB
function url (){
console.log(window.location)
}

// redirigir a otro sitio web
function redirigir(url){
    window.location.href=url;
}

// abrir unaa ventana popup en el navegador
function abrir_ventana(url){
    window.open(url,"","width=400px","height=300px");
}

