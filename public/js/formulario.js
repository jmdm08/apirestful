window.onload = function(){
    iniciarEventos();
    cargarDatos();
}

function iniciarEventos(){
    document.getElementById("btnGuardar").addEventListener("click", guardarDatos);
}

function cargarDatos(){
    const config = {
        method: "GET"
    }

    fetch("http://localhost:3000/usuarios/listar", config)
        .then(function(respuesta){
            if(respuesta.ok){
                respuesta.json()
                    .then(function(datos){
                        datos.forEach(function(datosPersonales){
                            adicionarFila(datosPersonales);
                        });
                    })
            }
        })
        .catch(function(error){
            console.log(error);
        })
}

function guardarDatos(event){
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let identificacion = document.getElementById("identificacion").value;
    let profesion = document.getElementById("profesion").value;
    let tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    let accion = document.getElementById("accion").value;

    let datosPersonales = {
        "nombres": nombres,
        "apellidos": apellidos,
        "identificacion": identificacion,
        "profesion": profesion,
        "tipoIdentificacion": tipoIdentificacion
    }

    if(accion === "crear"){
        // SE ADICIONA LOS NUEVOS DATOS AL ARRAY.
        const config = {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(datosPersonales)
        }

        fetch("http://localhost:3000/usuarios/crear", config)
            .then(function(respuesta){
                if(respuesta.ok){
                    let datosFila = {
                        "nombres": nombres,
                        "apellidos": apellidos,
                        "numero_identificacion": identificacion,
                        "id_profesion": profesion,
                        "id_tipo_identificacion": tipoIdentificacion
                    }
                    adicionarFila(datosFila);
                }
                else{
                    alert("NO SE PUDO PROCESAR LA PETICIÓN")
                }
            })
            .catch(function(error){
                console.log(error);
            })

    }
    else{
        let id = document.getElementById("fila").value;
        const config = {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(datosPersonales)
        }

        fetch("http://localhost:3000/usuarios/editar/"+id, config)
            .then(function(respuesta){
                if(respuesta.ok){
                    alert("Editado Correctamente");
                }
                else{
                    alert("Error al editar");
                }
            })
            .catch(function(error){
                console.log(error);
            });
    }
    
    document.getElementById("btnReset").click();
    document.getElementById("accion").value = "crear";
}

function adicionarFila(datosPersonales){
    let tabla = document.getElementById("datosTabla");

    let row = tabla.rows.length;

    let html = "";
    html += "<tr id='datos-"+ (row) +"'>";
    html += "   <td>" + datosPersonales.nombres + "</td>";
    html += "   <td>" + datosPersonales.apellidos + "</td>";
    html += "   <td>" + datosPersonales.numero_identificacion + "</td>";
    html += "   <td>" + datosPersonales.id_profesion + "</td>";
    html += "   <td>" + datosPersonales.id_tipo_identificacion + "</td>";
    html += "   <td>";
    html += "       <button type='button' class='btnEditar' data-id='"+ datosPersonales.id +"'>Editar</button>"
    html += "       <button type='button' class='btnEliminar' data-id='"+ datosPersonales.id +"'>Eliminar</button>";
    html += "   </td>"
    html += "</tr>";

    tabla.tBodies[0].innerHTML += html;

    // CAPTURO LOS BOTONES DE ELIMINAR USANDO LA CLASE.
    let botoneEliminar = document.getElementsByClassName("btnEliminar");
    for(let i=0; i<botoneEliminar.length; i++){
        // SE RECORRE UNO A UNO LOS BOTONES DE ELIMINAR Y SE LE AGREGA EL EVENTO "CLICK"
        botoneEliminar[i].addEventListener("click", eliminarFila);
    }

    // SE CAPUTRAN LOS BOTONES EDITAR USANDO LA CLASE
    let botoneEditar = document.getElementsByClassName("btnEditar");
    for(let i=0; i<botoneEditar.length; i++){
        botoneEditar[i].addEventListener("click",editarFila);
    }
}

function editarFila(event){
    let id = event.target.getAttribute("data-id");

    const config = {
        method: "GET"
    }

    fetch("http://localhost:3000/usuarios/listar/"+id, config)
       .then(function(respuesta){
           if(respuesta.ok){
               respuesta.json()
                .then(function(datos){
                    let datosPersonales = datos[0];
                    document.getElementById("nombres").value = datosPersonales.nombres;
                    document.getElementById("apellidos").value = datosPersonales.apellidos;
                    document.getElementById("identificacion").value = datosPersonales.numero_identificacion;
                    document.getElementById("profesion").value = datosPersonales.id_profesion;
                    document.getElementById("tipoIdentificacion").value = datosPersonales.id_tipo_identificacion;
                    document.getElementById("fila").value = datosPersonales.id;
                    document.getElementById("accion").value = "editar";
                })
           }
       }) 
       .catch(function(error){
           console.log(error);
       });
}

function eliminarFila(event){
    // SE VA A ELIMINAR TODO LA FILA DEL ELEMENTO BODY DE LA TABLA.
    // CLOSEST -> BUSCA EL PRIMER ELEMENTO SUPERIOR CON UN CONDICIÓN.
    let fila = event.target.closest("tr");
    let id = event.target.getAttribute("data-id");

    const config = {
        method:  "DELETE"
    }

    fetch("http://localhost:3000/usuarios/eliminar?id="+id, config)
        .then(function(respuesta){
            if(respuesta.ok){
                fila.remove();
            }
            else{
                alert("No se pudo eliminar");
            }
        })
        .catch(function(error){
            console.log(error);
        });
}