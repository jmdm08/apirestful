const conexion = require("../../database/conection");

function findAll(){
    // PREPARAR MUESTRA CONSULTA
    const sql = "SELECT * FROM personas";
    return conexion.getConnection()
        .then(function(con){
            return con.query(sql)
                .then(function(resultados){
                    return resultados;
                })
        })
        .catch(function(error){
            console.log(error);
        })
}

function findOneById(id){
    const sql = "SELECT * FROM personas WHERE id = ?";
    let arrayCondiciones = [id];
    return conexion.getConnection()
        .then(function(con){
            return con.query(sql,arrayCondiciones)
                .then(function(resultados){
                    return resultados;
                })        
        })
        .catch(function(error){
            console.log(error)
        })
}

function insertOne(datos){
    const sql = "INSERT INTO personas " + 
                " (nombres, apellidos, numero_identificacion, id_tipo_identificacion, id_profesion)" +
                " VALUES (?,?,?,?,?)";
    
    let arrayDatos = [datos.nombres, datos.apellidos, datos.identificacion, datos.tipoIdentificacion, datos.profesion];

    return conexion.getConnection()
        .then(function(con){
            return con.query(sql, arrayDatos)
                .then(function(resultados){
                    return resultados;
                })
                .catch(function(error){
                    console.log(error);
                })
        })
        .catch(function(error){
            console.log(error);
        })
}

function deleteOne(id){
    const sql = "DELETE FROM personas WHERE id = ?";
    let arrayCondiciones = [id];

    return conexion.getConnection()
        .then(function(con){
            return con.query(sql,arrayCondiciones)
                .then(function(resultados){
                    return resultados;
                })
        })
        .catch(function(error){
            console.log(error);
        })
}

module.exports.findAll = findAll;
module.exports.findOneById = findOneById;
module.exports.insertOne = insertOne;
module.exports.deleteOne = deleteOne;