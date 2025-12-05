// veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        peso: "1kg",
        marca: "Samsung",
    }
}

const { nombre, informacion: { peso, marca } } = producto;

console.log(producto);
console.log(nombre);
console.log(peso);
console.log(marca);

const telefono = {
    nombre: "Xiaomi Redmi 14",
    precio: 250,
    disponible: true,
    caracteristicas: {
        color:"verde menta",
        almacenamiento:"128GB",
        camara:"48MP",
        bateria:"5000mAh",
        ram:"6GB",
        procesador:"MediaTek Helio G99-Ultra",}
    }

const { nombre: nombreTel, caracteristicas: { color, almacenamiento, camara, bateria, ram, procesador } } = telefono;

console.log(telefono);
console.log(nombreTel);
console.log(color);
console.log(almacenamiento);
console.log(camara);
console.log(bateria);
console.log(ram);
console.log(procesador);