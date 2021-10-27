const modelUsuarios = require('./model');


async function findAll(){
    let data = await modelUsuarios.findAll();
    return data;
}

async function findOneById(id){
    let data = await modelUsuarios.findOneById(id);
    // AQUI EN CASO DE SER NECESARIO, SE TRANSFORMAN LOS DATOS DE LA BASE DE DATOS
    // SEGÚN LA PETICIÓN.
    return data;
}

async function insertOne(datos){
    let resultado = await modelUsuarios.insertOne(datos);
    return resultado;
}

async function deleteOne(id){
    let resultado = await modelUsuarios.deleteOne(id);
    return resultado;
}

async function updateOneById(id, datos){
    let resultado = await modelUsuarios.updateOneById(id, datos);
    /*
        AQUI EL RESTO DEL CÓDIGO QUE SEA NECESARIO PARA TRANSFORMAR LOS DATOS.
        LA LÓGICA DE PROGRAMACIÓN....
    */
    return resultado;
}

module.exports.findAll = findAll;
module.exports.findOneById = findOneById;
module.exports.insertOne = insertOne;
module.exports.deleteOne = deleteOne;
module.exports.updateOneById = updateOneById;