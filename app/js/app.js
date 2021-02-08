// Mobile menu

const mobileMenuBtn = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const overlay = document.querySelector('#overlay');

mobileMenuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
        mobileMenuBtn.classList.remove('open')
        mobileMenu.classList.remove('open')
        overlay.classList.remove('open')
    } else {
        mobileMenuBtn.classList.add('open')
        mobileMenu.classList.add('open')
        overlay.classList.add('open')
    }
})

// Slider

const sliderImagesContainer = document.querySelector('.header__images')
const sliderControlLeft = document.querySelector('#slider-control-left')
const sliderControlRight = document.querySelector('#slider-control-right')

sliderControlLeft.addEventListener('click', () => {
    moveLeft()
})

sliderControlRight.addEventListener('click', () => {
    moveRight()
})

const moveLeft = () => {
    console.log('move left')
}

const moveRight = () => {
    console.log('move right')
}