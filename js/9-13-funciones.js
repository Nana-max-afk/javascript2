
const carro = {
    marca: ' honda',
    encender: placa => console.log(`Encendiendo el carro... ${placa}`),
    apagar: placa => console.log(`Apagando el carro... ${placa}`),
    acelerar: velocidad => console.log(`Acelerando a ${velocidad} km/h`),
    frenar: placa => console.log(`Frenando... ${placa}`),
    tocarBocina: placa => console.log(`Piiiiii! ${placa}`),
    agregarPasajero: nombre => console.log(`Agregando pasajero ${nombre}`),

    
    set nuevaMarca(marca) {
        this.marca = marca;
        console.log(`marca establecida: ${marca}`);
    },
    get obtenerMarca(){
        console.log(`${this.marca}`)
    }
}

carro.encender('ABC123');
carro.acelerar(80);
carro.tocarBocina('ABC123');
carro.agregarPasajero('jhonas');
carro.nuevaMarca = 'Toyota';
carro.obtenerMarca;
