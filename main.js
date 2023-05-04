//console.log("https://api.nasa.gov/planetary/apod?api_key=f3Z7FJLTQgj2vWXyWVki2KaeGURpf26RmZGdm5W6&start_date=2021-01-01&end_date=2023-01-01&thumbs");
import mostrarDatos from './components/mostrarDatos.js';

mostrarDatos.datos();

















/* Extraemos la fecha actual */
const input = document.querySelector("input");
const fechaAcual = new Date().toISOString().split('T')[0];
input.setAttribute('max', fechaAcual);