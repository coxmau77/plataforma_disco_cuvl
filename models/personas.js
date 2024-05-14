const mongoose = require("mongoose");
// Modelos de personas y tipos de datos contiene la coleccion personas

// {
//     "_id":{"$oid":"663c08bc5233a7bf664fa112"},
//     "nombre":"Etta",
//     "apellido":"Lightwing",
//     "email":"elightwing4@netlog.com",
//     "genero":"F",
//     "idioma":"Fijian",
//     "titulo":"Rev",
//     "talle":"3XL",
//     "edad":{"$numberInt":"35"},
//     "fec_nac":"14/11/2002"
// }

// modelo persona
const Schema = mongoose.Schema;

// Creaciion de un schema con estructura de datos que tendran los documentos de la coleccion persona
// let persona = new Schema({
//   //   nombre: "Etta",
//   //     "apellido":"Lightwing",
//   //     "email":"elightwing4@netlog.com",
//   //     "genero":"F",
//   //     "idioma":"Fijian",
//   //     "titulo":"Rev",
//   //     "talle":"3XL",
//   //     "edad":{"$numberInt":"35"},
//   //     "fec_nac":"14/11/2002"
//   nombre: String,
// //   completar los demas datos ...
//     // it_alive: {
//         // tipo booleano
//     //     type: Boolean,
//     //     default: true
//     // }
// });

let persona = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  genero: String,
  idioma: String,
  titulo: String,
  talle: String,
  edad: Number,
  fec_nac: String,
});

const userData = new Schema({
    "_id":{"$oid":"6642ace71f5a60418ba4e346"},
    "id":{"$numberInt":"1"},
    "name":"Leanne Graham",
    "username":"Bret",
    "email":"Sincere@april.biz",
    "address":{
        "street":"Kulas Light",
        "suite":"Apt. 556",
        "city":"Gwenborough",
        "zipcode":"92998-3874",
        "geo":{
            "lat":"-37.3159",
            "lng":"81.1496"
        }
    },
    "phone":"1-770-736-8031 x56442",
    "website":"hildegard.org",
    "company":{
        "name":"Romaguera-Crona",
        "catchPhrase":"Multi-layered client-server neural-net",
        "bs":"harness real-time e-markets"
    },
    "image":"/portraits/men/1.jpg"
});

// Las conexiones a mongoDB las identifica en minusculas y en plural
module.exports = mongoose.model("personas", persona);
module.exports = mongoose.model("users-data", userData); // Probar la conexion a esta BD