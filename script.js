// Grid creation
function board(userInput) {
    let board = document.querySelector('.board')
    board.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
    board.style.gridTemplateRows = `repeat(${userInput}, 1fr)`

    for (let i = 0; i < `${userInput}` * `${userInput}`; i++) {
        let square = document.createElement('div')
        square.classList.add('cell')
        square.style.backgroundColor = 'white'
        board.insertAdjacentElement('beforeend', square)
    }
}

// New size-------------------------------------------------------------------------------
let newSize = document.querySelector('.size')
newSize.addEventListener('click', () => {
    userSize()
})
function userSize() {
    let userInput = prompt("Please enter a new size number: ", "min: 2, max: 100")
    if (!isNaN(userInput)) {
        if (userInput >= 2 && userInput <= 100) {
            board(userInput)
        } else {
            alert("Please pick a number between 2 and 100")
            userSize()
        }
    } else {
        alert("Error")
        userSize()
    }
}
console.log(userSize())
//----------------------------------------------------------------------------

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

// Eraser button -------------------------------------
function eraserButton() {
    const eraserBtn = document.querySelector('.eraser')
    let squares = document.querySelectorAll('.cell')
    eraserBtn.addEventListener('click', () => {
        squares.forEach((cell) => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'white'
            })
        })
    })
}
console.log(eraserButton())
// -------------------------------------------------------------

// Random color ----------------------------------------------------
function randomColor() {
    const randomBtn = document.querySelector('.random')
    let squares = document.querySelectorAll('.cell')
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