const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const body = document.body;

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    container.classList.toggle('active');
});
