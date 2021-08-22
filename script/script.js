const calc = document.querySelector('.calc')
const formCalc = calc.querySelector('.calc__form')
const input = calc.querySelector('.calc__input')
const items = calc.querySelectorAll('.item')
const equal = calc.querySelector('#item3')
const remove = calc.querySelector('#item1')
const removeOneByOne = calc.querySelector('#item2')
const itemHistory = calc.querySelector('.item-history')
let history = []


items.forEach(el => {
  el.addEventListener('click', (e) => {
    insert(el.innerHTML)
  })
})

window.addEventListener('keydown', (event) => {
  items.forEach(el => {
    if (event.key === el.innerHTML) {
      insert(el.innerHTML)
    }
  })
})


function insert(num) {
  input.value = input.value + num
}


remove.addEventListener('click', (e) => {
  input.value = ''
})
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    input.value = ''
  }

})

removeOneByOne.addEventListener('click', () => {
  input.value = input.value.substring(0, input.value.length - 1)
})
window.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') {
    input.value = input.value.substring(0, input.value.length - 1)
  }
})

equal.addEventListener('click', () => {
  const result = document.forms.textview.value
  if (result) {
    let a = eval(result)
    document.forms.textview.value = a
    history.push(a)
  }
  
})

window.addEventListener('keydown', (e) => {
  const result = document.forms.textview.value
  if (e.key === "Enter" && result) {
    let a = eval(result)
    document.forms.textview.value = a
    history.push(a)
  }
})

itemHistory.addEventListener('click', (e) => {
  document.forms.textview.value = history
})