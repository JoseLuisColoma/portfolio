function mostrarOcultarMenu() {
    var menu = document.getElementById("responsiveMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Descargar CV
let archivoDescargado = false;

function descargarCV() {
// Verificar si el archivo ya ha sido descargado
    if (archivoDescargado) {
        // El archivo ya ha sido descargado, mostrar el aviso
        alert('El archivo ya ha sido descargado.\nSolo puedes descargar el CV una vez.');
        return;
    }

    // Descargar el archivo
    let enlace = document.createElement('a');
    enlace.setAttribute('href', './CV-JoseLuisColomaTormo01062023.pdf');
    enlace.setAttribute('download', 'CV-JoseLuisColomaTormo01062023.pdf');
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Marco el archivo como descargado
    archivoDescargado = true;
}