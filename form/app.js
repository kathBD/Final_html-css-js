const dataValidar = () => {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;




    let msjError = "";

    if (nombre == "") {
        msjError += "Ingrese Nombre \n";

    }
    if (email == "") {
        msjError += "Ingrese Email \n";
    }

    if (asunto == "") {
        msjError += "Asunto de mensaje  \n";
    }

    if (mensaje == "") {
        msjError += "mensaje es requerido \n";
    }
    if (msjError.length > 0) {
        alert(msjError);
    }

    console.log("Data: ");
    console.log("nombre: " + nombre);
    console.log("Correo: " + email);
    console.log("Asunto: " + asunto);
    console.log("Mensaje: " + mensaje);

}

function clear() {
    document.getElementById('formulario').reset();


}