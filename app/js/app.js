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

const getShopNowWidth = () => {
    return document.querySelector('#shop-now').clientWidth
}

const shopNowItemsContainer = document.querySelector('.shop-now__items')
const sliderItemsContainer = document.querySelector('.header__images')

const sliderControlLeft = document.querySelector('#slider-control-left')
const sliderControlRight = document.querySelector('#slider-control-right')

let sliderItemWidth = getHeaderWidth()
let shopNowSliderItemWidth = getShopNowWidth()

let currentWidthOffset = sliderItemWidth * -1
let currentShopNowWidthOffset = shopNowSliderItemWidth * -1

const onWindowResize = () => {
    const currentHeaderWidth = getHeaderWidth()
    currentWidthOffset = currentHeaderWidth * -1
    
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset}px)`

    const currentShopNowWidth = getShopNowWidth()
    currentShopNowWidthOffset = currentShopNowWidth * -1
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset}px)`
}

window.onresize = onWindowResize


const prependLeft = () => {
    const lastSliderItem = document.querySelector('.header__image:last-child')
    sliderItemsContainer.prepend(lastSliderItem)

    const lastShopNowSliderItem = document.querySelector('.shop-now__item:last-child')
    shopNowItemsContainer.prepend(lastShopNowSliderItem)
}

const appendRight = () => {
    const firstSliderItem = document.querySelector('.header__image:first-child')
    sliderItemsContainer.append(firstSliderItem)

    const firstShopNowSliderItem = document.querySelector('.shop-now__item:first-child')
    shopNowItemsContainer.append(firstShopNowSliderItem)
}

const moveLeft = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

    shopNowItemsContainer.style.transition = 'transform .3s ease-in-out'
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset + shopNowSliderItemWidth}px)`

    currentWidthOffset += sliderItemWidth
    currentShopNowWidthOffset += shopNowSliderItemWidth

    setTimeout(() => {
        prependLeft()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

        shopNowItemsContainer.style.transition = 'none'
        shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset - shopNowSliderItemWidth}px)`

        currentWidthOffset -= sliderItemWidth
        currentShopNowWidthOffset -= shopNowSliderItemWidth
    }, 300)
}

const moveRight = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

    shopNowItemsContainer.style.transition = 'transform .3s ease-in-out'
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset - shopNowSliderItemWidth}px)`

    currentWidthOffset -= sliderItemWidth
    currentShopNowWidthOffset -= shopNowSliderItemWidth

    setTimeout(() => {
        appendRight()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

        shopNowItemsContainer.style.transition = 'none'
        shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset + shopNowSliderItemWidth}px)`

        currentWidthOffset += sliderItemWidth
        currentShopNowWidthOffset += shopNowSliderItemWidth
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
shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset}px)`
