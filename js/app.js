import { API } from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit', (e) => {
     e.preventDefault();

     // Obtener datos del formulario
     const artista = document.querySelector('#artista').value;
     const cancion = document.querySelector('#cancion').value;

     if(artista === '' || cancion === '') {
          // El usuario deja los campos vacios, mostrar error
          UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
          UI.divMensajes.classList.add('error');

          setTimeout(() => {
               UI.divMensajes.textContent = '';
               UI.divMensajes.classList.remove('error');
          }, 3000);

          return;

     } 
     const busqueda = new API(artista, cancion);
     busqueda.consultarAPI();
    });


