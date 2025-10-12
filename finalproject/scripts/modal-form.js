const form = document.getElementById('contact-form');
const modal = document.getElementById('confirm-modal');
const modalPreview = document.getElementById('modal-preview');
const confirmBtn = document.getElementById('confirm-submit');
const cancelBtn = document.getElementById('cancel-submit');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // evita el envío directo
    // mostrar datos en el modal
    modalPreview.innerHTML = `
        <strong>Name:</strong> ${form.name.value}<br>
        <strong>Email:</strong> ${form.email.value}<br>
        <strong>Subject:</strong> ${form.subject.value}<br>
        <strong>Message:</strong> ${form.message.value}
    `;
    modal.style.display = 'flex';
});

// confirmación
confirmBtn.addEventListener('click', function() {
    form.submit(); // envía el formulario real
});

// cancelar
cancelBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});
