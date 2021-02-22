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

const handleHeaderResize = () => {
    const currentHeaderWidth = getHeaderWidth()
    currentWidthOffset = currentHeaderWidth * -1

    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset}px)`
}

const handleShopNowResize = () => {
    const currentShopNowWidth = getShopNowWidth()
    currentShopNowWidthOffset = currentShopNowWidth * -1
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset}px)`
}

const onWindowResize = () => {
    handleHeaderResize()
    handleShopNowResize()
}

window.onresize = onWindowResize


const prependHeaderLeft = () => {
    const lastSliderItem = document.querySelector('.header__image:last-child')
    sliderItemsContainer.prepend(lastSliderItem)
}

const prependShopNowLeft = () => {
    const lastShopNowSliderItem = document.querySelector('.shop-now__item:last-child')
    shopNowItemsContainer.prepend(lastShopNowSliderItem)
}

const prependLeft = () => {
    prependHeaderLeft()
    prependShopNowLeft()
}

const appendHeaderRight = () => {
    const firstSliderItem = document.querySelector('.header__image:first-child')
    sliderItemsContainer.append(firstSliderItem)
}

const appendShopNowRight = () => {
    const firstShopNowSliderItem = document.querySelector('.shop-now__item:first-child')
    shopNowItemsContainer.append(firstShopNowSliderItem)
}

const moveHeaderLeft = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

    currentWidthOffset += sliderItemWidth

    setTimeout(() => {
        prependHeaderLeft()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

        currentWidthOffset -= sliderItemWidth
    }, 300)
}

const moveShopNowLeft = () => {
    shopNowItemsContainer.style.transition = 'transform .3s ease-in-out'
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset + shopNowSliderItemWidth}px)`

    currentShopNowWidthOffset += shopNowSliderItemWidth

    setTimeout(() => {
        prependShopNowLeft()

        shopNowItemsContainer.style.transition = 'none'
        shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset - shopNowSliderItemWidth}px)`

        currentShopNowWidthOffset -= shopNowSliderItemWidth
    }, 300)
}

const moveLeft = () => {
    moveHeaderLeft()
    moveShopNowLeft()
}

const moveHeaderRight = () => {
    sliderItemsContainer.style.transition = 'transform .3s ease-in-out'
    sliderItemsContainer.style.transform = `translateX(${currentWidthOffset - sliderItemWidth}px)`

    currentWidthOffset -= sliderItemWidth

    setTimeout(() => {
        appendHeaderRight()

        sliderItemsContainer.style.transition = 'none'
        sliderItemsContainer.style.transform = `translateX(${currentWidthOffset + sliderItemWidth}px)`

        currentWidthOffset += sliderItemWidth
    }, 300)
}

const moverShopNowRight = () => {
    shopNowItemsContainer.style.transition = 'transform .3s ease-in-out'
    shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset - shopNowSliderItemWidth}px)`

    currentShopNowWidthOffset -= shopNowSliderItemWidth

    setTimeout(() => {
        appendShopNowRight()

        shopNowItemsContainer.style.transition = 'none'
        shopNowItemsContainer.style.transform = `translateX(${currentShopNowWidthOffset + shopNowSliderItemWidth}px)`

        currentShopNowWidthOffset += shopNowSliderItemWidth
    }, 300)
}

const moveRight = () => {
    moveHeaderRight()
    moverShopNowRight()
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
