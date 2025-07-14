let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')
let button4 = document.querySelector('#button4')
let button5 = document.querySelector('#button5')
let button6 = document.querySelector('#button6')
let button7 = document.querySelector('#button7')
let button8 = document.querySelector('#button8')
let button9 = document.querySelector('#button9')
let button10 = document.querySelector('#button10')
let button11 = document.querySelector('#button11')
let button12 = document.querySelector('#button12')
let button13 = document.querySelector('#button13')
let button14 = document.querySelector('#button14')
let button15 = document.querySelector('#button15')
let button16 = document.querySelector('#button16')
let allButton = document.querySelectorAll('.button')
let display_h1 = document.querySelector('#display_h1')
let calculater_display_part = document.querySelector('.calculater_display_part')
let light_mode = document.querySelector('.light_mode')
let dark_mode = document.querySelector('.dark_mode')
let calculater_screen = document.querySelector('.calculater_screen')
let firstNumber = null
let secondNumber = null
let currentOperater = null
let mode = null


// display all buttons append in mainh1
allButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        display_h1.innerHTML += btn.innerHTML
    })
})


// operater buttons ('+' '-' '*' '/')
button15.addEventListener('click', () => {
    display_h1.innerHTML = ''
})

button4.addEventListener('click', () => {
    firstNumber = Number(display_h1.innerHTML)
    console.log(firstNumber)
    display_h1.innerHTML = ''

    currentOperater = '+'
    console.log(currentOperater)

})

button8.addEventListener('click', () => {
    firstNumber = Number(display_h1.innerHTML)
    console.log(firstNumber)
    display_h1.innerHTML = ''

    currentOperater = '-'
    console.log(currentOperater)

})

button12.addEventListener('click', () => {
    firstNumber = Number(display_h1.innerHTML)
    console.log(firstNumber)
    display_h1.innerHTML = ''

    currentOperater = '*'
    console.log(currentOperater)

})

button16.addEventListener('click', () => {
    firstNumber = Number(display_h1.innerHTML)
    console.log(firstNumber)
    display_h1.innerHTML = ''
    
    currentOperater = '/'
    console.log(currentOperater)
    
})


// Light Mode
light_mode.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
    calculater_screen.style.border = '1px solid black'
    calculater_display_part.style.borderBottom = '1px solid black'
    display_h1.style.color = 'black'
})

// Dark Mode
dark_mode.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'black'
    calculater_screen.style.border = '1px solid white'
    calculater_display_part.style.borderBottom = '1px solid white'
    display_h1.style.color = 'white'

})

// Equal button = 
button14.addEventListener('click', () => {
    secondNumber = Number(display_h1.innerHTML)
    console.log(secondNumber)

    if (currentOperater === '+') {
        let result = plus(firstNumber, secondNumber)
        console.log(result)
        display_h1.innerHTML = result
    } else if (currentOperater === '-') {
        let result2 = minus(firstNumber, secondNumber)
        console.log(result2)
        display_h1.innerHTML = result2
    } else if (currentOperater === '*') {
        let result3 = muntiply(firstNumber, secondNumber)
        console.log(result3)
        display_h1.innerHTML = result3
    } else if (currentOperater === '/'){
        let result4 = divide(firstNumber, secondNumber)
        console.log(result4)
        display_h1.innerHTML = result4
    }
})


// functions
const plus = (a, b) => {
    return (a + b)
}
const minus = (a, b) => {
    return (a - b)
}
const muntiply = (a, b) => {
    return (a * b)
}
const divide = (a, b) => {
    return (a / b)
}