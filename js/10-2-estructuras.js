// algunas veces vas a desear revisar si se cumple mas de una condicion
let rol = 'ADMINISTRADOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Acceso a ver contenido');
} else {
    console.log('No tienes acceso');
}

// el problema del else if es que si agregas multiples llegan a ser complejos de leer

let rol2 = 'ADMIN';

if (rol2 === 'ADMIN') {
    console.log('Acceso a todo el sistema');
} else if (rol2 === 'EDITOR') {
    console.log('Acceso a ver contenido');
} else if (rol2 === 'AUTOR') {
    console.log('Solo puede registrar usuarios');
} else {
    console.log('Eres visitante No tienes acceso por pobre');
}

//para ello llegan a ser mas utiles las estructuras switch


let tipoCarro = 'SEDAN';

if (tipoCarro === 'SEDAN') {
    console.log('Es un carro familiar, ideal para la ciudad y viajes cortos');
} else if (tipoCarro === 'DEPORTIVO') {
    console.log('Es un carro rapido y elegante perfecto para los amantes de la velocidad');
} else if (tipoCarro === 'CAMIONETA') {
    console.log('Es un carro grande, perfecto para viajes largos y transportar muchas cosas');
} else {
    console.log('Tipo de carro desconocido, no tenemos información sobre este tipo de vehículo');
}


