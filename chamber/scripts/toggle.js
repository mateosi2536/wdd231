const toggleBtn = document.getElementById('toggleView');
const container = document.getElementById('membersContainer');

toggleBtn.addEventListener('click', () => {
  if (container.classList.contains('grid')) {
    container.classList.remove('grid');
    container.classList.add('list');
    toggleBtn.textContent = 'Cambiar a Cuadrícula';
  } else {
    container.classList.remove('list');
    container.classList.add('grid');
    toggleBtn.textContent = 'Cambiar a Lista';
  }
});
