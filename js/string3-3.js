//Repeat te va a permitir repetir una cadena de texto:

const producto = 'monitor 24 pulgadas ';
const texto = ' en promocion'.repeat(3);
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // si es un numero decimal lo va a redondear a entero
console.log(`${producto} ${texto}!!!`); // concatenacion

//split

const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad);
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

//.touppercase te va a permitir cambiar un texto a todo mayusculas
const producto2 = 'Monitor HD';
console.log(producto2.toUpperCase());

//.toLowerCase te va a permitir cambiar un texto a todo minusculas
const producto3 = 'Monitor HD';
console.log(producto3.toLowerCase());

// .tostring te va a permitir convertir un numero a string
const cantidad = 200;
const cantidad2 = 400;
console.log(cantidad);
suma = cantidad + cantidad2;
console.log(suma);
console.log(`${cantidad}+${cantidad2}`);
console.log(cantidad+cantidad2);

