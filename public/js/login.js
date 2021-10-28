window.onload = function(){
    iniciarEventos();
}

function iniciarEventos(){
    document.getElementById("btnRegistrar").addEventListener("click", registrar);
    document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);

}

function registrar(evento){
    window.location.href = "registrar.html"
}

function iniciarSesion(evento){
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