// Arrow functions en metodos de propiedad


const reproductor = {
    cancion:'',
    reproducir: id => console.log (`reproduciendo cancion id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion con id: ${id}`),
    crearPlaylist: nombre => console.log(`creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    // Tambien exisren los set y get si tienen experiencia con esos terminos y si no set es para agregar un valor y get es para obtenerlo

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`agregando ${cancion}`)
    },
    get pbtenerCancion(){
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

//tambien los metodos pueden quedarse por fuera
//reproductor.borrar = function(id) {

//}
reproductor.borrar(40);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');



