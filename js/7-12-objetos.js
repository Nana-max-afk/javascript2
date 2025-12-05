//en este object keys y object values y entries
// estos son mas conocidos como iteradores de objetos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(Object.keys(producto)); // nos devuelve un arreglo con las llaves o propiedades del objeto

console.log(Object.values(producto)); // nos devuelve un arreglo con los valores del objeto

console.log(Object.entries(producto)); // nos devuelve un arreglo con los pares de llave y valor del objeto


// y con eso tenemos un buen conocimiento de objetos de javascript 