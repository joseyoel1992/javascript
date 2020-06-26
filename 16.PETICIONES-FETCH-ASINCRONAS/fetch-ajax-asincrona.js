// Fetch es un método de JS que realiza peticiones AJAX a un servicio externo
// o a un backend. Una de las peculiaridades de Fetch es que se basa en promesas (el valor de una operación
// que puede ser resuelta más adelante.Por tanto, una promesa puede tener tres estados: pendiente, cumplida o nunca 
//rechazada). Es el resultado de una operación que no precisamente sea el esperado


//el método fetch devuelve un objeto con dos métodos, uno then() y otro catch()
//a la que pasaremos una función que será invocada cuando de obtenga la respuesta
// o se produzca un error(OJO catch solo se ejecuta con errores de red, no errores
//provenientes de respuestas de HTTP porque se considera como una respueta valida))

//En el método fetch es habitual ver dos promesas (then()) encadenadas:
// 1. Para devolver una promesa con el objeto Response de la petición, tanto si tiene éxito como si no.
// 2. Una vez obtenida la respuesta, ésta proporciona una serie de métodos que permiten 
// comprobar su contenido y manejarlo.
let usersj = document.querySelector("#users");
// let usersj = document.getElementById("users"); //otra forma de tomar las instrucciones de HTML
let usuario = []; // con esta varible se pretende tomar solo el array de objetos de los usuarios y no todo el objeto literal
fetch('https://reqres.in/api/users?page=2')
    // .then((response)=> {       // Forma más tradicional de escribir una funcion callback
    //     return response.text();
    .then((response) => response.json()) // forma más limpia de escribir una función callback con solamente el return
    .then((user) => { // forma tradicional del funcion callback
        // let usuario1 = user;
        // console.log({ usuario1 });
        // se utiliza la propiedad ".data" a continuación para que solo se arroje la información que se requiere y no toda la información
        // de la petición fetch como se observa en el console.log anterior/
        usuario = user.data;
        console.log('User = ', usuario);
        usuario.map((perfil, index) => { // el método .map() crea una nueva matriz con los resultados de llamar a una función para cada elemento de la matriz.
            let nombre = document.createElement('h3');
            nombre.innerHTML = `${index}. ${perfil.first_name} ${ perfil.last_name}`;
            usersj.append(nombre);
            console.log(index, perfil.first_name);
            // console.log(nombre)  ejemplo de impresión sin el inner.HTML . arroja inclusive la etiqueta h3
            // console.log(nombre.innerHTML); // impresión con inner.HTML arroja solo el contenido de la etiqueta h3
            // document.querySelector("#load").style.display = 'none'; // evita que se vea el icono de cargando todo el rato
        });

    })
    // .then((user) => console.log('Users = ', user)) // codigo limpio de funcion callback
    // .catch(function(err) {
    //     console.error(err);    //forma tradicional
    // });
    .catch((err) => console.error(err)); // código limpio



// OJO EXPLICACIÓN DETALLDA DEL PROCESO ANTERIOR:

// 1. hemos llamado a fetch() con la URL a la que queremos acceder como parámetro
// 2. esta llamada nos devuelve una promesa
// 3. el método then() de esa promesa nos entrega un objeto response
// 4. del objeto response llamamos al método text() ó json() para obtener el cuerpo retornado en forma de texto o formato json
// 5. nos devuelve otra promesa que se resolverá cuando se haya obtenido el contenido (esta nueva promesa permite comprobar y manipular el contenido)
// 6. el método then() de esa promesa recibe el cuerpo devuelto por el servidor en formato de texto o json
// 7. hemos incluido un catch() por si se produce algún error