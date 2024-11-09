import '../scss/style.scss'
import '../scss/mainContent.scss'
import '../scss/asideNav.scss'
import '../scss/listBrends.scss'
import '../scss/listTypeTech.scss'
import '../scss/priceService.scss'
import '../scss/footer.scss'
import '../scss/asideFeedback.scss'
import '../scss/asideCall.scss'

if (window.innerWidth < 768){
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
}

let openReadMore = document.querySelector('.readMore')
let readMore__text = document.querySelector('.readMore__text')
let readMore__icon = document.querySelector('.readMore__icon')
let listBrendsOn768px = document.querySelector('.listBrendsOn768px')
let openReadMoreType = document.querySelector('.readMoreType')
let listBrendsType = document.querySelector('.listBrendsType')
let readMoreType__icon = document.querySelector('.readMoreType__icon')
let readMoreType__text = document.querySelector('.readMoreType__text')
let site = document.querySelector('.site')
let linkMain__chat = document.querySelector('.linkMain__chat')
let asideFeedback = document.querySelector('.asideFeedback')
let feedbackClose = document.querySelector('.feedbackClose')
let asideDropMenu = document.querySelector('.aside-drop-menu')
let headerDropMenu__close = document.querySelector('.header-drop-menu__close')
let blur = document.querySelector('.blur')
let headerContainer__burger = document.querySelector('.header-container__burger')
let linkMain__call = document.querySelector('.linkMain__call')
let asideCall = document.querySelector('.asideCall')
let callClose = document.querySelector('.callClose')

openReadMore.addEventListener('click', function () {
    if (openReadMore.classList.contains('hidden')) {
        readMore__text.textContent = 'Показать все'
        openReadMore.classList.remove('hidden')
        readMore__icon.style.transform = 'rotate(0deg)'
        listBrendsOn768px.style.maxHeight = '175px'
    } else {
        readMore__text.textContent = 'Скрыть'
        openReadMore.classList.add('hidden')
        readMore__icon.style.transform = 'rotate(-180deg)'
        listBrendsOn768px.style.maxHeight = `${listBrendsOn768px.scrollHeight}px`
    }
})

openReadMoreType.addEventListener('click', function () {
    if (openReadMoreType.classList.contains('hidden')) {
        openReadMoreType.classList.remove('hidden')
        readMoreType__text.textContent = 'Показать все'
        readMoreType__icon.style.transform = 'rotate(0deg)'
        listBrendsType.style.maxHeight = '160px'
    } else {
        readMoreType__text.textContent = 'Скрыть'
        openReadMoreType.classList.add('hidden')
        readMoreType__icon.style.transform = 'rotate(-180deg)'
        listBrendsType.style.maxHeight = `${listBrendsType.scrollHeight}px`
    }
})

headerContainer__burger.addEventListener('click', function () {
    asideDropMenu.style.transform = 'translateX(0)'
    blur.style.zIndex = '2'
    blur.style.display = 'block'
    site.style.overflow = 'hidden'
})

headerDropMenu__close.addEventListener('click', function () {
    asideDropMenu.style.transform = 'translateX(-100%)'
    blur.style.zIndex = '-1'
    blur.style.display = 'none'
    site.style.overflow = 'scroll'
    asideFeedback.style.transform = 'translateX(100%)'
})

blur.addEventListener('click', function () {
    feedbackClose.style.transform = 'translateX(200%)'
    callClose.style.transform = 'translateX(200%)'
    blur.style.zIndex = '-1'
    blur.style.display = 'none'
    asideFeedback.style.transform = 'translateX(100%)'
    asideCall.style.transform = 'translateX(100%)'
    asideDropMenu.style.transform = 'translateX(-100%)'
    site.style.overflow = 'scroll'
})

linkMain__chat.addEventListener('click', function() {
    asideFeedback.style.transform = 'translateX(0)'
    blur.style.zIndex = '4'
    blur.style.display = 'block'
    feedbackClose.style.transform = 'translateX(0)'
})

linkMain__call.addEventListener('click', function() {
    asideCall.style.transform = 'translateX(0)'
    blur.style.zIndex = '4'
    blur.style.display = 'block'
    callClose.style.transform = 'translateX(0)'
})

feedbackClose.addEventListener('click', function () {
    if (window.innerWidth >= 1440) {
        blur.style.zIndex = '-1'
        blur.style.display = 'none'
        feedbackClose.style.transform = 'translateX(200%)'
        site.style.overflow = 'hidden'
    } else {
        blur.style.zIndex = '2'
        site.style.overflow = 'hidden'
    }
    asideFeedback.style.transform = 'translateX(100%)'
})

callClose.addEventListener('click', function () {
    if (window.innerWidth >= 1440) {
        blur.style.zIndex = '-1'
        blur.style.display = 'none'
        callClose.style.transform = 'translateX(200%)'
        site.style.overflow = 'hidden'
    } else {
        blur.style.zIndex = '2'
        site.style.overflow = 'hidden'
    }
    asideCall.style.transform = 'translateX(100%)'
})


