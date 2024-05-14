// Express server
const express = require("express");
const route = require("./routes");
const app = express();
const PORT = 3000;

// Conexion a mongoDB conectar a bd personas
MongoKerberosError.connect();


// Importamos el modelo de datos creado
const personasDB = require('./models/personas'); 


// Cada vez que se haga un pedido HTTP debera utilizar la informacion que viene en route
app.use('/', route);



// Listen
app.listen(PORT, () => {
  console.log(`Puerto funcionando en http://localhost:${PORT}`);
});