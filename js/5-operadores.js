// sobre operadores, previamente ya vimos que existen operadores de
//suma, resta, multiplicacion, pero existen unos
//muy utiles a comparacion

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//operador mayor a 
console.log(numero1 > numero3);
console.log(numero3 > numero1);

//operador menor que
console.log(numero1 < numero3);

const numero4 = 20;
const numero5 = "30";
const numero6 = 20;

// revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero4); //true
console.log(numero1 == numero2); //true

//typeof
console.log(typeof numero1);
console.log(typeof numero2);

//operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2);

//diferente a

console.log(numero1 != numero3); 
console.log(numero1 != numero4); 
console.log(numero1 !== numero2);

//Null y Undefined

// En javascrip existen diferentes tipos de datos primitivos
// a los que hemos visto ademas de string y number
// se tienen booleans que son true o false, y existen
// un par mas llamados undefined y null

//veamos un ejemplo de undefined
let numero; 

console.log(numero); // La variable esta definida pero su valor o no, por lo tanto es undefined
console.log(typeof numero); 

// En el caso de null es mas bien asignarlo

let numero7 = null;
console.log(numero2);
console.log(typeof numero7); // ahora esto nos dira que es un objeto, la especificacion de javascript dice que es un bug

//comparado con null y undefined - comparar un valor null y undefined puede ser de las cosas mas confusas en javascript
console.log(numero == numero7);

// puedes ver que el resultado es true, a pesar de que numero no tiene un valor, eso usualmente confunde a las personas

//para ello llega a ser muy util el comparador estricto
console.log(numero === numero7); // aqui si nos dice que no son iguales

// de esta forma no comparamos un falso positivo y evitamos errores en nuestro codigo

