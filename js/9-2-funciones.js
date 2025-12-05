//Hoisting

// ademas de las muy notables diferencias en sintaxis, quiero mostrarte las diferencias entre ambas
//si llamamos la funcion antes de declararla el function expression va a funcionar bien
//mientras que el otro nos va a marcar un error

sumar();
function sumar(){
    console.log(2 + 2);
}

sumar2();
function sumar(){
    console.log(3 + 3)
}

// eso pasa porque javascript se ejecuta digamos que en w vueltas eso se le conoce como hoisting
//la primera vuelta registra todas las funciones y determina las variables esta etapa se le llama creacion

//la segunda pasada es la que executa tu codigo se llama ejecucion

//por lo tanto el primer codigo funciona porque function se registra primero y despues se ejecuta el codigo

// el segundo no funciona porque si bien es una funcion no es declarada como0 tal lo ve mas bien como una variable

//esto se le conoce como hosting que basicamente son esas 2 etapas

// basicamente tu codigo se ejecuta asi


sumar2(); // a estas alturas es undefined
sumar2=function(){
    console.log(3 + 3)
}