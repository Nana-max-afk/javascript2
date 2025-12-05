// un objeto puede contener cualquier tipo de dato dentro de el 
// incluso puede tener otros objetos dentro de el : esto se le conoce como objetos anidados


const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
            peso: "1kg",
            marca: "samsung",
    }
    }

    console.log(producto); //puede ver que tenemos un objeto dentro de un objeto

// de nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

    console.log(producto.informacion);


    // actividad

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
            procesador:"MediaTek Helio G99-Ultra",
        }
    }

    console.log(telefono);