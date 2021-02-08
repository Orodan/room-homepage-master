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

const sliderItemsContainer = document.querySelector('.header__images')
const sliderControlLeft = document.querySelector('#slider-control-left')
const sliderControlRight = document.querySelector('#slider-control-right')

const sliderItemWidth = document.querySelector('#header').clientWidth
console.log(sliderItemWidth)

let currentWidthOffset = 0

sliderControlLeft.addEventListener('click', () => {
    moveLeft()
})

sliderControlRight.addEventListener('click', () => {
    moveRight()
})

const moveLeft = () => {
    console.log('move left')

    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

    currentWidthOffset += sliderItemWidth
}

const moveRight = () => {
    console.log('move right')

    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

    currentWidthOffset -= sliderItemWidth
}