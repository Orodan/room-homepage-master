console.log('ok')

const mobileMenuBtn = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('#overlay');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open')
        overlay.classList.remove('open')
    } else {
        mobileMenu.classList.add('open')
        overlay.classList.add('open')
    }
})