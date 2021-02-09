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

const getHeaderWidth = () => {
    return document.querySelector('#header').clientWidth
}

const sliderItemsContainer = document.querySelector('.header__images')
const sliderControlLeft = document.querySelector('#slider-control-left')
const sliderControlRight = document.querySelector('#slider-control-right')
let sliderItemWidth = getHeaderWidth()
let currentWidthOffset = sliderItemWidth * -1

const onWindowResize = () => {
    const currentHeaderWidth = getHeaderWidth()
    sliderItemWidth = currentHeaderWidth
    currentWidthOffset = sliderItemWidth * -1

    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset}px)`
}

window.onresize = onWindowResize


const prependLeft = () => {
    const lastSliderItem = document.querySelector('.header__image:last-child')

    sliderItemsContainer.prepend(lastSliderItem)
}

const appendRight = () => {
    const lastSliderItem = document.querySelector('.header__image:first-child')

    sliderItemsContainer.append(lastSliderItem)
}

const moveLeft = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

    currentWidthOffset += sliderItemWidth

    setTimeout(() => {
        prependLeft()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

        currentWidthOffset -= sliderItemWidth
    }, 300)
}

const moveRight = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

    currentWidthOffset -= sliderItemWidth

    setTimeout(() => {
        appendRight()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

        currentWidthOffset += sliderItemWidth
    }, 300)
}

sliderControlLeft.addEventListener('click', () => {
    moveLeft()
})

sliderControlRight.addEventListener('click', () => {
    moveRight()
})

prependLeft()
sliderItemsContainer.style.transform = `translateX(${currentWidthOffset}px)`
