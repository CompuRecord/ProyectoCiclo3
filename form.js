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
module.exports = checkNombre;