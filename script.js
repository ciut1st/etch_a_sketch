const div = document.querySelector('.container')

const box = document.createElement('div')
box.style.border = 'black'
box.style.backgroundColor = 'pink'
box.textContent = "hi"

div.appendChild(box)