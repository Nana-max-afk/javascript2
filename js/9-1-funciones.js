// las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones,
// que realizan una accion, una ventaja de las funciones es que permiten tener un codigo mas ordenado
//facil de mantener

// otra ventaja de las funciones es que son reutilizables puedes tener una funcion que valide un formulario
// y utilizarla en todos tus formularios puedes tener tambien una funcion que envie datos al servidor y 
//reutilizarla multiples veces

// existen 2 formas de crear funciones en javascript

//declaracion de funcion la expresion de la funcion utiliza la plabra reservada function
//seguida de un nombre y un parentesis en este parentesis se colocan los argumentos 

function sumar() {
    console.log(2 + 2);
}

// las funciones deben llamarse de otra forma en realidad no hacen mucho

sumar(); //se mande a llamar por su nombre seguido del parentesis


// expresion de funcion - este tipo de funciones se asigna como si fuera una variable
const sumar2 = function(){
    console.log(3 + 3);
}

sumar2(); //se manda llamar de la misma forma

// existe una 3ra forma de crear funciones que mas bien sonb metodos la veremos poco mas adelante