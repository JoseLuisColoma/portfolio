<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $tema = $_POST['tema'];
    $mensaje = $_POST['mensaje'];

    $destinatario = 'colomatormojl@gmail.com';
    $asunto = 'Nuevo mensaje de contacto';
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Tema: $tema\n";
    $contenido .= "Mensaje: $mensaje\n";

    $cabeceras = 'From: web@example.com' . "\r\n" .
        'Reply-To: ' . $correo . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($destinatario, $asunto, $contenido, $cabeceras);

    // Puedes redirigir al usuario a una página de éxito o mostrar un mensaje de confirmación.
    echo 'Mensaje enviado con éxito.';
}
?>