'USE STRICT'
// como hago para cambiar el contenido de div id=yoel
// hay un objeto llamado document en conjunción con una función denomidada getelementById permite tomar las instrucciones
// del div de HTML por medio del id definido

//var caja=document.getElementById("yoel");
//console.log(caja);

// otra forma de seleccionar elemento es por medio de Query selector. Por ejemplo. se tiene que colocar previamente un # si es un div
// y colocar previamente un . si es una clase
var caja=document.querySelector("#yoel");

// la instrucción innerHTML permite arrojar solo el contenido de HTML, es decir, el div sin las instrucciones de HTML

//var caja=document.getElementById("yoel").innerHTML;
//console.log(caja);


// Desde Javascript puedo cambiar el contenido de id="yoel" de HTML

caja.innerHTML="HOLA YOEL HE MODIFICADO EL CONTENIDO";
console.log(caja.innerHTML);

// también puedo cambiar el estilo de la pagina desde javascript

caja.style.background="red";
caja.style.padding="50px";
caja.style.color="white";

// también puedo añadir un atributo en HTML por medio de una clase
caja.className= "hola";