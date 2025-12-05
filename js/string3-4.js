// estaremos viendo 3 metodos mas .replace, .slice y .repeat

// .replace te va a permitir reemplazar una palabra por otra en un string
const producto = 'Monitor 20 pulgadas';
console.log(producto.replace("20", "24"));
console.log(producto.replace('Pulgadas', '"'));

// .slice te va a permitir cortar un string en la posicion que le indiquemos
console.log( producto.slice(0,10)); // corta desde la posicion 0 hasta la 10 (sin incluir la 10)
console.log(producto.slice(8)); // corta desde la posicion 8 hasta el final
console.log(producto.slice(2, 10)); // cortar desde el 2 hasta el 10

console.log(producto.slice(2,1)); // si el segundo numero es menor que el primero no corta nada

//existe uno similar a slice que es substring
console.log( producto.substring(0, 10) ); // corta desde la posicion 0 hasta la 10 (sin incluir la 10)
console.log( producto.substring(2, 1) ); // si el segundo numero es menor que el primero, lo invierte y corta normalmente

// si has visto algunos sitios web muestran tu primer letra de tu nombre:

const nombre = "Jhonas";
console.log(nombre.substring(3));
console.log(nombre.charAt(3)); // otra forma de hacerlo es con charAt
