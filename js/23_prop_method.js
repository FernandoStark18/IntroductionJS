// Métodos de propiedades
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    }, 
    pausar : function(){
        console.log('Pausando...');
    }, 
    crearPlaylist : function(name){
        console.log(`Rreando la Playlist: ${name}`);
    },
    reproducirPlaylist : function(name){
        console.log(`Reproduciendo la Playlist: ${name}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`La canción con el ID ${id} ha sido eliminada`);
}

reproductor.reproducir(284);
reproductor.pausar();
reproductor.borrarCancion(284);
reproductor.crearPlaylist('Grupopopopo Maaaaarrano');
reproductor.reproducirPlaylist('Grupopopopo Maaaaarrano');