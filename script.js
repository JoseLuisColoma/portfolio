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
let archivoEstaDescargado = false;

function descargarCV() {
// Verificar si el archivo ya ha sido descargado
    if (archivoEstaDescargado) {
        // El archivo ya ha sido descargado, mostrar el aviso
        alert('El archivo ya ha sido descargado.\nSolo puedes descargar el CV una vez.');
        return;
    }

    // Descargar el archivo
    let enlace = document.createElement('a');
    enlace.setAttribute('href', './cv/CV-JoseLuisColomaTormo25062023.pdf');
    enlace.setAttribute('download', 'CV-JoseLuisColomaTormo25062023.pdf');
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
    archivoEstaDescargado = true; // Marco el archivo como descargado
}

function enMantenimiento() {
    let overlay = createOverlay();
    let popup = createPopup();
    let closeButton = createCloseButton();
    let content = createContent();
  
    popup.appendChild(content);
    popup.appendChild(closeButton);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  
    closeButton.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  
    setTimeout(function () {
      document.body.removeChild(overlay);
    }, 3000);
  }
  
  function createOverlay() {
    let overlay = document.createElement("div");
    overlay.className = "c-overlay";
    return overlay;
  }
  
  function createPopup() {
    let popup = document.createElement("div");
    popup.className = "c-popup";
    return popup;
  }
  
  function createCloseButton() {
    let closeButton = document.createElement("button");
    closeButton.innerHTML = "Aceptar";
    closeButton.className = "c-popup__close-button";
    return closeButton;
  }
  
  function createContent() {
    let content = document.createElement("p");
    content.innerHTML = "Sección en mantenimiento.<br>Disculpa las molestias.";
    content.className = "c-popup__content";
    return content;
  }
  
