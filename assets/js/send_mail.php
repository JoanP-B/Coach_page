<?php
// Incluir las clases de PHPMailer con rutas correctas
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Ruta a las clases de PHPMailer desde el directorio actual
require '../vendor/phpMailer/Exception.php';  // Asegúrate de que esta ruta sea correcta
require '../vendor/phpMailer/PHPMailer.php';    // Asegúrate de que esta ruta sea correcta
require '../vendor/phpMailer/SMTP.php';         // Asegúrate de que esta ruta sea correcta

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];  // Correo del usuario
    $service = $_POST['service'];
    $message = $_POST['message'];

    // Crear la instancia de PHPMailer
    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'peraltajoan36@gmail.com';  // Tu dirección de correo (remitente)
        $mail->Password = 'cuey dzxb bnyk byuj'; // Contraseña de la aplicación generada
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Establecer los receptores del correo
        $mail->setFrom($email, $name);  // El correo del remitente será el del usuario
        $mail->addAddress('peraltajoan36@gmail.com'); // El correo al que se enviará el mensaje

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde el formulario de contacto';
        $mail->Body    = "<h3>Mensaje de: $name</h3>
                          <p><strong>Teléfono:</strong> $phone</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Servicio:</strong> $service</p>
                          <p><strong>Mensaje:</strong> $message</p>";

        // Enviar el correo
        $mail->send();
        echo 'Mensaje enviado correctamente';
    } catch (Exception $e) {
        echo "Error al enviar el mensaje: {$mail->ErrorInfo}";
    }
}
?>