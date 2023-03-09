let board = document.querySelector('.board')
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.classList.add('cell')
    square.style.backgroundColor = 'white'
    board.insertAdjacentElement('beforeend', square)
}

function userSize(input) {
    let newSize = document.querySelector('.size')
    newSize.addEventListener('click', () => {
        prompt("Please enter a new size: (min: 2, max: 100)")
        if (input >= 2 && input <= 100) {
            alert("yes")
        } else {
            alert("Please pick a number between 2 and 100")
        }
    })
}

console.log(userSize())

// Black button color--------------------------------------
function blackColorButton() {
    const blackColorBtn = document.querySelector('.black')
    let squares = document.querySelectorAll('.cell')
    blackColorBtn.addEventListener('click', () => {
        squares.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black'
            })
        })
    })
}
console.log(blackColorButton())
// -----------------------------------------------------------

// White button color -------------------------------------
function whiteColorButton() {
    const whiteColorBtn = document.querySelector('.white')
    let squares = document.querySelectorAll('.cell')
    whiteColorBtn.addEventListener('click', () => {
        squares.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'white'
            })
        })
    })
}
console.log(whiteColorButton())
// -------------------------------------------------------------

// Random color ----------------------------------------------------
function randomColor() {
    const randomBtn = document.querySelector('.random')
    let squares = document.querySelectorAll('.cell')
    let random = Math.floor(Math.random() * 16777215).toString(16)
    randomBtn.addEventListener('click', () => {
        squares.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
            })
        })
    })
}
console.log(randomColor())
//--------------------------------------------------------------------

// Reset button ------------------------------------------
function resetButton() {
    const resetBtn = document.querySelector('.reset')
    let squares = document.querySelectorAll('.cell')
    resetBtn.addEventListener('click', () => {
        squares.forEach((cell) => {
            cell.style.backgroundColor = 'white'
        })
    })
}
console.log(resetButton())
// -------------------------------------------------------

