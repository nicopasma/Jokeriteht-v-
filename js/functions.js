const table = document.querySelector('table')
const button = document.querySelector('button')
const numbers = []
let rand_num1 = 0
let rand_num2 = 0
let rivit = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const AddRow = () => {
    const tr = table.insertRow()

    for (let i=0; i<7; i++) {
        const td = tr.insertCell(i);
        td.innerHTML = getRandomIntNumberInRange(0,9)
    }

}

addEventListener("DOMContentLoaded", () => {
    document.querySelector('#rivit').innerHTML = rivit
})

button.addEventListener('click',() => {
    AddRow()
    rivit = rivit + 1
    document.querySelector('#rivit').innerHTML = rivit
})