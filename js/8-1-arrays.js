// al igual que los objetos losarreglos forman una parte muy importante en cualquier lenguaje de programacion
// un ejemplo de un arreglo es un carrito de compras, sirve para agrupar elementos del mismo tipo.
// tambien la forma en que facebook muestra un enlistado de amigos o personas que le dieron me gusta a tu ultima publicacion

// veamos primero como crear un arreglo...

const numeros = [10, 20, 30, 40, 50]; // un arreglo de numeros
console.log(numeros);

// en javascript cuando veas esos corchetes son buen indicativo de que esto es un arreglo
// a diferencia de los objetos is recuerda su sintaxis es el de unas llaves

// el arreglo anterior fue de numeros tambien puede crear uno de string unicamente tambien
// puede tener un poco de todo

const meses = ["enero", "febrero", "marzo", "abril", "mayo"];
console.log(meses);

console.log(meses[2]);

// ahora no es obligatorio que el arreglo tenga numeros o strings unicamente
// tambien puede tener un poco de todo

const deTodo = ["hola", 10, true, "si", null, {nombre: "jhonas", trabajo: "programador"}, [1, 2, 3]];
console.log(deTodo);

// incluso un array puede tener un array dentro

// personalmente encuentro mas facil de utilizar la sintaxis de llaves
// asi que esa sera la que estaremos utilizando pero recuerda, un arreglo es
// una forma de agrupar grandes cantidades de informacion en una sola variable