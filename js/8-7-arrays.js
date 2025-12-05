const carrito = []; 

const producto = {
    nombre: "monitor de 20 pulgadas",
    Precio: 500
}

const producto2= {
    nombre: "celular",
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: "teclado",
    precio: 50
}

carrito.unshift(producto3);

//veamos como eliminar elementos de un arreglo...
// con un pbjeto solo se utiliza delete, los arreglos tambien son sencillos de manipular

//eliminar al primer elemento....
carrito.shift();

//eliminar el ultimo elemento...
carrito.pop();

//ahora supongamos que deseas eliminar el del centro...
carrito.splice(1,0); //el segundo parametro es que tantos elementos vamos a borrar 0 significa nada

console.log(carrito)