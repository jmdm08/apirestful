const express = require('express');
const controladorAuth = express.Router();
const serviciosAuth = require("./service");

/*
    POST -> CREAR USUARIO.
    GET/POST -> LOGIN.
*/
/**
 * CUERPO PETICIÓN
 *  ->JSON
 *      * usuario: valor
 *      * contrasena: valor
 */
controladorAuth.post("/registrar", async function(req, res){
    let datos = req.body;
    let resultado = await serviciosAuth.crearNuevoUsuario(datos);
    res.send(resultado);
});

controladorAuth.post("/login", async function(req, res){
    let datos = req.body;
    let resultado = await serviciosAuth.validarLogin(datos);
    res.send(resultado);
});

module.exports = controladorAuth;