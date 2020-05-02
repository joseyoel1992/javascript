// 1. Crear un formulario a partir del cual se introduzcan nombres de peliculas y se guarden en el local Storage

'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', () => {

        var pelicula = document.getElementById('nombre').value;
        console.log(pelicula);
        formulario.append(pelicula);
        if (pelicula.length >= 1) {
            localStorage.setItem("pelicula", pelicula);
        };
    });

    // ahora quiero guardar esta información en el local storage











});

