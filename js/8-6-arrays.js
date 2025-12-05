// veamos como añadir un elemento a un arreglo utilizando el spread operator o rest operator

const carrito= [];

//añadir un elemento al carrito...

const producto = {
    nombre:"monitor 20 pulgadas",
    precio:500
}

const producto2={
    nombre:"celular",
    precio:500
}

const producto3={
    nombre:"teclado",
    precio:50
}

//para añadir producto al arreglo simplemente agregamos

let resultado= [...carrito,producto];
resultado= [...resultado,producto2];

//para añadir al inicio...

resultado = [producto3, ...resultado];

//esta forma se conoce mas como declarativa mientras que la del ejercicio anterior es mas imperactiva
// ambas son muy utilizadas en programacion javascript

console.log(resultado);