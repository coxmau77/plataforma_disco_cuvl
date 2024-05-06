const express = require("express");
const route = express.Router();

route.get("/", (request, response) => {
  response.status(200).send("Ruta principal");
});

module.exports = route;