// veamos como asignar variables a un objeto

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;


// otra forma de hacerlo y que tambien es nueva, es algo llamado object destructuring

// destructuring significa sacar de una estructura puede ser complejo
// no lo es tanto sobre todo cuando lo practicas

//const { nombre } = producto;

// si deseas extraer mas variables;

//const { precio } = producto;

//console.log(nombre);
//console.log(precio);

// o puedes hacerlo mejor con

const { nombre, precio} = producto;
console.log(producto);
