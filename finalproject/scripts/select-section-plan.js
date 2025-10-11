const tabs = document.querySelectorAll('.plans-tabs button');
const sections = {
    residential: document.getElementById('plans'),
    business: document.getElementById('corp-plans'),
    extras: document.getElementById('extras')
};

sections.residential.classList.add('active');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        Object.values(sections).forEach(sec => sec.classList.remove('active'));
        const target = tab.dataset.target;
        sections[target].classList.add('active');
    });
});
