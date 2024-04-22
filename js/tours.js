// console.log("Se elecuto tours.js");

let identidad = prompt('Como te identificas?\n1 - Femenino.\n2 - Masculino.\n3 - Prefiero no decirlo.');
// identidad = 3;

let nombre = prompt('Ingrese su nombre').toLowerCase();
// let nombre = "Pepe Argento";

let edad = parseInt(prompt(`${nombre}! por favor ingresa tu edad.`));
// let edad = 6;

let buyBtn = document.querySelector(".buy-button");

let buyBtntxt = document.querySelector(".buy-button > span");

const welcome_block = document.getElementById('welcome');
let welcome_txt = 'Bienvenid@';

let ticketIcon = document.getElementById('ticket_icon');
const buyButtons = document.querySelectorAll(".buy-button");

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

// Si la edad es > 18 ejecutar funcion para habilitar los botones
if (edad >= 18) {
    activarBoton();
} else {
  // Eviar el mensaje que no puede comprar porque es menor a 18
  // swal("Good job!", "You clicked the button!", "error");
  swal({
    // title: place,
    text: `Hola ${nombre}, tienes ${edad} años, no tienes autorizacion para comprar tickets`,
    icon: "error",
    button: "Entendido",
  })
  
  desactivarBoton();
}

ticketIcon.classList.remove('text-gray-700');
ticketIcon.classList.add('text-primary', 'rotar');
welcome_block.innerHTML = `Hola <mark>${nombre.toUpperCase()}</mark> como estas! ${welcome_txt} a tours!`;




// Manipular Varios Elementos - SweetAlert
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

function activarBoton() {
  // <!-- Agregar atributos boton bloqueado -->
  // <!-- cursor-not-allowed, disabled -->
  for (let index = 0; index < buyButtons.length; index++) {
      
      buyButtons[index].removeAttribute("disabled");;
      buyButtons[index].classList.remove("cursor-not-allowed", "disabled");
      buyButtons[index].classList.add("btn-enabled");
      buyButtons[index].textContent = "Comprar tickets ahora";
  }
  console.log(buyButtons);
}

// miDiv.classList.remove("clase-a");
function desactivarBoton(){
  for (let index = 0; index < buyButtons.length; index++) {
    buyButtons[index].classList.remove("btn-enabled");
    buyButtons[index].setAttribute("disabled", "");
    // buyButtons[index].classList.add("btn-enabled");
    buyButtons[index].textContent = "Tickes NO disponibles";  
  }
}