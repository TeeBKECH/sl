const dateInputs = document.querySelectorAll('.date')
if (dateInputs?.length > 0) {
  dateInputs.forEach((date) => {
    const item = new AirDatepicker(date, {
      classes: 'myDate',
      // inline: true,
      autoClose: true,
    })
  })
}

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

// Select
const clearChoosenSelects = (arr) => {
  arr.forEach((item) => {
    item.classList.remove('select_option-selected')
  })
}

const selects = document.querySelectorAll('.select')
if (selects?.length > 0) {
  selects.forEach((select) => {
    const trigger = select.querySelector('.select_toggle')
    const triggerText = trigger.innerText
    const dropdown = select.querySelector('.select_dropdown')
    const options = select.querySelectorAll('.select_option')

    trigger.addEventListener('click', (e) => {
      select.classList.toggle('show')
    })

    if (trigger.getAttribute('data-type') === 'single') {
      options.forEach((option) => {
        option.classList.remove('select_option-selected')
        if (trigger.value === option.getAttribute('data-value')) {
          option.classList.add('select_option-selected')
        }
        option.addEventListener('click', (e) => {
          trigger.value = option.getAttribute('data-value')
          trigger.innerText = option.innerText
          clearChoosenSelects(options)
          option.classList.add('select_option-selected')
          select.classList.remove('show')
        })
      })
    }

    if (trigger.getAttribute('data-type') === 'multiple') {
      let values = []

      options.forEach((option) => {
        const checkbox = option.querySelector('[type="checkbox"]')
        const text = option.querySelector('.select_option_text')

        option.addEventListener('click', (e) => {
          if (!checkbox.checked) {
            values.push({
              value: option.getAttribute('data-value'),
              name: text?.innerHTML,
              selected: checkbox.checked,
            })
          } else {
            values = values.filter((el) => el.value !== option.getAttribute('data-value'))
          }

          trigger.value = values.map((v) => v.value).join(', ') || ''
          trigger.innerText = values.map((v) => v.name).join(', ') || triggerText
          checkbox.checked = !checkbox.checked
          option.classList.toggle('select_option-selected')
        })
      })

      console.log(values)
    }
  })
}
