const secretNumber = (RandomInt)

function RandomInt()
{
    return Math.floor(Math.random() * 101)

}
console.log(RandomInt())

function getUserGuess() {
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)

}

document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const guess = getUserGuess()
        console.log(guess)
    }
})

