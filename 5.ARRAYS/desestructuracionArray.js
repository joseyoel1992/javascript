let platillos = ["ceviche", "pasta", "arroz", "pizza"];

// Esta no es la mejor forma de desestructurar elementos de un array
// let platillo1 = platillos[0];
// let platillo2 = platillos[1];
// let platillo3 = platillos[2];
// let platillo4 = platillos[3];
// console.log(platillo1, platillo2, platillo3, platillo4);


//La mejor forma sería la siguiente:

let [platillo1, platillo2, platillo3, platillo4] = platillos;
console.log(platillo1, platillo2, platillo3, platillo4);
console.log(platillo1);