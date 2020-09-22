'use stric'

// ?Ahora se procede a crear una nueva clase llamada producto, la cual será la clase padre con el fin
// ?de representar un ejemplo de herencia

class Producto {
    //*Se inicializa el constructor
    constructor(numSerie) {
            // *El constructor tendrá un parámetro de inicial llamado numSerie
            this.numSerie = numSerie;
            // *El tiempo de garantía será una valor predeterminado. Por tanto, no se requiere introducir su valor 
            // *Por medio del constructor
            this.tiempoGarantia = 100;
        }
        //* A continuación se definen una serie de métodos:

    // *El siguiente método es para conocer el lugar de donde se han adquirido los productos

    get infoTienda() {
            console.log('Productos de la tienda software SL');
        }
        // *Los siguientes métodos son para definir y mostrar el valor de la garantía del producto

    // !OJO LA PALABRA "STATIC" ANTES DE UN METODO GET O SET HACE REFERENCIA QUE SE PUEDE ACCEDER A ESTA 
    // !PROPIEDAD SIN NECESIDAD DE INSTANCIAR LA CLASE. Es decir, se puede acceder a esta propiedad desde
    // ! la clase padre "Producto" o la clase hijo "Pantalla" sin ser instanciadas como se ha venido haciendo.

    // !EJEMPLO:
    static get info() {
        console.log('Productos nuevos');
    }


    set garantia(value) {
        this.tiempoGarantia -= value;
    };

    get garantia() {
        return this.tiempoGarantia;

        // *Recordar que los métodos set y get se llaman sin parentesis, es decir:
        // * console.log(garantia);
        // *conosole.log(infoTienda);
        // ?La forma errada de llamarlos que nos arroja un error, sería:
        // *conosole.log(infoTienda());

    }
}
//?Ahora se procede a definir la clase "Producto" como clase padre de "Pantalla", es decir, "Pantalla"
// ? será la clase hija
class Pantalla extends Producto {
    // Cada clase debe tener un constructor. El constructor da paso para que se incialicen las cosas
    constructor(numSerie, marca, modelo, pulgadas) {
            // *Sin el siguiente código se arroja un error por consola, el cual indica que hay que llamar
            // *al super constructor en la clase antes de acceder al "this". Por ello, se coloca super(numSerie):
            // * Y además, se tiene que colocar el parámetro "numSerie" como parámetro del constructor de la clase
            // *pantalla. También se debe instanciar (el llamado de la clase está al final del código) con el nuevo 
            // *parámetro "numSerie" que se ha  heredado de la clase "Producto"
            super(numSerie);
            this.marca = marca;
            this.modelo = modelo;
            this.pulgadas = pulgadas;
        }
        // Se procede a agregar los métodos
    encendido() {
        // *El valor de la garantía por defecto es "100", pero cuando se enciende, se quiere que este valor
        // *disminuya  de uno en uno. Por ello se coloca el siguiente código:
        this.garantia = 1; // aqui estamos defiendo el valor de la propiedada por medio de "set garantia(value)" 
        // *Fin del código para disminuir garantía
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
const tvSala = new Pantalla('1234', 'LG', '2.0', '55');
const tvHab = new Pantalla('56780', 'Samsung', '3.0', '65');

// Con la siguiente instrucción se puede observar por consola que ya se tiene acceso a las propiedades del
// de la clase padre "Producto"
console.log(tvHab.numSerie);

// !Impresion del método get info con la palabra reservada STATIC, sin  realizar una instancia
console.log(Producto.info);
console.log(Pantalla.info);