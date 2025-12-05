// si recuerdas una variable con const una vez que es definida no puede reasignarse su valor


// const producto ="monitor";
// producto = "television"; // esto dara un error
// console.log(producto);

// en el caso de los objetos veremos que tienen un comportamiento diferente,
// ya que sus propiedades si se pueden reescribir.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

console.log(producto);

producto.disponible = false;

console.log(producto);

//puedes ver que lo pudimos modificar, a pesar de ser un const 