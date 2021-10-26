const mariadb = require('mariadb');
require('dotenv').config();

const config = {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE 
}

var conexion;

try{
    conexion = mariadb.createPool(config);
    console.log("Conectado correctamente...")
}catch(error){
    console.log(error);
}

module.exports = conexion;