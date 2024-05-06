// Express server
const express = require("express");
const route = require("./routes");
const app = express();
const PORT = 3000;

// Cada vez que se haga un pedido HTTP debera utilizar la informacion que viene en route
app.use('/', route);


app.listen(3000, () => {
  console.log(`Puerto funcionando en http://localhost:${PORT}`);
});