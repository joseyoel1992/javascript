'use stric'
var boton = document.getElementById("boton");


function cambiaColor() {

    // var boton = document.querySelector("#boton");  De cualquiera de las dos formas se puede manipular
    //template de HTML

    console.log("me has dado click");
    var color = boton.style.background;
    if (color == "green") {
        boton.style.background = "red";
    } else {
        boton.style.background = "green";

    }
    return true;
}
//Evento Click
boton.addEventListener('click', () => { cambiaColor() });

//Evento mouseover
boton.addEventListener('mouseover', function() {

    document.getElementById("demo").innerHTML = Math.random();
});

//mouseout
boton.addEventListener('mouseout', function() { boton.style.background = "black"; })

;

// Aparte de estos eventos hay muchos eventos más. Por ejemplo:
// focus,blur,keydown,keypress,keyup,etc

// Estos eventos lo podemos utilizar con acciones con botones, campos de formularios, etc