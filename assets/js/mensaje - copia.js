document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Selecciona el formulario
    const responseDiv = document.createElement('div'); // Crea un div para mensajes
    responseDiv.id = 'form-response';
    responseDiv.style.display = 'none';
    responseDiv.style.marginTop = '10px';
    form.appendChild(responseDiv);

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Mostrar mensaje de carga
        responseDiv.style.display = 'block';
        responseDiv.style.color = 'blue';
        responseDiv.innerHTML = 'Enviando mensaje, por favor espera...';

        const formData = new FormData(form); // Recoge los datos del formulario

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
            });

            const result = await response.text(); // Respuesta del servidor
            if (response.ok) {
                // Mensaje de éxito
                responseDiv.style.color = 'green';
                responseDiv.innerHTML = '¡Mensaje enviado correctamente!';
                form.reset(); // Limpia el formulario
            } else {
                // Mensaje de error
                responseDiv.style.color = 'red';
                responseDiv.innerHTML = `Error al enviar el mensaje: ${result}`;
            }
        } catch (error) {
            // Mensaje de error en caso de fallo de red
            responseDiv.style.color = 'red';
            responseDiv.innerHTML = 'Hubo un problema al enviar el mensaje. Intenta nuevamente.';
        }
    });
});
