let tabs = document.querySelectorAll(".tabs__tab-nav-btn")
let tabContent = document.querySelectorAll(".tabs__content-item")

tabs.forEach(el => {
    el.addEventListener("click",() => {
      let item = el.getAttribute("data-tab")
      let current = document.getElementById(item)
     tabs.forEach(el => {
         el.classList.remove("active")
     })
     tabContent.forEach(el => {
        el.classList.remove('active')
     })
    el.classList.add("active")
    console.log(current)
    current.classList.add("active")
})

})



let btn = document.querySelector('.header__btn')
let overlay = document.querySelector('.overlay')
let close = document.querySelector('.popup__close')

btn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})

close.addEventListener('click', () => {
    overlay.style.display = 'none'
})

overlay.addEventListener('click', (e) => {
    if (e.target.className === 'overlay') {
        overlay.style.display = 'none'
    }
})

let burger = document.querySelector('.burger')
let list = document.querySelector('.header__list')

burger.addEventListener('click', () => {
    list.classList.toggle('show')
    burger.classList.toggle('show')

})
new WOW().init();
AOS.init();

