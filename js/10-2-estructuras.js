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
    console.log(`Es un carro familiar, ideal y mas que perfecto para la ciudad y viajes cortos yo le recomendaria un ${Berlina}`);
} else if (tipoCarro === 'DEPORTIVO') {
    console.log(`Es un carro rapido y elegante perfecto para los amantes de la velocidad a mi eleccion para usted seria un ${porsche}`);
} else if (tipoCarro === 'CAMIONETA') {
    console.log('Mi eleccion y creo que es una bastante comun seria una toyota es un carro grande, perfecto para viajes largos y transportar muchas cosas');
} else {
    console.log('Este tipo de carro es desconocido para nuestro sistema, no tenemos información sobre este tipo de vehículo');
}


