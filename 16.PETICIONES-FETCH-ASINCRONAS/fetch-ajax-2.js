let usersj = document.querySelector("#users");
let usuario = []; // con esta varible se pretende tomar solo el array de objetos de los usuarios y no todo el objeto literal
fetch('https://reqres.in/api/users?page=2')
    .then((response) => response.json()) // forma más limpia de escribir una función callback con solamente el return
    .then((user) => { // forma tradicional del funcion callback
        usuario = user.data;
        console.log('User = ', usuario);
        usuario.map((perfil, index) => { // el método .map() crea una nueva matriz con los resultados de llamar a una función para cada elemento de la matriz.
            let nombre = document.createElement('h3');
            nombre.innerHTML = `${index}. ${perfil.first_name} ${ perfil.last_name}`;
            usersj.append(nombre);
            console.log(index, perfil.first_name);
        });

    })
    .catch((err) => console.error(err)); // código limpio