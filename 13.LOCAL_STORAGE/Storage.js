'use strict'

window.addEventListener('load', () => {

    //Guardar datos en el local storage
    localStorage.setItem("titulo", "curso de Yoel");

    // tomar elemento del local storage e imprimirlo por pantalla

    document.querySelector("#demo").innerHTML = localStorage.getItem("titulo");

    //Guardar un Json en LocalStorage
    var user = {
        nombre: "Yoel",
        apellido: "Malpica",
        edad: 28

    };
    localStorage.setItem("usuario", user);
    // el local storage no puede almacenar información  en formato JSON. por tanto se convierte a string
    localStorage.setItem("usuario", JSON.stringify(user));
    // Ahora se ha guardado toda esta información en el local storage como tipo string

    // Para recuperar el objeto anterior del local storage en formato JSON se debe hacer lo siguiente
    var tomar_datos = JSON.parse(localStorage.getItem("usuario"));
    console.log(tomar_datos);

    //para eliminar datos del local storage
    localStorage.removeItem("user");

    // si us el siguiente comando se borra rtodo el local storage

    localStorage.clear();

});