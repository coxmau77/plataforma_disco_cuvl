// console.log("Se elecuto tours.js");

let identidad = prompt('Como te identificas?\n1 - Femenino.\n2 - Masculino.\n3 - Prefiero no decirlo.');
let nombre = prompt('Ingrese su nombre').toLowerCase();
// let saludo = `Hola ${nombre.toUpperCase()}, como estas! Bienvenid@ a tours!`;

// alert(saludo);

const welcome_block = document.getElementById('welcome');
const welcome_metaData = welcome_block.getAttribute('data-info');
let welcome_txt = 'Bienvenid@';

console.log(welcome_metaData);

if (nombre.length < 2) {
    nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
}

if(identidad != 3) {
    identidad == 1 ? welcome_txt = 'Bienvenida' : welcome_txt = 'Bienvenido';
}

// welcome_block.textContent = `Hola ${nombre.toUpperCase()}, como estas! ${welcome_txt} a tours!`;
welcome_block.innerHTML = `Hola <mark>${nombre.toUpperCase()}</mark> como estas! ${welcome_txt} a tours!`;

