<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuración del correo
    $to = "peraltajoan36@gmail.com"; // Cambia esto por tu correo de recepción
    $subject = "Nuevo mensaje Cliente - Impulso CABI";

    // Obtener datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);

    // Construir el contenido del correo
    $body = "
    <h2>Nuevo Mensaje de Contacto</h2>
    <p><strong>Nombre:</strong> $name</p>
    <p><strong>Teléfono:</strong> $phone</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Servicio Solicitado:</strong> $service</p>
    <p><strong>Mensaje:</strong></p>
    <p>$message</p>
    ";

    // Configuración de encabezados
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
} else {
    echo "Método no permitido.";
}
?>
