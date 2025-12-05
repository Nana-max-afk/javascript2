const carrito =[
    {nombre:"monitor 20 pulgadas", precio: 500},
    {nombre:"television 50 pulgadas", precio: 700},
    {nombre:"tablet", precio: 300},
    {nombre:"audifonos", precio: 200},
    {nombre:"teclado", precio: 50},
    {nombre:"celular", precio: 500},
]

//muy similar al foreach existe un array metod llamado map, la diferencia es que map te crea un array nuevo


const nuevoArray = carrito.map(function(producto){
    return `Articulo: ${producto.nombre} precio: ${producto.precio}`;
})

carrito.forEach(function(producto){
    console.log( `Articulo: ${producto.nombre} precio: ${producto.precio}`);
})

console.log(nuevoArray)
