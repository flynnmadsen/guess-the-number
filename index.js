const message = document.getElementById("message")
const guess = document.getElementById("user-input")

let secretNumber = randomInt(100)

function randomInt(max) {
    return Math.floor(Math.random()* (max + 1))
}
console.log(secretNumber)
