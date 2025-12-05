// veamos algunos metodos existentes en los strings o cadenas de texto:
const producto = "Monitor de 20 pulgadas";
const precio = "30 USD";

console.log(producto.length); // length nos muestra la cantidad de caracteres que tiene el string

// IndexOf:
console.log(producto.indexOf("pulgadas")); // nos muestra la posicion donde inicia la palabra "pulgadas"
console.log(producto.indexOf("tablet")); // si no encuentra la palabra, devuelve -1

// includes:
console.log(producto.includes("Monitor")); // devuelve true si la palabra se encuentra en el string
console.log(producto.includes("tablet")); // devuelve false si la palabra no se encuentra en el string

console.log(producto.toLowerCase); // convierte el string a minusculas
console.log(producto.toUpperCase); // convierte el string a mayusculas

const saludo = "Hola mi nombre es Carlos";
console.log(saludo.length);
console.log(saludo.indexOf("Carlos"));
console.log(saludo.includes("Navidad"));
console.log(saludo.includes("nombre"));
// imprimir 3 variables en una sola solamente hay que poner coma y se sigue