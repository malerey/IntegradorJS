let listaUsuarios = [
    [0, "Carla", "1545628984", "carla@gmail.com"],
    [1, "Pedro", "1545251245", "pedro@gmail.com"],
    [2, "Lucas", "1523357849", "lucas@gmail.com"],
    [3, "Ana", "15789456", "ana@gmail.com"],
];

let id = listaUsuarios.length;
let nombre = [];
let telefono = [];
let email = [];
let accion;
let volverAlMenuPrincipal = "SI";

while (volverAlMenuPrincipal == "SI") {
  let repetirOperacion = "SI"
    accion = prompt(`✅ Seleccione una operacion 
      --------------------------
      ➡️ [AGREGAR] un usuario 👤
      ➡️ [OBTENER] un usuario 🔎
      ➡️ [LISTAR] todos los usuarios 📄
      ➡️ [MODIFICAR] un usuario 📝
      ➡️ [ELIMINAR] un usuario ❌ 
      ➡️ [SALIR] del programa 👋`);


    accion = accion.toUpperCase()

    //...............AGREGAR..............

    if (accion == "AGREGAR") {

        while (repetirOperacion == "SI") {
            nombre = prompt(" 📓 Ingrese el nombre del usuario");
            telefono = prompt(" 📞 Ingrese el teléfono del usuario");
            email = prompt(" 📫 Ingrese email del usuario");
            let nuevoUsuario = [id, nombre, telefono, email];
            let respuesta = prompt(`Los datos del usuario ingresado son:
          ID: ${id}    
          NOMBRE: ${nombre} 
          TELEFONO: ${telefono} 
          EMAIL: ${email}
          Desea confirmar SI -NO ?
          `);
            respuesta = respuesta.toUpperCase()
            if (respuesta == "SI") {
                listaUsuarios.push(nuevoUsuario);
                alert("El usuario fue guardado exitosamente!")
            } else {
                alert("Los cambios no han sido guardados, se cancelo la operacion.");
            }
            repetirOperacion = prompt(`Desea agregar otro usuario? (SI-NO)`);
            repetirOperacion = repetirOperacion.toUpperCase()
        };

    }
    //...............OBTENER..............

    if (accion == "OBTENER") {

        let usuarioEncontrado = false;
        while (repetirOperacion == 'SI') {
            let tipoDeDato = prompt(`Buscar por ID, Nombre, Celular o Email?`);
            let valorABuscar = prompt(`Ingresar el valor a buscar`);

            if (tipoDeDato == "ID" || "Nombre" || "Celular" || "Email") {
                for (let i = 0; i < listaUsuarios.length; i++) {
                    for (let j = 0; j < listaUsuarios[i].length; j++) {
                        if (listaUsuarios[i][j] == valorABuscar) {
                            alert(`El usuario encontrado es el siguiente:
                      ${listaUsuarios[i]}`)
                            usuarioEncontrado = true;
                        }
                    }
                }

                if (usuarioEncontrado == false) {
                    alert("No existe el usuario buscado");
                }
            }

            repetirOperacion = prompt(`Desea realizar otra busqueda?`);
            repetirOperacion = repetirOperacion.toUpperCase()

        }
    }

    //...............LISTAR..............

    if (accion == "LISTAR") {
        let mostrarUsuarios = "";
        for (let i = 0; i < listaUsuarios.length; i++) {
            mostrarUsuarios = mostrarUsuarios +
                `ID: ${listaUsuarios[i][0]};  Nombre: ${listaUsuarios[i][1]};  Teléfono: ${listaUsuarios[i][2]};  email: ${listaUsuarios[i][3]}
`;
        }
        alert(mostrarUsuarios);

    }

    //...............ELIMINAR..............


    if (accion == "ELIMINAR") {

        let usuarioEncontrado = false;
        while (repetirOperacion == "SI") {
            let usuarioAEliminar = prompt("Indique el ID del usuario que desea eliminar");
            for (i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i][0] == usuarioAEliminar) {
                    confirmarOperacion = prompt(`Los datos del usuario a eliminar son:
                  ID: ${listaUsuarios[i][0]}
                  NOMBRE: ${listaUsuarios[i][1]}
                  TELEFONO: ${listaUsuarios[i][2]}
                  MAIL: ${listaUsuarios[i][3]}
                  Desea confirmar? (SI-NO)
                  `)
                    if (confirmarOperacion == "SI") {
                        listaUsuarios.splice(i, 1);
                        alert("La operacion ha sido realizada exitosamente");
                    } else {
                        alert("La operacion ha sido cancelada");
                    }
                    usuarioEncontrado = "SI";
                }
            }
            if (usuarioEncontrado == false) {
                alert("El usuario ingresado no existe.");
            }
            repetirOperacion = prompt("Desea eliminar otro usuario? (SI-NO)");
            repetirOperacion = repetirOperacion.toUpperCase()
        }
    }
    //...............MODIFICAR..............

    if (accion == "MODIFICAR") {

        let usuarioEncontrado = false;
        while (repetirOperacion == "SI") {
            let mostrarUsuarios = ``;
            for (let i = 0; i < listaUsuarios.length; i++) {
                mostrarUsuarios = mostrarUsuarios +
                    `ID: ${listaUsuarios[i][0]};  Nombre: ${listaUsuarios[i][1]};  Teléfono: ${listaUsuarios[i][2]};  email: ${listaUsuarios[i][3]}
`
            }
            alert(mostrarUsuarios);

            let usuarioAModificar = prompt(`Indique el ID del usuario que desea modificar: `);

            for (i = 0; i < listaUsuarios.length; i++) {
                if (listaUsuarios[i][0] == usuarioAModificar) {
                    usuarioEncontrado = "true";
                    alert(`Actualmente los datos del usuario son:
                        ID: ${listaUsuarios[i][0]}
                        Nombre: ${listaUsuarios[i][1]}
                        Teléfono: ${listaUsuarios[i][2]}
                        email: ${listaUsuarios[i][3]}
                        `)
                    let campoAModificar = prompt("Desea modificar Nombre, Teléfono o email?");
                    campoAModificar = campoAModificar.toUpperCase()
                    switch (campoAModificar) {
                        case "NOMBRE":
                            let nuevoNombre = prompt(`Ingrese el nuevo Nombre`);
                            let confirmaNombre = prompt(`El nombre ingresado es ${nuevoNombre}. Desea confirmar el cambio SI/NO?`)
                            confirmaNombre = confirmaNombre.toUpperCase()
                            if (confirmaNombre == 'SI') {
                                listaUsuarios[i][1] = nuevoNombre;
                                alert(`Datos actualizados del usuario:
                                ID: ${listaUsuarios[i][0]}
                                Nombre: ${listaUsuarios[i][1]}
                                Teléfono: ${listaUsuarios[i][2]}
                                email: ${listaUsuarios[i][3]}
                                `)
                            }

                            break;
                        case "TELEFONO":
                            let nuevoTelefono = prompt(`Ingrese el nuevo Teléfono`);
                            let confirmaTelefono = prompt(`El nombre ingresado es ${nuevoTelefono}. Desea confirmar el cambio SI/NO?`)
                            confirmaTelefono = confirmaTelefono.toUpperCase()
                            if (confirmaTelefono == 'SI') {
                                listaUsuarios[i][2] = nuevoTelefono;
                                alert(`Datos actualizados del usuario:
                                ID: ${listaUsuarios[i][0]}
                                Nombre: ${listaUsuarios[i][1]}
                                Teléfono: ${listaUsuarios[i][2]}
                                email: ${listaUsuarios[i][3]}
                                `)
                            }
                            break;
                        case "EMAIL":
                            let nuevoMail = prompt(`Ingrese el nuevo email`);
                            let confirmaMail = prompt(`El email ingresado es ${nuevoMail}. Desea confirmar el cambio SI/NO?`)
                            confirmaMail = confirmaMail.toUpperCase()
                            if (confirmaMail == 'SI') {
                                listaUsuarios[i][3] = nuevoMail;
                                alert(`Datos actualizados del usuario:
                                ID: ${listaUsuarios[i][0]}
                                Nombre: ${listaUsuarios[i][1]}
                                Teléfono: ${listaUsuarios[i][2]}
                                email: ${listaUsuarios[i][3]}
                                `)
                            }
                            break;
                        default:
                            alert(`No se reconoce el campo a modificar`);

                    }

                }
            }

            if (usuarioEncontrado == false) {
                alert("El usuario ingresado no existe");
            }

            repetirOperacion = prompt("Desea modificar otro usuario? (SI-NO)");
            repetirOperacion = repetirOperacion.toUpperCase()

        }
    }
    if (accion == "SALIR") {
        let confirma = prompt('Confirma que quiere salir del programa SI - NO?')
        confirma = confirma.toUpperCase()
        if (confirma == "SI") {
            alert('Muchas gracias por su atención')
            volverAlMenuPrincipal = "NO"
        } else {
            volverAlMenuPrincipal = "SI"
        };
    };
}

console.log(listaUsuarios)
