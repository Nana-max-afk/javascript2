// metodos para strings
const producto = '    monitor 20 pulgadas    ';

console.log(producto);
console.log(producto.length);

//eliminar el inicio
console.log(producto.trimStart()); // elimina los espacios en blanco al inicio
console.log(producto.trimEnd()); // elimina los espacios en blanco al final

// Los metodos en javascriot se oueden encadenar, es decir, colocarse uno junto al otro
console.log(producto.trimStart().trimEnd()); // cortar en ambas direcciones

//un metodo (que ya tiene rato) es trim que hace lo mismo que los dos anteriores
console.log(producto.trim().length); 