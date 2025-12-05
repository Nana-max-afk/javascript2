// veamos algunas operaciones utiles en los arreglos

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

// si quieres saber cuantos elementos hay en un arreglo puedes utilizar esta propiedad

console.log(meses.length);

// ahora, como acceder a un arreglo, pero si este arreglo tuviera 40 elementos seria muy complicado ir 1 por 1
// si tienes un carrito de compras y agregas o quitas elementos del carrito ese arreglo crece de forma dinamica
// entonces como acceder a todos los elementos? con algo llamado un iterador y en javascript hay varios
// veamos el for que existe en diferentes lenguajes

for (let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}


const materias = ["matematicas", "ingles", "biologia", "quimica", "fisica", "educacion fisica", "labor social", "computacion"];

console.log(materias.length);

for (let i = 0; i < materias.length; i++){
    console.log(materias[i])
}
