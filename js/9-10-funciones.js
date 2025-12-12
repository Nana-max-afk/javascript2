//los arrow function son otra forma de declarar una funcion 

const aprendiendo = function () {
    console.log("aprendiendo javascript");
}

const aprendiendo2 = () => {
    console.log("aprendiendo javascript");
}

//una linea nho requiere llave

const suma = () => console.log("2+2");

//retornar un valor
const aprendiendo3 = () => "aprendiendo javascript";

console.log(aprendiendo());


//parametros de los arrows function

//parametros
const aprendiendo4 = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo4("JavaScript");

// si es un solo paramettro no ocupamos el parentesis
const aprendiendo5 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo5("JavaScript");

// multiples parametros si requieren parentesis
const aprendiendo6 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo4("JS", "ES");//invocando o llamando a la funcion

