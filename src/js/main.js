// const date = new AirDatepicker('#birthday')

// Burger
const burger = document.querySelector('.burger')
const menu = document.querySelector('#menu')
if (burger && menu) {
  burger.addEventListener('click', (e) => {
    menu.classList.toggle('show')
  })
}

// Dropdown
const dropdowns = document.querySelectorAll('.dropdown')
if (dropdowns?.length > 0) {
  dropdowns.forEach((elem) => {
    const trigger = elem.querySelector('.dropdown_head')
    trigger.addEventListener('click', (e) => {
      elem.classList.toggle('active')
    })
  })
}
