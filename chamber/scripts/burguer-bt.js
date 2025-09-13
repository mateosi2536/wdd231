const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainList');

hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});
