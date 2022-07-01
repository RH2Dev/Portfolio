const burger = document.querySelector('.uwu-burger');
const nav = document.querySelector('.uwu-nav-items');

const navSlide = () => {

    burger.addEventListener('click', () => {
        nav.classList.toggle('uwu-nav-active');
    });
}

navSlide();