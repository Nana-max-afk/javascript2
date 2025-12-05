// al igual que los objetos un arreglo se puede modificar a pesar de utilizar la palabra const

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];

meses[0] = "nuevo mes"

// tambien se puede añadir al final
meses[6]= "ultimo mes"

// al igual que los objetos en los arrays existen metodos que son bastante utiles
// asi que veamos algunos ejemplos

console.log(meses);