const express = require('express');
const routes = express.Router();
const serviceUsuarios = require("./service");

/*
    GET -> OBTENER LOS USUARIOS. - OK
    GET -> OBTENER UN USUARIO POR EL ID. - OK
    POST -> CREAR UN USUARIO.
    PUT -> PARA ACTUALIZAR UN USUARIO.
    DELETE -> ELIMINAR EL USUARIO.
*/

/**
 * LISTAR TODAS LAS PERSONAS
*/
routes.get("/listar", async function(req, res){
    let personas = await serviceUsuarios.findAll();
    res.send(personas);
});

/**
 * LISTAR UNA SOLA PERSONA
 */
routes.get("/listar/:id", async function(req, res){
    let id = req.params.id;
    let persona = await serviceUsuarios.findOneById(id);
    res.send(persona);
});

/**
 * CREAR UNA PERSONA
 */
routes.post("/crear", async function(req, res){
    let datos = req.body;
    let resultado = await serviceUsuarios.insertOne(datos);
    res.send(resultado);
});

/**
 * EDITAR UNA PERSONA 
 */
routes.put("/editar/:id", async function(req, res){
    let id = req.params.id;
    let datos = req.body;
    let resultado = await serviceUsuarios.updateOneById(id, datos);
    res.send(resultado);
});

/**
 * ELIMINAR UNA PERSONA
 */
routes.delete("/eliminar", async function(req, res){
    let id = req.query.id;
    let resultado = await serviceUsuarios.deleteOne(id);
    res.send(resultado);
});

module.exports = routes;