"use strict";

// similar a freeze existe otro metodo llamado seal que sella un objeto
// a diferencia de freeze no se pueden agregar ni eliminar propiedades
// pero si se pueden modificar las existentes

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto ); // sellamos el objeto producto

//se puede reasignar propiedades existentes
producto.precio = 400;

//pero no eliminar

//tampoco se pueden añadir nuevas propiedades

// verificar si un objeto esta sellado

console.log( Object.isSealed(producto) ); // true si el objeto esta sellado, false si no lo esta

console.log(producto);