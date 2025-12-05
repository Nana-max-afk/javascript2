//el tipo de dato boolean solo puede tener 2 valores, true o false, veamos como crearlos
const boolean1 = true;
const boolean2 = false;


console.log(boolean1);
console.log(boolean2);


console.log(typeof boolean1);

// tambien un boolean se puede crear con la palabra new
const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof boolean3); // aqui nos dira que es un objeto, ya que se creo con new

//existe otra forma de comparar si un valor es verdadero
// y es por medio de algo llamado un operador ternario

const bolean1=false;
const bolean2=false;

if(bolean1){
    console.log("el bolean1 es verdadero");
} else {
    console.log("el bolean1 es falso");
}

//el codigo anterior es facil de leer no? pero se puede simplificar un poco mas
console.log (bolean1 ? 'si es true' : 'no no es true');


const boolean4 = 5; // true
const boolean5 = 3; // false
console.log(boolean4);
console.log(boolean5);

// if (boolean4 > boolean5){
    //console.log("5 es mayor a 3 por lo tanto es true");
//} else (boolean5 > boolean4); {
    //console.log("5 no es mayor a 3 por lo tanto es false");
//}


const fechaNacimiento = 2007;

console.log(fechaNacimiento);

if (fechaNacimiento <= 2007){
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
