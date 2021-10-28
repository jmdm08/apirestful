const conexion = require('../../database/conection');

function insertOne(datos){
    const sql = "INSERT INTO usuarios(usuario, contrasena) VALUES (?,?)";
    let arrayDatos = [datos.usuario,datos.contrasena];
    return conexion.getConnection()
        .then(function(con){
            return con.query(sql,arrayDatos)
                .then(function(resultado){
                    return resultado;
                })
        })
        .catch(function(error){
            console.log(error);
        })
}

function getUserByUsername(usuario){
    const sql = "SELECT * FROM usuarios WHERE usuario = ?";
    let arrayDatos = [usuario];
    return conexion.getConnection()
        .then(function(con){
            return con.query(sql,arrayDatos)
                .then(function(resultado){
                    return resultado;
                })
        })
        .catch(function(error){
            console.log(error);
        })
}

module.exports.insertOne = insertOne;
module.exports.getUserByUsername = getUserByUsername;