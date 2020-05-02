// funcion representada de forma tradicional
function saludar() {
    console.log('Hola mundo');
}
// funcion representada de forma tradicional con argumento
function saludar2(name) {
    console.log('Hola', name, 'desde la función tradicional');
}
// Llamando a la función con un argumento
saludar2('yoel');

//  Función anónima
const saludar3 = function() {
        console.log('Hola mundo');
    }
    // función anónima con argumento
const saludar4 = function(name) {
    console.log('Hola', name, 'desde la función anónima');
}
saludar4('Yoel');

// función callback
const saludar5 = () => {
        console.log('Hola desde la función callback');
    }
    // función callback con argumento
const saludar6 = (name) => {
        console.log('Hola', name, 'desde la función callback');
    }
    // llamo la función callback con argumento
saludar6('Yoel');
// Si a una función no le colocamos return no devuelve nada. Undefined.Por ejemplo:
const valorSaludar6 = saludar6('jose');
console.log(valorSaludar6); // en este caso se arroja un mensaje de undefinend

// Funciones con return
const suma = (a, b) => {
    return a + b;
}
console.log(suma(2, 3));

// Una de las ventajas de las funciones callback de JS es la simplificación del código cuando 
// dentro de la función solo está el comando return

const sumar2 = (a, b) => a + b; // esto es lo mismo que el codigo anterior
console.log(sumar2(4, 4));

// otro ejemplo
const getAleatorio = () => Math.random();

console.log(getAleatorio());