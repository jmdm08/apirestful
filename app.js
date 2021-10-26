const express = require('express');
const bodyParser = require('body-parser');
const controllerUsuarios = require('./api/usuarios/controller');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// INICIAR LA CONFIGURACIÓN.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// PATH RESOURCES.
app.use("/usuarios", controllerUsuarios);

app.listen(port, function(){
    console.log("Api ejecutándose en el puerto " + port);
});