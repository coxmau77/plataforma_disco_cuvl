const express = require("express");
const route = express.Router();

route.get("/", (request, response) => {
  response.status(200).send("Ruta principal");
});

// Crear la ruta para acceder a todas las familias .find()
route.get('/personas',(request, response) => {
  
  // obtener personas (coleccion de mondoDB)
  // const document = await ...
});

module.exports = route;