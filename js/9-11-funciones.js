//ForEach y map con arrow functions

const carrito = [
    { nombre: 'monitor 20 pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 900 },
    { nombre: 'tablet', precio: 100 },
    { nombre: 'audifonos', precio: 200 },
    { nombre: 'teclado', precio: 300 },
    { nombre: 'celular', precio: 700 },
]

const nuevoArray = carrito.map( producto => `Articulo: ${ producto.nombre } precio: ${producto.precio}`);
/// con .map puedes crear un nuevo arreglo con los resultados de esa operacion
// sin modificar el arreglo original


const nuevoArray2 = carrito.forEach( producto => (`Articulo: ${ producto.nombre} precio: ${producto.precio}`));

console.log(nuevoArray)
//console.log(nuevoArray2) 

//los array functions si no se coloca el returb y queda en una sola linea dan por implicito el return en el map

