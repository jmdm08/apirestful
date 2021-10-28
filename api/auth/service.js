const modeloAuth = require('./model');
const bcrypt = require('bcrypt');

async function crearNuevoUsuario(datos){
    let contrasena = datos.contrasena;
    let contrasenaEncriptada = bcrypt.hashSync(contrasena, 5);
    datos.contrasena = contrasenaEncriptada;
    let resultado = await modeloAuth.insertOne(datos);
    return resultado;
}

async function validarLogin(datos){
    /*
        DESDE LA BASE DE DATOS OBTENGO LA SIGUIENTE ESTRUCTURA
        [
            {
                id
                usuario
                contrasena
            }
        ]
    */
    let user = await modeloAuth.getUserByUsername(datos.usuario);
    let contrasenaEncriptada = user[0].contrasena;
    let contrasena = datos.contrasena;
    let esValida = bcrypt.compareSync(contrasena, contrasenaEncriptada);
    let resultado = {};
    if(esValida){
        resultado.mensaje = "Inicio de sesión correcto";
        resultado.iniciarSesion = true;
    }
    else{
        resultado.mensaje = "Contraseña incorrecta";
        resultado.iniciarSesion = false;
    }
    return resultado;
}

module.exports.crearNuevoUsuario = crearNuevoUsuario;
module.exports.validarLogin = validarLogin;


