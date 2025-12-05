//como se comunican las funciones entre si

//tus funciones se van a comunicar en lugar de tener la gran funcion con 800
//lineas es recomendable dividirla en pequeñas partes, realizan una operacion y se van hacia la otra funcion..

iniciarApp();

function iniciarApp(){
    console.log("iniciando App...");
    segundaFuncion();
}


function segundaFuncion(){
    console.log('desde la segunda funcion...');
    usuarioAutenticado();
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario...");
    console.log(`Usuario autenticado con exito ${usuario}`)
}
