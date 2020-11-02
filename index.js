const message = document.getElementById("message")
const guess = document.getElementById("user-input")

let secretNumber = randomInt(100)

function randomInt() {
    return Math.floor(Math.random()* 101)
}
console.log(secretNumber)

function getUserInput() {
    return parseInt(guess.value)
}

