const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.nav--list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    if(menuBtn.classList.contains('active')) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
})