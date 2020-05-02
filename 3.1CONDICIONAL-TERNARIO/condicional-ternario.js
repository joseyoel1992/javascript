// Los condicionales en Js ahora se pueden simplificar en código mediante la aparición de
// operadores condicionales ternarios

// La forma más larga y conocida de hacer condicionales es la siguiente:

// Ejercicio de una tienda que abre los fines de semana a las 9 y dias de semana a las 11
// además el día=0 se considera domingo y así sucesivamente hasta llegar al día 6= sabado


let dia = 0, // dia=0 (domingo),........, dia=6 (sabado)
    hora, //= new Date(), // puede variar
    horaActual = 8, //= hora.getHours(),
    horaApertura;
let mensaje = ([1, 2, 3, 4, 5].includes(dia)) ? console.log('es día de semana') : console.log('es fin de semana');
horaApertura = ([0, 6].includes(dia)) ? 9 : 11;
hora = (horaActual >= horaApertura) ? console.log('está abierto') : console.log('está cerrado');

// console.log(horaActual);
// console.log('---------------');
// if (dia === 0 || dia === 6) {
//     console.log(`es fin de semana ${dia}`);
//     horaApertura = 9;
// } else {
//     console.log('es día de semana');
//     horaApertura = 11;
// }

// if (hora >= horaApertura) {
//     console.log(`está abierto, son las ${horaApertura}`);
// } else {
//     console.log('está cerrado');
// }

// Para simplificar al máximo todo el ódigo anterior se usa el operador condicional ternario