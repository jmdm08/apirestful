window.onload = function(){
    iniciarEventos();
}

function iniciarEventos(){
    document.getElementById("btnRegistrar").addEventListener("click", crearUsuario);
    document.getElementById("btnRegresar").addEventListener("click", regresar)
}

function regresar(evento){
    window.location.href = "/";
}

function crearUsuario(evento){
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;

    const datos = {
        usuario : usuario,
        contrasena : contrasena
    }

    const config = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(datos)
    }

    fetch("http://localhost:3000/auth/registrar", config)
        .then(function(respuesta){
            if(respuesta.ok){
                alert("Creado Correctamente")
                document.getElementById("btnRegresar").click();
            }
            else{
                alert("Error al crear usuario")
            }
        })
        .catch(function(error){
            console.log(error);
        });
}