function mostrarOcultarBurger() {
    let menuBurger = document.getElementById("responsiveMenu");
    let linksNav = document.getElementById("nav");

    if (menuBurger.style.display === "block") {
        menuBurger.style.display = "none";
        linksNav.style.display = "flex"; // Mostrar los enlaces de navegación nuevamente
    } else {
        menuBurger.style.display = "block";
        linksNav.style.display = "none"; // Ocultar los enlaces de navegación

        setTimeout(function() {
            menuBurger.style.display = "none";
            linksNav.style.display = "flex";
        }, 3000);
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