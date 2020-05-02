/* Ejercicio:
1. Formulario campos: Nombre, apellido y edad
2. Boton de enviar el formulario:eventos submit
3. Mostrar datos por pantalla
4. Tener un boton que al darle click nos muestra los datos actuales del formulario
*/
'use strict'

window.addEventListener('load', () => {

    var formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', () => {

        var input = document.getElementsByTagName("input");

        var nombre = document.getElementById("nombre").value;
        console.log(nombre);
        var apellido = document.getElementById("lname").value;
        console.log(apellido);
        var edad = parseInt(document.getElementById("edad").value);
        console.log(edad);

        // validar el formulario

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert("El nombre introducido no es correcto");
            return false;
        };
        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("El apellido introducido no es correcto");
            return false;
        }
        if (isNaN(edad) || edad.length <= 0 ||edad ==null) {
            alert("La edad introducida no es correcta");
            return false;
        }
        var newDiv = document.createElement("div");
        var datos = [nombre, apellido, edad];
        var parrafo = document.createElement("p");
        var CurrentDiv = document.querySelector(".box1");
        document.body.insertBefore(newDiv, CurrentDiv);
        

        for (var i in datos) {
            parrafo.append(datos[i]);

        };
        newDiv.append(parrafo);

    });


});
