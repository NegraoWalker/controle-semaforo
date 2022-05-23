function lightRed() {
    const light = document.getElementById("off")
    light.setAttribute("src", "./img/vermelho.png")
}

function lightYellow() {
    const light = document.getElementById("off")
    light.setAttribute("src", "./img/amarelo.png")
}

function lightGreen() {
    const light = document.getElementById("off")
    light.setAttribute("src", "./img/verde.png")
}


const objectColors = {
    "red": lightRed,
    "yellow": lightYellow,
    "green": lightGreen,
}

let colorIndex = 0

function update() {
    const arrayColors = ["red", "yellow", "green"]
    const color = arrayColors[colorIndex]
    objectColors[color]()
    colorIndex++
    if (colorIndex > 2) {
        colorIndex = 0
    }
}

function lightAutomatic() {
    interval = setInterval(update, 1000)

}


const btnRed = document.getElementById("btn-red")
const btnYellow = document.getElementById("btn-yellow")
const btnGreen = document.getElementById("btn-green")
const btnAutomatic = document.getElementById("btn-automatic")

btnRed.addEventListener("click", lightRed)
btnYellow.addEventListener("click", lightYellow)
btnGreen.addEventListener("click", lightGreen)

btnAutomatic.addEventListener("click", lightAutomatic)