const modalLinks = document.querySelectorAll('.card a');

modalLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const modalId = link.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

const closeButtons = document.querySelectorAll('.modal .close');

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.style.display = 'none';
    });
});

window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

window.addEventListener('keydown', event => {
    if (event.key === "Escape") {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
});