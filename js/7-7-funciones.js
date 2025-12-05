"use strict";
// como vimos en los objetos si se pueden modficar sus valores,
// veamos como prevenirlo en caso de que sea algo que no desees hacer

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console-log(producto);

// para ello utilizaremos un object method o metodos de objetos

// seguido me dicen porque les dices metodos eso suena como algo de programacion orientada a objetos
// en realidad ese es su nombre object metods

// pero veamos como prevenir que un objeto sea modificado, para ello utilizaremos freeze, y funciona de la siguiente manera

Object.freeze( producto ); // congelamos el objeto producto

//producto.disponible = false;

//freeze tampoco permite agregar nuevas propiedades 
// producto.imagen = "imagen.jpg";

// tampoco permite eliminar propiedades
// delete producto.precio;

//finalmente si quieres revisar si un objeto esta congelado puedes usar

console.log( Object.isFrozen(producto) ); // true si el objeto esta congelado, false si no lo esta

console.log(producto);