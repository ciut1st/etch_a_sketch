let board = document.querySelector('.board')
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.style.backgroundColor = 'white'
    board.insertAdjacentElement('beforeend', square)
}

// Black button color
function blackColorButton() {
    const blackColorBtn = document.querySelector('.black')
    let squares = document.querySelectorAll('div')
    blackColorBtn.addEventListener('click', () => {
        squares.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black'
            })
        })
    })
}
console.log(blackColorButton())
// -----------------------------------------------------------

// White button color -------------------------------------
function whiteColorButton() {
    const whiteColorBtn = document.querySelector('.white')
    let squares = document.querySelectorAll('div')
    whiteColorBtn.addEventListener('click', () => {
        squares.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'white'
            })
        })
    })
}
console.log(whiteColorButton())
// -------------------------------------------------------------

// Reset button ------------------------------------------
function resetButton() {
    const resetBtn = document.querySelector('.reset')
    let squares = document.querySelectorAll('div')
    resetBtn.addEventListener('click', () => {
        squares.forEach((div) => {
            div.style.backgroundColor = 'white'
        })
    })
}
console.log(resetButton())
// -------------------------------------------------------

// Random color ----------------------------------------------------
function randomColor() {
    const randomBtn = document.querySelector('.random')
    let squares = document.querySelectorAll('div')
    let random = Math.floor(Math.random() * 16777215).toString(16)
    randomBtn.addEventListener('click', () => {
        squares.forEach((div) => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            })
        })
    })
}
console.log(randomColor())
//--------------------------------------------------------------------