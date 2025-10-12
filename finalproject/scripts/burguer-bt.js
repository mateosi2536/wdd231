export function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (!hamburgerBtn || !mainNav) return;

    hamburgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
}