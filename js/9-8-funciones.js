// funciones que  retornan valores

// actualmente hemos tenido funciones que envian datos a la consola
// ya cuando veamos la parte del DOM algunas funciones van a validar formularios
// y seguramente ejecutaran todo el codigo ahi, pero tambien tendremos funciones que retornan valores

function sumar (a, b) {
    return a + b;
}

const resultado= sumar (1,2);

console.log (resultado);


// ejemplo mas avanzado
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return 1.16 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);


const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);



let promedio = 0;

function agregarNotas(Notas){
    return Notas += Notas
}

function calcularPromedio(Notas){
    return Notas / 10;
}

Notas = agregarNotas(15)
Notas = agregarNotas(10)
Notas = agregarNotas(13)
console.log(Notas);

const totalPromedio = calcularPromedio(total);
console.log(`El promedio total del estudiante es de ${totalPromedio}`);