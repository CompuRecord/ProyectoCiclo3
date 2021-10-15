let registros = [];

function login() {
    valorEmail = document.getElementById("correo");
    valorContrasena = document.getElementById("contrasena");

    registros.forEach(element => {
        //alert(element.correo);
        // alert(valorEmail.value);
        if ((valorEmail.value === element.correo) || (valorContrasena.value === element.contraseña)) { //longitud
            //alert("El usuario es válido");
            validarCAPTCHA();
            return true;
        }
        return false;
    });
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
    response = 1000;
    if (valor != response) {
        return false;
    } else return true;
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;