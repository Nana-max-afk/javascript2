//Veamos como acceder a las propiedades de un objeto:

const producto = {
    nombre: "Monitor 20 pulgadas", // la , es importante, sin ella tendria un error
    precio: 300,
    disponible: true, // el ultimo elemento puede o no tener la ,
}

console.log(producto); // muestra todo el objeto

// supongamos que deseamos acceder al nombre en los objetos de javascript existe algo llamado sintaxis de punto

console.log(producto.nombre); // accedemos a la propiedad nombre del objeto producto
console.log(producto.precio); // accedemos a la propiedad precio del objeto producto
console.log(producto.disponible); // accedemos a la propiedad disponible del objeto producto

//otra forma no tan comun es
console.log(producto["nombre"]); // accedemos a la propiedad nombre del objeto producto
console.log(producto["precio"]); // accedemos a la propiedad precio del objeto producto
console.log(producto["disponible"]); // accedemos a la propiedad disponible del objeto producto

// crear una nueva llave 

// añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen="imagen.jpg"; // añadimos la propiedad imagen al objeto producto
console.log(producto.imagen); // mostramos el objeto producto ya modificado
// finalmente para eliminar una propiedad se utiliza delete

delete producto.disponible; // eliminamos la propiedad disponible del objeto producto

console.log(producto); // mostramos el objeto producto ya modificado

// Algunas veces deseas asignar el valor de un objeto hacia una variable