let listaUsuarios = [
    ["0", "Carla", "155554444", "carla@gmail.com"],
    ["1", "Pedro", "1545251245", "pedro@gmail.com"],
    ["2", "Lucas", "1523357849", "lucas@gmail.com"],
    ["3", "Ana", "15789456", "ana@gmail.com"],
];

let id = listaUsuarios.length; 
let nombre = [];
let telefono = [];
let email = [];

let menu = prompt(`SELECCIONE UNA OPERACION
-------------------------
[AGREGAR] un usuario
[OBTENER] un usuario
[LISTAR] todos los usuarios
ESCRIBA UNA OPCION`)

if (menu === "AGREGAR") {
    nombre = prompt('Ingresa tu nombre');
    telefono = prompt("Número");
    email = prompt("Email");
};

let datosNuevoUsuario = [`${id}`, nombre , telefono , email];
/*alert(`Los datos ingresados fueron: ${datosNuevoUsuario}`);*/
let personas=prompt(`Los datos ingresados fueron
    NOMBRE: ${nombre}
    TELEFONO: ${telefono}
    EMAIL: ${email}
    Confirma los cambios?`)

if(personas ==="SI"){
     listaUsuarios.push(datosNuevoUsuario);
    alert("¡Operación realizada exitosamente!")
} else{
    alert("¡Operación cancelada!")
};






/*let personasAgregadas = [
    nombre = nombre,
    telefono = telefono,
    email = email,
];

//id a la longitud del array//*/




