// console.log("Se elecuto tours.js");

// let identidad = prompt('Como te identificas?\n1 - Femenino.\n2 - Masculino.\n3 - Prefiero no decirlo.');
let identidad = 3;
// let nombre = prompt('Ingrese su nombre').toLowerCase();
let nombre = "Pepe Argento";
// let saludo = `Hola ${nombre.toUpperCase()}, como estas! Bienvenid@ a tours!`;
let edad;

// alert(saludo);

const welcome_block = document.getElementById('welcome');
let welcome_txt = 'Bienvenid@';
let ticketIcon = document.getElementById('ticket_icon');
const buyButtons = document.querySelectorAll("#buyButton");

// if (nombre.length < 2) {
//     nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?");
// }

// Ejercicios 1. Say your Name Remix

if(identidad != 3) {
    identidad == 1 ? welcome_txt = 'Bienvenida' : welcome_txt = 'Bienvenido';
}

// welcome_block.textContent = `Hola ${nombre.toUpperCase()}, como estas! ${welcome_txt} a tours!`;

while (nombre.length < 3) {
  nombre = prompt("Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras");
}

ticketIcon.classList.remove('text-gray-700');
ticketIcon.classList.add('text-primary', 'rotar');
welcome_block.innerHTML = `Hola <mark>${nombre.toUpperCase()}</mark> como estas! ${welcome_txt} a tours!`;

// Manipular Varios Elementos - SweetAlert

const buyBtns = document.querySelectorAll("[data-info='user-welcome'] > button")

function getTickets(place, ticket){

  if (ticket) {
    swal("Sold!", "You have tickets to the " + place + " concert", "success");
    // swal({
    //   // title: place,
    //   text: "You clicked the button!",
    //   icon: "success",
    //   button: "Aww yiss!",
    // });
    // swal({ title: place }, "success");
  } else {
    swal(
      "Oh no!",
      "You are outta luck!, there are no more tickets for " + place,
      "error"
    );
    // swal("Good job!", "You clicked the button!", "error");
    // swal({
    //   // title: place,
    //   text: "You clicked the button!",
    //   icon: "error",
    //   button: "Aww yiss!",
    // });
  }
}