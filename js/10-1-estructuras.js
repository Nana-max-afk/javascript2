const puntaje = '80';

if (puntaje != 85) {
    console.log('si es diferente');
} else {
    console.log('No no es diferente');
}

if (puntaje !== 80) {
    console.log('si es diferente');
} else {
    console.log('No no es diferente');
}

if (puntaje === 1000) {
    console.log('si es igual');
} else {
    console.log('No no es igual');
}

let dinero = 1000;
let totalCarrito = 800;

if (dinero >= totalCarrito) {
    console.log('Pago Realizado con exito');
} else {
    console.log('fondos insuficientes');
}

//tambien puede ser sin llaves

let dinero2 = 1000;
let totalCarrito2 = 800;

if (dinero2 < totalCarrito2)
    console.log('Pago Realizado con exito');
else
    console.log('fondos insuficientes');