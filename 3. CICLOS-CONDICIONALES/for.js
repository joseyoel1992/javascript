//Hay tres formas de trabajar con el for

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
//Forma tradicional
console.warn('forma tradicional');
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

// For in 
console.warn('for in');
for (let i in heroes) {
    console.log(heroes[i]);
}

// for of
console.warn('for of');
for (let i of heroes) {
    console.log(i);
}