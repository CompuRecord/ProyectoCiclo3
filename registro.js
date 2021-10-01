registros = [];

function agregarRegistro(){
    //if(document.getElementById("form-registro").onsubmit==true){//
        //let inpu = document.getElementsByClassName ("input");
    arrayGuardar = {}; //objeto
    //asignamos los inputs a cada propiedad del objeto
    arrayGuardar.nombre =document.getElementById("nombre").value;
    arrayGuardar.apellido=document.getElementById("apellido").value;
    arrayGuardar.telefono=document.getElementById("telefono").value;
    arrayGuardar.correo=document.getElementById("correo").value;
    arrayGuardar.contraseña=document.getElementById("contrasena").value;
    //arrayGlobal.push(arrayGuardar);//asignamos objetos con sus propiedades al array
    registros.push(arrayGuardar);
    //}
    //else return;
}

// function agregarRegistro() {
//     registros.push(nuevoSujeto);
//     console.log(registros);
//     var getData = function() {
//         function Persona(nombre, apellido, telefono, correo, contraseña) {
//             this.nombre = nombre;
//             this.apellido = apellido;
//             this.telefono = telefono;
//             this.correo = correo;
//             this.contraseña = contraseña;
//         }

//         var nombreCapturar = document.getElementById("nombre").value;
//         var apellidoCapturar = document.getElementById("apellido").value;
//         var telefonoCapturar = document.getElementById("telefono").value;
//         var correoCapturar = document.getElementById("correo").value;
//         var contraseñaCapturar = document.getElementById("contrasena").value;
//         nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar, telefonoCapturar, correoCapturar, contraseñaCapturar);
//         console.log(nuevoSujeto);
//         agregar();
//     }
// };

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