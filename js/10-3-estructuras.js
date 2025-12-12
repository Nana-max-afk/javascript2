// cuando tienes multiples condiciones por revisar una forma facil de leerlo es con switch

let metodoPago = 'TARJETA';

switch (metodoPago) {
    case 'EFECTIVO':
        console.log(`Pagaste con ${metodoPago} `);
        break;
    case 'TARJETA':
        console.log(`Pagaste con ${metodoPago}, tienes un recargo del 5%`);
        break;
    case 'CHEQUE':
        console.log(`Pagaste con ${metodoPago}, debes esperar 72 horas para la confirmacion de tu cheque`);
        break; 
    default:
        console.log('Aun no has pagado');
        break;
}

//los switch tambien pueden ejecutar funciones
// no solamente console.logs y tambien pueden tener 2 condiciones en un mismo if

const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Puedes comprar el producto');
} else {
    console.log('No puedes comprar el producto');
}

//cambiar true o false para ver los resultados


// ahora si quieres darke mensajes de error mas detallados a tus usuarios puedes revisar o negar una condicion

if (usuario && puedePagar) {
    console.log('Puedes comprar el producto');
} else if (!usuario) {
    console.log('Debes iniciar sesion para realizar la compra');
} else if (!puedePagar) {
    console.log('Fondos insuficientes, por favor recarga tu cuenta');
} else {
    console.log('Hubo un error desconocido');
}

