let registros = [{ correo: "juan@gmail.com", contrasena: "SecurePassword123" }];

function login() {
    var correo = document.getElementById("correo");
    var contrasena = document.getElementById("contrasena");

    const correoIn = correo.value;
    const contrasenaIn = contrasena.value;
    const captchaIn = captcha.value;

    for (var i = 0; i < registros.length; i++) {
        const correoDb = registros[i].correo;
        const contrasenaDb = registros[i].contrasena;
        if (correoIn.length == 0) {
            console.log("correo vacio o no existe");
            return false;
        } else {
            if (correoIn == correoDb) {
                if (contrasenaIn == contrasenaDb) {
                    if (validarCAPTCHA(captchaIn) == true) {
                        console.log("Acceso correcto a " + correoIn);
                        return true;
                    } else {
                        console.log("Acceso denegado, captcha incorrecto");
                        return false;
                    }
                } else {
                    console.log("Acceso denegado, clave incorrecta");
                    return false;
                }
            }
        }
    }
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