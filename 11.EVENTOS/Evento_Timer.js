'use strict'

window.addEventListener('load', () => { // esta función de window.addEventListener me 
    // permite poder colocar el script en el template del HTML en cualquier lugar. No necesariamente
    // al final del Body como se venia haciendo.

    //Método Set interval 
    function Start_Stop() {
        var tiempo = setInterval(() => {
            var encabezado = document.querySelector("h1");
            console.log("entre a la función");

            if (encabezado.style.fontSize == "50px") {
                encabezado.style.fontSize = "20px";
            } else {
                encabezado.style.fontSize = "50px";
            }

        }, 2000);
        return tiempo;

    };
    var temporizador;
    // creo dos botones para iniciar y detener el parpadeo

    var start = document.getElementById("Start");
    start.addEventListener('click', () => {
        temporizador = Start_Stop();
    });

    var stop = document.getElementById("Stop");
    stop.addEventListener('click', () => {
        clearInterval(temporizador);
    });


});