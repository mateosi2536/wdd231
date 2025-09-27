const modalLinks = document.querySelectorAll('.card a');

// Para cada link, agregar evento click
modalLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir comportamiento por defecto
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Obtener todos los botones de cierre
const closeButtons = document.querySelectorAll('.modal .close');

// Para cada botón, agregar evento click para cerrar el modal
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
    });
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Opción adicional: cerrar modal con la tecla Esc
window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});