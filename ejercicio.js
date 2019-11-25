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
    accion = prompt(`✅ Seleccione una operacion 
    --------------------------
    ➡️ [AGREGAR] un usuario 👤
    ➡️ [OBTENER] un usuario 🔎
    ➡️ [LISTAR] todos los usuarios 📄
    ➡️ [MODIFICAR] un usuario 📝
    ➡️ [ELIMINAR] un usuario ❌ 
    ➡️ [SALIR] del programa 👋`);
    
    volverAlMenuPrincipal = volverAlMenuPrincipal.toUpperCase()
    accion = accion.toUpperCase()

    //...............AGREGAR..............

    if (accion == "AGREGAR") {
        let repetirOperacion = "SI";
        repetirOperacion = repetirOperacion.toUpperCase()
        while (repetirOperacion == 'SI') {
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

            repetirOperacion = prompt(`Desea ingresar otro usuario?`);
        }

    }
    //...............OBTENER..............

    if (accion == "OBTENER") {

        let repetirOperacion = "SI";
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
        }
    }

    //...............LISTAR..............


    if (accion == "LISTAR") {
        let mostrarUsuarios = "";
        for (let i = 0; i < listaUsuarios.length; i++) {
            mostrarUsuarios = mostrarUsuarios +
                `
                ----------------------------------
                ID = ${listaUsuarios[i][0]}
                NOMBRE = ${listaUsuarios[i][1]}
                TELEFONO = ${listaUsuarios[i][2]}
                MAIL = ${listaUsuarios[i][3]}
                ----------------------------------
                `;
        }
        alert(mostrarUsuarios);

    }

    //...............ELIMINAR..............


    if (accion == "ELIMINAR") {
        let repetirOperacion = "SI";
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
            repetirOperacion = prompt("Desea repetir la operacion? (SI-NO)");
        }
    }
    //...............MODIFICAR..............

    // if (accion == "MODIFICAR") {
    //     let repetirOperacion = "SI";
    //     let usuarioEncontrado = false;
    //     while (repetirOperacion == "SI") {
    //         let usuarioAModificar = prompt("Indique el ID del usuario que desea eliminar");
    //         for (i = 0; i < listaUsuarios.length; i++) {
    //             if (listaUsuarios[i][0] == usuarioAModificar) {
    //                 confirmarOperacion = prompt(`Los datos del usuario a modificar son:
    //             ID: ${listaUsuarios[i][0]}
    //             NOMBRE: ${listaUsuarios[i][1]}
    //             TELEFONO: ${listaUsuarios[i][2]}
    //             MAIL: ${listaUsuarios[i][3]}
    //             Desea continuar? (SI-NO)
    //             `)
    //                 if (confirmarOperacion == "SI") {
    //                     prompt( "")
    //                     alert("La operacion ha sido realizada exitosamente");
    //                 } else {
    //                     alert("La operacion ha sido cancelada");
    //                 }
    //                 usuarioEncontrado = "SI";
    //             }
    //         }
    //         if (usuarioEncontrado == false) {
    //             alert("El usuario ingresado no existe.");
    //         }
    //         repetirOperacion = prompt("Desea repetir la operacion? (SI-NO)");
    //     }
    // }
    //...............SALIR..............

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

console.log(listaUsuarios);