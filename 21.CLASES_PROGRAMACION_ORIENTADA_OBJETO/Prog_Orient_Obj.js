'use stric'

// ?Trabajando con clases orientadas a objeto con una nueva sintaxis y más popular. Es decir, se 
// ?escribirá un código distinto a como se ha venido representando la programación orientada a objeto. En la parte de
// ? de abajo después del comentario en color rojo se puede apreciar la forma regular de como se trabajan 
// ?las clases en JavaScript. Ahora se observará ese mismo código, pero representado con otra sintaxis más común

class Pantalla {
    // Cada clase debe tener un constructor. El constructor da paso para que se incialicen las cosas
    constructor(marca, modelo, pulgadas) {
            this.marca = marca;
            this.modelo = modelo;
            this.pulgadas = pulgadas;
        }
        // Se procede a agregar los métodos
    encendido() {
        console.log(`la pantalla ${this.marca} se ha encedido `);
    };
    volumen() {
        console.log("El volumen se ha modificado");
    };

    // Para poder agregar más propiedades a la clase, se utiliza el método "set" para definir y configurar 
    // el valor de la propiedad y el método "get" para retornar este valor al ser llamada o invocada
    set peso(value) {
        this.kg = value;
    }
    get peso() {
        return this.kg;
    }
};

// Se procede a instanciar la clase
const tvSala = new Pantalla('LG', '2.0', '55');
const tvHab = new Pantalla('Samsung', '3.0', '65');





// !A continuación se puede apreciar como se declara una clase a como se viene trabajando regularmente
// !en  Java Script. En el siguiente código se puede ver que se declara una función y, además, cada uno de
// ! métodos utilizando prototype. Y cuando se quiere hacer una instancia de la clase se hace por medio de 
// !un new

// function Pantalla(marca, modelo, pulgadas) {
//     this.marca = marca;
//     this.modelo = modelo;
//     pulgadas;
//     //* desde el EMC6 cuando el nombre del parámetro de la función tiene el mismo nombre de la
//     //* propiedad se puede representar de esa manera y no necesarimente como : this.pulgadas=pulgadas
// };

// //*Ahora para agregar métodos al constructor del objeto anterior se utiliza la propiedad prototype:

// Pantalla.prototype.encendido = function() {
//     console.log(`la pantalla ${this.marca} se ha encedido `);
// };
// Pantalla.prototype.volumen = function() {
//     console.log("El volumen se ha modificado");
// };

// const tvSala = new Pantalla('LG', '2.0', '55');
// const tvHab = new Pantalla('Samsung', '3.0', '65');