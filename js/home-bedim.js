/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'))
}
if (navClose) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'))
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(n => n.addEventListener('click', () => {
  document.getElementById('nav-menu').classList.remove('show-menu')
}))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 100) header.classList.add('scroll-header')
  else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
})

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up')
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll')
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')
    const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if (!link) return
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
})

sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .pay__option,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about__data,
           .subscribe__description`, {
  origin: 'left',
})

sr.reveal(`.about__img-overlay,
           .subscribe__form`, {
  origin: 'right',
  interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
