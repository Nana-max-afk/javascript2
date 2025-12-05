const producto = {
    nombre: "Monitor",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    medida: "20 pulgadas",
}

// otra forma de hacerlo qye se considera mas moderna es con algo llamado 
// el spread operator o rest operator

const resultado = {...producto, ...medidas};
console.log(resultado);