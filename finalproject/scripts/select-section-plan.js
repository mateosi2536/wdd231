const tabs = document.querySelectorAll('.plans-tabs button');
const sections = {
    residential: document.getElementById('plans'),
    business: document.getElementById('corp-plans'),
    extras: document.getElementById('extras')
};

// Función para mostrar la sección correcta
function showSection(target) {
    Object.values(sections).forEach(sec => sec.classList.remove('active'));
    sections[target].classList.add('active');
}

// Al cargar la página, mostrar la última sección seleccionada o la residencial por defecto
const lastTab = localStorage.getItem('lastPlanTab') || 'residential';
showSection(lastTab);

// Agregar evento a los botones
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        showSection(target);

        // Guardar en localStorage
        localStorage.setItem('lastPlanTab', target);
    });
});

