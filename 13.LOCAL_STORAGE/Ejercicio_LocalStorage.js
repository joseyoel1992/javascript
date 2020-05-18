// 1. Crear un formulario a partir del cual se introduzcan nombres de peliculas y se guarden en el local Storage

'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector("#formulario");

    formulario.addEventListener('submit', () => {
        // formulario.addEventListener('event',listener)
        // submit: Un string representando el  tipo de evento a escuchar.
        // listener: El objeto que recibe una notificación cuando un evento de el tipo especificado ocurre.
        //  Debe ser un objeto implementando la interfaz EventListener o solo una function en JavaScript.

        var pelicula = document.getElementById('nombre').value;
        console.log(pelicula);
        formulario.append(pelicula);
        if (pelicula.length >= 1) {
            // El siguiente comando guarda los datos en el local storage
            localStorage.setItem("pelicula", pelicula);
        };
    });

    // ahora quiero guardar esta información en el local storage











});