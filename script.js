let board = document.querySelector('.board')
board.style.gridTemplateColumns = 'repeat(16, 1fr)'
board.style.gridTemplateRows = 'repeat(16, 1fr)'
let squares =  document.querySelectorAll('div')

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')
    square.style.backgroundColor = 'blue'
    board.insertAdjacentElement('beforeend', square)
}

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