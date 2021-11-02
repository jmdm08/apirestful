window.onload = function(){
    iniciarEventos();
}

function iniciarEventos(){
    document.getElementById("btnIniciarSesion").addEventListener("click", iniciarSesion);
    document.getElementById("btnRegistrar").addEventListener("click", crearUsuario);
    document.getElementById("btnJSON").addEventListener("click", mostrarJSON);
}

function mostrarJSON(evento){
    // JSON
    let json = [
        {
            "nombres": "José",
            "apellidos": "Dager",
            "telefonos": [123, 456, 789],
            "direccion": {
                "barrio": "Montería",
                "ciudad": "Montería",
                "ruta": "XXX # 10-20 XXX YYY"
            }
        },
        {
            "nombres": "Isabella",
            "apellidos": "Dager",
            "telefonos": [321, 654],
            "edad": 88,
            "fechaNacimiento": "2021-11-02",
            "direccion": {}
        }
    ]
    let jsonString = JSON.stringify(json);
    console.log(jsonString);
    console.log(json);
    // EXTRAER DATOS.
    console.log(json[1].nombres);
    console.log(json[0].direccion.ciudad);
    console.log(json[1].telefonos[1]);

    // ADICIONAR / MODIFICAR
    json[0].edad = 15;
    json[0].fechaNacimiento = "xxxx-10-20";
    json[1].direccion = {
        "barrio": "XXXX",
        "ciudad": "YYYY",
        "ruta": "xxx # 10-20 TYYY YYY"
    }

    console.log(json);

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