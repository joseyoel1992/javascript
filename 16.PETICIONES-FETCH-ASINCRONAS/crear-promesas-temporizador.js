let usersj = document.querySelector("#users");
let janet_template = document.querySelector("#janet_template");
let index1; // he creado esta variable para conocer el indice del listado de usuarios
url()
    .then((response) => response.json()) // forma más limpia de escribir una función callback con solamente el return
    .then((user) => { // forma tradicional del funcion callback
        // usuario = user.data;
        // console.log('User = ', usuario);
        listado_usuarios(user.data);
        index1 = user.data.length;
        console.log(user.data.length);
        return single_user(); //AQUI LO QUE ESTAMOS HACIENDO 
    }) // ES ENCADENAR PROMESAS
    // ENCADENANDO LAS PROMESAS TRAS LLAMAR LA URL DE LA FUNCION URL()
    // Y ENCADENANDOLA CON OTRA PROMESA TRAS LLAMAR OTRA URL DE LA FUNCIÓN SINGLE_USER()
    .then((response) => response.json()) // forma más limpia de escribir una función callback con solamente el return
    .then((janet) => { // forma tradicional del funcion callback
        // usuario = user.data;
        console.log('Single User= ', janet.data);
        single_user_print(janet.data);
        // aqui retorno la nueva función con la nueva promesa que he creado
        return get_info();
    })
    .then((info) => console.log(info));

const listado_usuarios = (usuarios) => {
    usuarios.map((perfil, index) => { // el método .map() crea una nueva matriz con los resultados de llamar a una función para cada elemento de la matriz.
        let nombre = document.createElement('h3'); // se crea la etiqueta h3 en html <h3> </h3>
        nombre.innerHTML = `${index}. ${perfil.first_name} ${ perfil.last_name}`; // aqui indico el contenido que va dentro de la etiqueta h2 //<h3> contenido</h3>
        usersj.append(nombre); //aqui agrego el elemnto html con el  contenido en el "id" seleccionado                            
    });
};


function url() {
    return fetch('https://reqres.in/api/users?page=2'); // esta url me rredirige al listado de un arra de usuarios
};

function single_user() {
    return fetch('https://reqres.in/api/users/2'); // esta url me redirige al usuario JANET
};

function single_user_print(janet) {
    let nombre_janet = document.createElement('h3');
    nombre_janet.innerHTML = ` ${index1}. ${janet.first_name} ${ janet.last_name}`;
    janet_template.append(nombre_janet);
    //Ahora procedo  a mostrar la imagen de janet obtenida desde la url por pantalla
    let img = document.createElement("img"); // aqui se ha creado el elemento <img> en la template de html
    img.src = janet.avatar; // aqui se le indica la ubicación de la imagen por medio del atributo .src
    // también se puede modificar su tamaño con img.width  img.heigth  y trabajar con otros atributos
    janet_template.append(img) // aqui añado la imagen en el div del html 

};


//¿ COMO CREAR PROMESAS?

// function get_info() {
//     // DEFINO UNA VARIABLE COMO UN OBJETO JSON
//     var mis_datos = {
//         nombre: 'Yoel',
//         pais: 'españa',
//         instagram: 'https://instagram.com'
//     };
//     // ahora instancio el objeto promise para crear una nueva promesa
//     return new Promise((resolve, reject) => {

//         // convierto el objeto JSON mis_datos en un JSON STRING para ello:
//         var mis_datos_string = JSON.stringify(mis_datos);
//         // coloco una condicion por sin el tipo de datos no es un json string que arroje un error111
//         if (typeof mis_datos_string != 'string') return reject('error111'); // en este caso no hace falta colocar los corchetes porque la unica intruccion es return 
//         //    si la conversión a string se ha realizado correctamente que arroje la información del json string
//         return resolve(mis_datos_string);


//     });
// }


// AHORA A LA PROMESA LE COLOCO UN TEMPORIZADOR PARA SIMULAR UN RETARDO EN LA RESPUESTA DE LA PETICIÓN
// YA QUE MUCHAS VECES TRAS REALIZAR PETICIONES A SERVICIOS EXTERNOS O AL BACKEND HAY UN RETARDO
function get_info() {
    // DEFINO UNA VARIABLE COMO UN OBJETO JSON
    var mis_datos = {
        nombre: 'Yoel',
        pais: 'españa',
        instagram: 'https://instagram.com'
    };
    // ahora instancio el objeto promise para crear una nueva promesa
    return new Promise((resolve, reject) => {

        // convierto el objeto JSON mis_datos en un JSON STRING para ello:
        var mis_datos_string = "";
        setTimeout(() => {
            mis_datos_string = JSON.stringify(mis_datos);
            // coloco una condicion por sin el tipo de datos no es un json string que arroje un error111
            if (typeof mis_datos_string != 'string' || mis_datos_string == '') return reject('error111'); // en este caso no hace falta colocar los corchetes porque la unica intruccion es return 
            //    si la conversión a string se ha realizado correctamente que arroje la información del json string
            return resolve(mis_datos_string);

        }, 3000);


    });
}