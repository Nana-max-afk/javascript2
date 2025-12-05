//supongamos que creamos un carrito de compras desde la consola
// mas adelante lo haremos ya desde una interfaz web

const carrito = []; //nuestro carrito es un array

//añadir un elemento al carrito.... son objetos

const producto = {
    nombre: "monitor de 20 pulgadas",
    Precio: 500
}

const producto2= {
    nombre: "celular",
    precio: 500
}

carrito.push(producto);// es agregar un valor a nuestro arreglo
carrito.push(producto2);

//añadir al inicio del carrito

const producto3 = {
    nombre: "teclado",
    precio: 50
}

carrito.unshift(producto3);

//existen otras formas mas modernas de hacerlo... pero esta sintaxis aun se utiliza mucho

console.log(carrito);




const bolso = [];

const libro= {
    nombre: "biologia II",
    año: "3ro"
}

const libro2= {
    nombre:"matematicas IV",
    año: "4to"
}

const libro3= {
    nombre:"fisica V",
    año: "2do"
}

const libro4= {
    nombre:"ingles I",
    año: "5to"
} 

const carpeta={
    trabajo1:"Informe sobre las celulas eucariotas",
    trabajo2:"biografia de isaac newton",
    trabajo3:"mapa mental sobre los verbos auxiliares en ingles"
}

const libreta={
    materia1:"matematicas",
    materia2:"biologia",
    materia3:"ingles",
    materia4:"fisica"
}

bolso.push(libro);
bolso.push(libro2);
bolso.push(libro3);
bolso.push(libro4);
bolso.push(libreta);
bolso.push(carpeta);


console.log(bolso)