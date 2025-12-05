let n1=5;
let n2=10;
let suma=n1+n2;
let resta=n1-n2;
let multiplicacion=n1*n2;
let division=n1/n2;
let modulo=n1%n2;



console.log("La suma de :"+ n1 + " y " + n2 + " es igual a "+suma);
console.log("La resta de :"+ n1 + " y " + n2 + " es igual a "+resta);
console.log("La multiplicacion de :"+ n1 + " y " + n2 + " es igual a "+multiplicacion);
console.log("La division de :"+ n1 + " y " + n2 + " es igual a "+division);
console.log(" El modulo de :"+ n1 + " y " + n2 + " es igual a "+modulo);


console.log(`La suma de ${n1} y ${n2} es igual a ${suma}`); // TEMPLATE STRINGS O PLANTILLAS DE TEXTO
console.log(`La resta de ${n1} y ${n2} es igual a ${resta}`); 
console.log(`La multiplicacion de ${n1} y ${n2} es igual a ${multiplicacion}`); 
console.log(`La division de ${n1} y ${n2} es igual a ${division}`);
console.log(`El modulo de ${n1} y ${n2} es igual a ${modulo}`);

alert("soy estudiante de programacion web");
alert("y voy a ser el mejor programador del mundo");
/*COMO INICIALIZAR MULTIPLES VARIABLES*/
let categoria="programacion web",
    curso="javascript",
    nivel="basico";

console.log(categoria);
console.log(curso);
console.log(nivel);

/* Tambien se puede  inicializar una variable sin valor y asignarlo despues*/
let disponible;
disponible=true; /* BOLEANO QUE PUEDE SER TRUE O FALSE*/