const menuIcon = document.querySelector('.menu-icon')
const navigate = document.querySelector('.navigate')
const navs = document.querySelectorAll('.nav-item')

navs.forEach( nav => {
    nav.addEventListener('click', () => {
        navigate.classList.remove('active')
    })
})

menuIcon.addEventListener('click', () => {
    navigate.classList.toggle('active')
})