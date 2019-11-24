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
    if (accion == "AGREGAR") {
        let repetirOperacion = "SI";
        while (repetirOperacion == 'SI') {
            nombre = prompt(" 📓 Ingrese el nombre del usuario");
            telefono = prompt(" 📞 Ingrese el teléfono del usuario");
            email = prompt(" 📫 Ingrese email del usuario");
            let nuevoUsuario = [id, nombre, telefono, email];
            let respuesta = prompt(`Los datos del usuario ingresado son:
        NOMBRE: ${nombre} 
        TELEFONO: ${telefono} 
        EMAIL: ${email}
        Desea confirmar?`);
            if (respuesta == "SI") {
                listaUsuarios.push(nuevoUsuario);
                alert("El usuario fue guardado exitosamente!")
            } else {
                alert("Los cambios no han sido guardados, se cancelo la operacion.");
            }
            repetirOperacion = prompt(`Desea ingresar otro usuario?`);
        }
    }
    if (accion == "OBTENER") {
        let repetirOperacion = "SI";
        let usuarioEncontrado = false;
        while (repetirOperacion == 'SI') {
            let tipoDeDato = prompt(`Buscar por ID, Nombre, Celular o Email?`);
            let valorABuscar = prompt(`Ingresar el valor a buscar`);
            if (tipoDeDato == "ID" || "Nombre" || "Celular" || "Email") {
                for (let i = 0; i < listaUsuarios.length; i++) {
                    for (let j = 0; j < listaUsuarios[i].length; j++) {
                        if (listaUsuarios[i][j] === valorABuscar) {
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
    // if (accion == "LISTAR") {
    //   alert(
    //     `
    //     `
    //   )

    // }
    if (accion == "SALIR") {
        let confirma = prompt('Confirma que quiere salir del programa SI - NO?')
        if (confirma === "SI") {
            alert('Muchas gracias por su atención')
            volverAlMenuPrincipal = "NO"
        } else {
            volverAlMenuPrincipal = "SI"
        };
    };
}
console.log(listaUsuarios);