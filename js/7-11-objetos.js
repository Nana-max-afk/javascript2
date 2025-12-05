/// this se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento

// aun no hemos visto funciones

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        return`El producto es: ${this.nombre} y su precio es de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());

const carrera = {
    nombre: "Ingenieria en Sistemas",
    profesor: "Jose Rodriguez",
    promocion: "xx",
    graduadosNext: function() {
        return `El Padrino de promocion ${this.promocion} de la carrera de ${this.nombre} es el profesor ${this.profesor}`;
    } 
}
console.log(carrera.graduadosNext());