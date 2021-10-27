const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const controllerUsuarios = require('./api/usuarios/controller');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// INICIAR LA CONFIGURACIÓN.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('tiny'));

// CARPETA PÚBLICA
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

// CARGAR EL INDEX.HTML
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+'./index.html'));
});

// PATH RESOURCES.
app.use("/usuarios", controllerUsuarios);

app.listen(port, function(){
    console.log("Api ejecutándose en el puerto " + port);
});