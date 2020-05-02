let a = 5;

if (a < 5) {
    console.log('"a" no es menor a 5')
} else {
    console.log('"a" es mayor o igual a 5')
}

let dia = 'viernes';
if (dia === 'lunes') {
    console.log('"Inicia la semana"');
} else if (dia === 'viernes') {
    console.log('"Finaliza la semana"');
} else {
    console.log('se desconoce el día');
}

// sin usar condicionales imprimir el día de la semana empezando el día domingo por 0
let diaS = 3;
let dias1 = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
console.log(dias1[diaS]);

let dias2 = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabad'
};
console.log(dias2[diaS]);