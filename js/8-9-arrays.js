// de aqui en adelante estaremos viendo una serie de metodos de arreglos

const carrito =[
    {nombre:"monitor 20 pulgadas", precio: 500},
    {nombre:"television 50 pulgadas", precio: 700},
    {nombre:"tablet", precio: 300},
    {nombre:"audifonos", precio: 200},
    {nombre:"teclado", precio: 50},
    {nombre:"celular", precio: 500},
]

// recorrer un arreglo de la forma tradicional y mostrar su contenido..

for(let i = 0; i < carrito.length; i++){
    console.log(`articulos; ${carrito[i].nombre} Precio: $ ${carrito[i].precio}`)
}

// foreach esta forma es un poco mas moderna pero igual se usan ambos

carrito.forEach( function(producto) {
    console.log(`articulo: ${producto.nombre} precio: ${producto.precio}`)
})
