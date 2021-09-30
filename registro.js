registros = [];

function agregarRegistro() {
    let entradas = document.getElementsByClassName("input");
    // for (var e = 0; e < 10; e++) {   
    datos = [];
    for (var i = 0; i < entradas.length; i++) {

        datos.push(entradas[i].value);

        //console.log (entradas[i].value);     
    }
    registros.push(datos);
    //}  

    // limpiarFormulario(); 
    console.log(registros)
};

function ordenarArreglo(arreglo) {
    arreglo.sort((x, y) => {
        const apellidox = x.apellido.toLowerCase();
        const apellidoy = y.apellido.toLowerCase();
        if (apellidox < apellidoy) {
            return -1;
        }
        if (apellidox > apellidoy) {
            return 1;
        }
        return 0;
    });
    console.log(arreglo);
};


function filtrarCorreo(arreglo) {};

module.exports = {
    agregarRegistro,
    ordenarArreglo,
    filtrarCorreo,
    registros
};