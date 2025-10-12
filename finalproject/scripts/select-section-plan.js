const tabs = document.querySelectorAll('.plans-tabs button');
const sections = {
    residential: document.getElementById('plans'),
    business: document.getElementById('corp-plans'),
    extras: document.getElementById('extras')
};

export function showSection(target) {
    Object.values(sections).forEach(sec => sec.classList.remove('active'));
    if (sections[target]) {
        sections[target].classList.add('active');
    }
    tabs.forEach(tab => {
        if (tab.dataset.target === target) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const lastTab = localStorage.getItem('lastPlanTab') || 'residential';
    showSection(lastTab);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            showSection(target);
            localStorage.setItem('lastPlanTab', target);
        });
    });
});