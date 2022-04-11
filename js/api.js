import * as UI from './interfaz.js';

export class API {
     constructor(artista, cancion) {
          this.artista = artista;
          this.cancion = cancion;

          this.consultarAPI();
     }

     consultarAPI() {
         const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
          
            fetch(url)
               .then( respuesta => respuesta.json())
               .then(resultado => {
                    if(resultado.lyrics) {
                         // La canción Existe
                         const { lyrics } = resultado;
                         UI.divResultado.textContent = lyrics;
                         UI.headingResultado.textContent =`Letra de la cancion: ${this.cancion} de ${this.artista}`;
                    } else {
                         // La canción no existe
                         UI.divMensajes.textContent = 'La canción No existe, prueba con otra búsqueda';
                         UI.divMensajes.classList.add('error');
                         
                         setTimeout(() => {
                              UI.divMensajes.innerHTML = '';
                              UI.divMensajes.classList.remove('error');
                              UI.formularioBuscar.reset();
                         }, 3000);
                    }
               })
               .catch(error => console.log(error))

     }
}
