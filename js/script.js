// console.log("Se ejecuto script.js")


let buyBtn = document.querySelector("#buy_button");
let buyBtntxt = document.querySelector("#buy_button > span");

buyBtntxt.textContent = "Not abalilable tickets";

// <!-- Agregar atributos boton bloqueado -->
// <!-- cursor-not-allowed, disabled -->
buyBtn.classList.add("cursor-not-allowed", "disabled");

// Eliminar una clase específica del div
// miDiv.classList.remove("clase-a");
function btnDisable(){
   buyBtn.classList.remove("cursor-not-allowed", "disabled");
   if (buyBtn.classList.contains("bg-primary")) {
     buyBtn.classList.remove("bg-primary");
     buyBtn.classList.add("bg-green-900");
   }
}

// <!-- Cambiar valores de los atributos -->
// bg-primary > bg-gray-300
// <!-- text-dark > text-gray-600
// dark:hover:secondary > dark:hover:bg-gray-300  -->


// <!-- Eliminar atributos -->
// <!-- onclick="getTickets('Viernes 10 de Junio 2024', true)" -->


// Objeto con los atributos y sus valores deseados
var atributos = {
    "href": "https://www.ejemplo.com",
    "target": "_blank",
    "title": "Enlace externo"
};

// Iterar sobre el objeto de atributos
for (var key in atributos) {
    // Verificar si el atributo ya existe en el elemento
    if (miEnlace.hasAttribute(key)) {
        // Si existe, modificar su valor
        miEnlace.setAttribute(key, atributos[key]);
    } else {
        // Si no existe, agregar el atributo con su valor
        miEnlace.setAttribute(key, atributos[key]);
    }
}
