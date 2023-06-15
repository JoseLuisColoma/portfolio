let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


let archivoDescargado = false;

function descargarCV() {
    // Verificar si el archivo ya ha sido descargado
    if (archivoDescargado) {
        // El archivo ya ha sido descargado, mostrar el aviso
        alert('El archivo ya ha sido descargado previamente.');
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
