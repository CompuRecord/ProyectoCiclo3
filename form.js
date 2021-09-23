function checkNombre(nombre) {
    var regex = new RegExp(/^[A-Za-z\_\-\.\s\xF1\xD1]+$/);
    if (nombre === "") {
        alert("El campo nombre está vacio");
        return false;
    } else if (nombre.length < 4 || nombre.length > 30) {
        alert("El nombre debe tener entre 4 y 30 caracteres");
        return false;
    } else if (!regex.test(nombre)) {
        alert("El nombre no acepta caracteres númericos");
        return false;
    }
}

function checkApellido(Apellido) {
    var regex = new RegExp('[a-z]{4,30}');
    if (regex.test(apell.value)) {
        alert("El apellido se ingreso correctamente")
        return true;

    } else if (apell === "") {
        alert("El apellido no se ingreso correctamente")
        return false;

    } else {
        alert("El apellido no se ingreso correctamente")
        return fales;


    };

function checkCorreo(valor){
            var email = document.getElementById('Correo').valor;
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
                alert("La dirección de email " + valor + " es correcta!.");
                return true;
                } else {
                    alert("La dirección de email " + valor +" es incorrecta!.");
                    return false;
                    }
        }

}

function checkContrasena(valor){
    var lim =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    if(valor.length<8){//longitud
        alert("Debe tener por lo menos 8 caracteres")
        return false;
    }
    else if( (valor == null) || (/^\s+$/.test(password1))) {//null o espacios en blanco
        alert("No debe contener espacios");
        return false;
      }
    else if(!lim.test(valor)){//valida contraseñas de al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres
        alert("Debe contener al menos un numero, una letra mayúscula y una letra minúscula");
        return false;
    }
    return true;
}
module.exports = { checkNombre, checkApellido, checkCorreo, checkContrasena}