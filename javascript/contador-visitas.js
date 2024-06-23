document.addEventListener('DOMContentLoaded', function() {
    // Verificar si ya existe el contador en el localStorage
    if(localStorage.getItem('visitas')) {
        // Si existe, obtener el valor y convertirlo a número
        var visitas = parseInt(localStorage.getItem('visitas'));
    } else {
        // Si no existe, iniciar el contador en 0
        var visitas = 0;
    }

    // Incrementar el contador de visitas
    visitas++;

    // Actualizar el valor en el localStorage
    localStorage.setItem('visitas', visitas);

    // Mostrar el contador en la página
    document.getElementById('contadorVisitas').textContent = visitas;
});
