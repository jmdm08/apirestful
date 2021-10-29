window.onload = function(){
    iniciarEventos();
}

function iniciarEventos(){
    document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
    document.getElementById("btnRegistrar").addEventListener("click", crearUsuario);
}

function crearUsuario(evento){
    let usuario = document.getElementById("user").value;
    let contrasena = document.getElementById("pass").value;

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

function iniciarSesion(evento){
    console.log("OK")
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

    fetch("http://localhost:3000/auth/login", config)
        .then(function(respuesta){
            if(respuesta.ok){
                respuesta.json()
                    .then(function(datos){
                        if(datos.iniciarSesion){
                            localStorage.setItem("auth",1);
                            window.location.href = "/";
                        }
                        else{
                            alert(datos.mensaje)
                        }
                    })
            }
        })

}