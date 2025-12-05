//veamos como unir 2 objetos esto llega a ser muy comun
// ya que algunas veces en una base de datos obtienes el ID del cliente y
// tambien tiene los clientes que pertenecen a ese ID y te gustaria unirlos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: "1kg",
    marca: "changchun",
}

//una forma de hacerlo es con el object metod llamado assign

const resultado=Object.assign(producto,medidas);

// otra forma de hacerlo que se considera mas moderna es con
// el spread operator o rest operator

console.log(resultado);


const pais = {
    nombre: "Mexico",
    poblacion: 126000000,
    continente: "America",}
;

const ciudad = {
    ciudad: "ciudad de mexico",
}

const informacionPais = Object.assign(pais,ciudad,);

console.log(informacionPais);