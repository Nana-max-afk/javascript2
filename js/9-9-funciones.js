// lo que son los metodos de propiedad es decir son funciones con una sintaxis similar a las de un metodo

// tambien llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones 

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion id ${id}`);
    },
    pausar: function(){
        console.log('pausando....');
    },
    borrar: function(id){
        console.log(`Borrando cancion con id: ${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los metodos pueden quedarse por fuera
// reproductor.borrar = function(id) {

//}
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


const toyota = {
    avanzar: function(placa) {
        console.log(`El carro esta avanzando${placa}`);
    },
    frenar: function(placa){
        console.log(`el carro freno bruscamente.... ${placa}`);
    },
    cruzarIzquierda: function(placa){
        console.log(`el carro cruza a la izquierda${placa}`)
    },
    cruzarDerecha: function(placa) {
        console.log(`el carro cruza a la derecha${placa}`)
    },
    retroceso: function(placa){
        console.log(`el carro se devuelve${placa}`)
    },
    chocar: function(H19274L3){
        console.log(`El carro choco... como pudiste chocar un carro que ni existe?${H19274L3}`)
    }
}

toyota.avanzar( 9273);
toyota.frenar( 9273);
toyota.chocar( 9273);