//  Creamos un objeto
let personajes = {
    nombre: 'carlos',
    apellido: 'lopez',
    edad: 28,
    dni: 'ABCDEFGH',
    mail: 'carlos@gmail.com',
    trabaja: true,
    hermanos: ['luis', 'andres', 'pepe'],
    otrosHeramanos: { hermano1: 'jose', hermano2: 'jesus', hermano3: 'victor' },
    anios: [1992, 1998, 2002, 2009, 2020]
};

// acceder a la propiedad nombre
let aNombre = personajes.nombre;
console.log('el nombre es:', aNombre);

// acceder al heramano1
let hermano1 = personajes.otrosHeramanos.hermano1;
console.log({ hermano1 });

//otra forma de acceder a hermano1
hermano1 = personajes.otrosHeramanos['hermano1'];
console.log({ hermano1 });

// acceder al elemento pepe
let nombrePepe = personajes.hermanos.find((nombreFind) => {
    return nombreFind === 'pepe';
});
console.log({ nombrePepe });
//otra forma de acceder al elemento  pepe, ya conociendo su posición en el array
nombrePepe = personajes.hermanos[personajes.hermanos.length - 1];
console.log({ nombrePepe });

//incluir un nueva propiedad en el objeto:
personajes.nuevoelement = 'hola soy nuevo';
console.log('Agregrando nueva propiedad nuevoelement', personajes);

//eliminar una propiedad del objeto:

delete personajes.nuevoelement;
console.log('utilizando delete para nuevoelement', personajes);

// bloquear un objeto para que no agreguen, eliminen o modifiquen propiedades;

let bloqueo = Object.freeze(personajes);
personajes.postBloqueo = "POSTBLOQUEO";
console.log('Después del bloqueo al object personajes', personajes);

// Obtener un array del nombre de las propiedades del objeto

let propiedadesName = Object.getOwnPropertyNames(personajes);
console.log('Nombre de las propiedades del object personajes', propiedadesName);

// obtener el valor de las propiedades del objeto

let getValueProperty = Object.values(personajes);
console.log('obtener valor de propiedades', getValueProperty);