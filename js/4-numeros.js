//una nota muy importante es que en la consola los numeros se muestran de diferente color 
// cuando es numero que cuando es un string que representa un numero

const numero1 = 20;
const numero2 = "20";
console.log(numero1);
console.log(numero2);
//crear numeros

const numero3 = 30;
const numero4 = 20.5;
const numero5 = -15;
const numero6 = .102;
const numero7 = -0.123;


// no es muy comun usar esta forma de crear numeros
const numero8 = new Number(80); 
console.log(numero8);

//suma
console.log(numero3 + numero4); // va a sumar los dos numeros
//resta
console.log(numero3 - numero4); // va a restar los dos numeros
//multiplicacion
console.log(numero3 * numero4); // va a multiplicar los dos numeros
//division
console.log(numero3 / numero4); // va a dividir los dos numeros
//modulo
console.log(numero3 % numero4); // va a mostrar el residuo de la division entre los dos numeros

let resultado;

//pi
resultado = Math.PI;
console.log(resultado);
//redondear
resultado = Math.round(2.8);
console.log(resultado);
//redondear hacia arriba
resultado = Math.ceil(2.1);
console.log(resultado);
//redondear hacia abajo
resultado = Math.floor(2.9);
console.log(resultado);
//raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
//valor absoluto
resultado = Math.abs(-500);
console.log(resultado);
//potencia
resultado = Math.pow(8, 3);
console.log(resultado);
//minimo
resultado = Math.min(3,5,1,8,2,-10);   


//el orden en el que se ejecutan las operaciones es igual que en matematicas

let resultado2;
// el orden de las operaciones
resultado2 = (20 + 30) * 2;
resultado2 = 20 + 30 * 2;

//el 20% de descuento en un carrito de compras
resultado2 = (20 + 30 + 40 + 50 + 60) * .20;
console.log(resultado2);

//veamos como ir incrementando un valor de 1 en 1 o en determinada cantidad
let puntaje = 5;
console.log(puntaje);
puntaje++; // incrementa de 1 en 1
console.log(puntaje);
puntaje--; // decrementa de 1 en 1
console.log(puntaje);
++puntaje; // incrementa de 1 en 1
console.log(puntaje);
--puntaje; // decrementa de 1 en 1
console.log(puntaje);

puntaje += 3; // incrementa de 3 en 3
console.log(puntaje);
puntaje -= 2; // decrementa de 2 en 2
console.log(puntaje);

//veamos un par de funciones para convertir strings a numeros

const numero10 = "20";
const numero11 = "30.5";
const numero12 = "quince";
const numero13 = 40;

console.log(numero10)

//convertir de strings a nmeros flotantes o enteros
console.log( Number.parseInt(numero10) ); // convertir string a numero
console.log( Number.parseFloat(numero11) ); // convertir string a numero decimal
console.log( Number.parseInt(numero12) ); // convertir string a numero da NaN (not a number)

// Revisar si es un numero es entero
console.log( Number.isInteger(numero13) ); // true
console.log( Number.isInteger(numero11) ); // false

//convertir de strings a numero
console.log(numero13.toString() ); // convierte numero a string
