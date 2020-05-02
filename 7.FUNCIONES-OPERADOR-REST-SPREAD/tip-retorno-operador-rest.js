// Ejemplo de funciones retornado un objeto 
function datos(name, lastname) {
    return {
        name: name,
        lastaname: lastname
    }
}

console.log(datos('Carlos', 'Perez'));

// A partir del EC6 cuando las propiedades del objeto tienen el mismo nombre que las variables de la función
// no es necesario indicar la variable para cada propiedad. Por ejemplo


function datos1(name, lastname) {
    return {
        name,
        lastname
    };
}
console.log(datos('Carlos', 'Perez'));

// Ahora hacer lo mismo, pero con la función callback

const datos3 = (name, lastname) => ({ name, lastname });

console.log(datos3('Luis', 'Gomez'));

// Otro tip es hacer uso de una función e introducirle una conjunto de argumentos indeterminados.Para ello,
// la función tiene que tener en el argumento una sintaxis denominada como parametro rest que agrupa en un array
// los argumentos introducidos en la función. Por ejemplo:

const datos4 = (name, lastname, ...args) => ({ name, lastname, args });
console.log('datos4', datos4('yoel', 'jimenez', 2, true, null, 'fin'));

// El ejemplo anterior ha sido considerando que previamente ya se conocia los argumentos o variables name y lastname
// Pero si no se conociera nigún parámetro a recibir la función  sería de la siguiente manera:

const datos5 = (...args) => args;

console.log('datos5', datos5('yoel', 'jimenez', 2, true, null, 'fin'));