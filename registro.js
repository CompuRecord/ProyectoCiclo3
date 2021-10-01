registros = [];

function agregarRegistro(){
    arrayGuardar = {}; //objeto
    //asignamos los inputs a cada propiedad del objeto
    arrayGuardar.nombre =document.getElementById("nombre").value;
    arrayGuardar.apellido=document.getElementById("apellido").value;
    arrayGuardar.telefono=document.getElementById("telefono").value;
    arrayGuardar.correo=document.getElementById("correo").value;
    arrayGuardar.contraseña=document.getElementById("contrasena").value;
    //arrayGlobal.push(arrayGuardar);//asignamos objetos con sus propiedades al array
    registros.push(arrayGuardar);
 
}

function ordenarArreglo(arreglo) {
    var arreglo = registros.sort((x, y) => {
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
    return arreglo; 
};


function filtrarCorreo(arreglo) {
    condicion=/^[^@ \t\r\n]+@gmail+\.[^@ \t\r\n]+/;
    arreglo=registros;
    arreglo_filtrado=[];
    arreglo.forEach(i => {
        if(condicion.test(i.correo)){
            arreglo_filtrado.push(i);
        }

    });
    print(arreglo_filtrado)
    return arreglo_filtrado;
};

module.exports = {
    agregarRegistro,
    ordenarArreglo,
    filtrarCorreo,
    registros
};