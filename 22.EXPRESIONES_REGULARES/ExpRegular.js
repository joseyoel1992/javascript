// Creando una expresión regular
let expresion1 = new RegExp('abc');
// en el código anterior el uso de la expresión regular viene dado por el objeto RegExp
// cuyo objeto recibe como argumento la expresión

// ?Otra forma de definir una expresión regular es de la siguiente forma:

let expresion2 = /hola mundo/;

//? Para poder probar este tipo de expresiones es necesario utilizar el método "test()"

console.log(expresion1.test('Hola abc')); // en este caso arroja true porque se encuentra el patron "abc" dentro del texto
console.log(expresion2.test('Hola abc')); // en este caso arroja true porque se encuentra el patron "abc" dentro del texto
console.log(expresion1.test('Hola ABC')); // en este caso arroja false porque ExpReg es case sensitive
console.log(expresion1.test('Hola ab')); // en este caso arroja false porque ExpReg no se encuentra el patrón
console.log(expresion2.test('hola mundo')); // en este caso arroja true

// ?Ahora se procede comprobar por medio de expresiones regulares si existe al menos un número o caracter
// ?que se observa dentro de la expresión regular

//? Se utilizan los corchetes cuando se quiere comprobar al menos un caracter de los indicados en la expresión regular
let expresion3 = new RegExp('[0123456789]'); //* forma menos simplificada
let expresion4 = new RegExp('[0-9]'); //* forma más simplificada 

console.log('comprobando al menos un caracter', expresion3.test('yo tengo 28 años')); // arroja true porque aparece 28 en la cadena de texto
// Ahora se hace la comprobación con el patrón definido más simplificado
console.log('comprobando al menos un caracter con el patrón simplificado', expresion4.test('yo tengo 28 años')); // arroja true porque aparece 28 en la cadena de texto

// ? Ahora se procede a evaluar una fecha con los shortcuts / atajos que están en el archivo leer
let expresion5 = /\d\d-\d\d-\d\d\d\d/;
let expresion6 = new RegExp('\\d\\d-\\d\\d-\\d\\d\\d\\d');

console.log('Comprobando con los shortcuts', expresion5.test('15-01-1992')); //arroja true
console.log('Comprobando con los shortcuts', expresion6.test('15-01-1992')); //arroja true

//? NEGACIONES DE EXPRESIONES
// Para negar una expresión se utiliza el caracter "[^]", es decir, este caracter arroja true cuando 
// en la cadena de caracteres no aparece el patron definido. En este caso el patrón 
// definido es "0" y "1". Es decir: /[^01]/

let expresion7 = /[^01]/;

console.log('Negación de expresiones', expresion7.test('0110101010')); //Aqui se arroja false porque en la cadena
// de caracteres aparece el patrón definido

//*Si en la cadena de caracteres se coloca un número distinto a "0" y "1" se arroja true.
// * Po ejemplo colocando un 2 en la cadena de caracteres
console.log('Negación de expresiones', expresion7.test('011020')); //Aqui se arroja true porque difiere los caracteres del patrón con  respecto a la cadena
// *de caracteres

// ?TRABAJAR CON CARACTERES ESPECIALES PARA REPETIR PATRONES
// * El carácter "+" determina cuando un caracter se repite al menos una vez. Por ejemplo:

let expresion8 = /1+/;

console.log('Repetir patrones', expresion8.test('yo tengo 18 años')); //Arroja true porque aparece al menos una vez
// el caracter "1";
console.log('Repetir patrones', expresion8.test('yo tengo 28 años')); //Arroja false porque no está el caracter "1"

//* El caracter "*" cuantifica la presencia de cero o más apariciones de un caracter. Por ejemplo:

let expresion9 = /1*/;

console.log('Repetir patrones con "*"', expresion9.test('arroja true y no aparece un uno'));
console.log('Repetir patrones con "*"', expresion9.test(' Tambien arroja true y aparece un 1'));

//? CONTEO DE PATRONES DE EXPRESIONES REGULARES
// * El 

let expresion10 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{1,2}/
    // * las llaves "{}" permiten definir cuantos caracteres se deben establecer, en este caso para la fecha
    // *\d{1,2} indica que el día del mes, hora, número de mes, minutos puede tener uno o dos caracteres. un caracter: 9 dos caracteres: 10
    // *\d{4} indica que el año tendrá obligatoriamente cuatro caracteres: 2007

console.log('Conteo de patrones', expresion10.test('27-06-2007 11:45')); //arroja true 
console.log('Conteo de patrones', expresion10.test('27-06-207 11:45')); //arroja false porque el año debería tener 4 caracteres

//? PATRONES NO SENSIBLES A MAYUSCULAS Y A MINUSCULAS

let expresion11 = /hola mundo/i;
// *La letra "i" permite realizar una búsqueda sin considerar el sensitive case. Por tanto, da lo
// * mismo si la cadena y el patron estan en mayuscula o minuscula
console.log('Sin sentive case', expresion11.test('HOLA MUNDO')); //Arroja true porque no se consideran las mayusculas o minusculas

//? AGRUPANDO PATRONES

let expresion12 = /([0-9][a-z]){2}/gi;
//* En este caso se ha creado un grupo constituido por un carácter númerico y un carácter alfabetico.
//* Ese grupo va seguido de un conteo de patrones {2}. Por tanto, el grupo se debe aparecer dos veces

console.log('agrupando patrones', expresion12.test('1b5g')); //arroja true porque se repite dos veces el grupo
console.log('agrupando patrones', expresion12.test('1bty')); //arroja false porque no se cumple la condición del grupo
console.log('agrupando patrones', expresion12.test('1b4udokdded9e')); //arroja true porque la cadena inicial cumple con la condición del grupo a pesar que los siguientes caracteres no

//? METODO "EXEC" PARA EVALUAR CADENA DE TEXTOS

let expresion13 = /\d+/;
// *NOTA:El método exec recibe como parámetro el texto o cadena de texto que se va evaluar

let nuevoMetodo = expresion13.exec('nací en el año 1997');

console.log('Evaluando con el método exec', nuevoMetodo)
    // * Por consola se puede apreciar que se arroja una array con indicando el indice donde se encuentra
    // * el caracter, el texto de entrada y el caracter que coincide con el patrón

// ? METODO "MATCH" PARA EVALUAR CADENA DE TEXTO
// *El método "Match" a diferencia del "exec" recibe como parámetro el patrón definido

let metodoMatch = 'tengo 30 años';
console.log('Utilizando el método Match', metodoMatch.match(/\d+/));

//? LIMITAR PALABRAS Y CADENA DE TEXTO
// *Para limitar la evaluación de palabras en cadenas de textos se utiliza  \b aqui va el patron limitado\b

let expresion14 = /\bcat\b/;
console.log('Limitando Palabras', expresion14.test('cat')); //Arroja true porque la cadena de caracteres coincide con el patron
console.log('Limitando Palabras', expresion14.test('categoria')); //Arroja false porque la cadena de caracteres no coincide con el patrón

// ? USO DE PATRONES OPCIONALES EN EXPRESIONES REGULARES
let expresion15 = /pollo|carne|pescado/i;
// *El caracter "|" permite evaluar cualquiera de las palabras que sean separadas por dicho caracter,
// *Cualquiera de esas opciones si aparecen en la cadena de texto es valida.

console.log('PATRONES OPCIONALES', expresion15.test('el menú de hoy es pescado')); //arroja true porque aparece pescado de las posibles opciones
console.log('PATRONES OPCIONALES', expresion15.test('el menú de hoy es frijoles')); //arroja false porque no aparece ninguna de las  opciones definidas

// ? PATRONES AL INICIO Y AL FINAL DE UNA EXPRESIÓN
// * Para evaluar y validar una palabra al inicio de una expresión se utiliza el caracter "^"

let expresion16 = /^hola/i;
// *con el caracter "^" se evalua que el incio de la cadena de caracteres empiece con la palabra hola
console.log('Evaluando patrones de inicio', expresion16.test('hola yoel')); //arroja true porque empieza con hola
console.log('Evaluando patrones de inicio', expresion16.test('adios yoel')); //arroja false porque empieza con hola

// * Para evaluar y validar una palabra al final de una expresión se utiliza el caracter "$"
let expresion17 = /yoel$/i;
console.log('Evaluando patrones de final', expresion17.test('hola yoel')); //arroja true porque la última palabra es yoel
console.log('Evaluando patrones de final', expresion17.test('hola jose')); //arroja false porque la última palabra no es yoel


// ? CUANTIFICADOR ?
// * El caracter ? permite identificar si una letra o elemento que se quiere evaluar aparece o no.
// * Si en dado caso aparece lo tama como bueno y sino aparece también lo toma como bueno.
// * Por ejemplo: el "@" del usuario de twitter no es necesario colocarlos para acceder a twitter. Si se coloca
// * el @ se puede acceder y si no se coloca también se puede acceder

let expresion = /yoel@?gmail/;

console.log('Probando la expresión ? :', expresion.test('yoel@gmail')); //arroja true porque aparece @
console.log('Probando la expresión ? :', expresion.test('yoelgmail')); //también arroja true y no aparece @








// ?USAR EL MÉTODO REPLACE EN CADENA DE TEXTO

let expresion18 = 'El cliente pidió sushi y comió sushi';
// Se va a cambiar la palabra sushi por tacos
let cambiarExpresion18 = expresion18.replace(/sushi/ig, 'taco');
// recordar que "g" e "i" sirven para hacer una busqueda global en la cadena de texto y no considerar las mayusculas o minusculas
console.log('Reemplazando palabras de la cadena de texto: ', cambiarExpresion18);

// ?METODO DE BUSQUEDA "SEARCH"

let expresion19 = 'usando el método de búsqueda search';
let usandoSearch = expresion19.search(/\W/g);
// El caracter \W indica cualquier caracter que no sea alfanumerico
console.log('Usando el método de búsqueda search:', usandoSearch); //Arroja un número indicando la posición del primer caracter que no es alfanumerico,
// en este caso el espacio no es considerado un caracter alfanumerico. Por eso, arroja la posicion número 6
// La desventaja de este método es que solo arroja la posición del primer caracter encontrado a pesar de tener 
// la condición de búsqueda global 'g'. En caso de no concidir la búsqueda arroja -1

// ?EJEMPLO VALIDANDO UNA CUENTA DE TWITTER

// Se va a validar una cuenta de twitter que obligatoriamente inice con @ y luego tenga cualquier caracter alfanumerico que se puede repetir

let expresion20 = /^@(\w+)$/
let patron = '@malpicajj';

console.log('validando twitter', expresion20.test(patron)); //arroja true. Inicialmente se valida que
// empiece por @ luego se coloca un grupo para indicar que esta seguido por una cadena de caracteres alfanumericos
// al final se coloca el dolar para indicar que debe finalizar con un caracter alfanumerico

//