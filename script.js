const aside = document.querySelector('.aside');
const toggleBtn = document.getElementById('toggleAside');

toggleBtn.addEventListener('click', () => {
    aside.classList.toggle('collapsed');
});


