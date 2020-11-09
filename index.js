const message = document.getElementById("message")
const numberInput = document.getElementById("user-input")

let secretNumber = randomInt(100)

document.addEventListener("keyup" , function (event) {
    if (event.key === "Enter") {
        const guess = getUserInput()

      if (guess > secretNumber) {
          setMessage("Too high!")
      } else if (guess == secretNumber) {
          setMessage("You are correct!")
      } else {
          setMessage("Too low!")
      } {
          
      }
    }
})

function randomInt() {
    return Math.floor(Math.random()* 101)
}
console.log(secretNumber)

function getUserInput() {
    return parseInt(numberInput.value)
}

function setMessage(msg) {
    message.innerHTML = msg
}
