let registros = [];

function login() {

}

function agregarRegistro() {
    arrayGuardar = {};
    arrayGuardar.nombre = document.getElementById("nombre").value;
    arrayGuardar.apellido = document.getElementById("apellido").value;
    arrayGuardar.telefono = document.getElementById("telefono").value;
    arrayGuardar.correo = document.getElementById("correo").value;
    arrayGuardar.contraseña = document.getElementById("contrasena").value;
    registros.push(arrayGuardar);
}

function validarCAPTCHA(valor) {

}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;