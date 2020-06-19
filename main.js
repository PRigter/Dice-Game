
// Global Variables
const player1Dice1 = document.getElementById("p1-d1")
const player1Dice2 = document.getElementById("p1-d2")
const player2Dice1 = document.getElementById("p2-d1")
const player2Dice2 = document.getElementById("p2-d2")
const messageDisplay = document.getElementById("message")
const rollDiceBtn = document.getElementById("roll-dice-btn")
const credits = document.getElementById("credits")

// Audio setup
let diceAudio = new Audio("./assets/sounds/dice_throw_on_table.mp3", "./assets/sounds/dice_throw_on_table.ogg" )
diceAudio.volume = 0.70

// Generates random number and changes img SRC to the respective imagem number
let roleDice = function() {
    diceAudio.play()
    
    let player1D1RandomNumber = generateRandomNum()
    let player1D2RandomNumber = generateRandomNum()
    let player2D1RandomNumber = generateRandomNum()
    let player2D2RandomNumber = generateRandomNum()
    let player1Total = player1D1RandomNumber + player1D2RandomNumber
    let player2Total = player2D1RandomNumber + player2D2RandomNumber
    let player1D1DiceFace = `./assets/dice${player1D1RandomNumber}-p1.png`
    let player1D2DiceFace = `./assets/dice${player1D2RandomNumber}-p1.png`
    let player2D1DiceFace = `./assets/dice${player2D1RandomNumber}-p2.png`
    let player2D2DiceFace = `./assets/dice${player2D2RandomNumber}-p2.png`

    player1Dice1.src = player1D1DiceFace
    player1Dice2.src = player1D2DiceFace
    player2Dice1.src = player2D1DiceFace
    player2Dice2.src = player2D2DiceFace
    

    let dices = document.getElementsByClassName("dice")
    let dicesArr = Array.prototype.slice.call(dices)

    dicesArr.forEach(dice => {
        let randomDeg = generateRandomDeg()

        dice.style.transform = "rotate(" + randomDeg + "deg)"
        dice.classList.add("fade-In")

        dice.addEventListener("animationend", function() {
            dice.classList.remove("fade-In")
        })
    })    

    player1Total > player2Total ? messageDisplay.innerHTML = "You Win!" : messageDisplay.innerHTML = "You Lose!"
}

function generateRandomNum() {
    return Math.floor(Math.random() * 6) + 1
}

function generateRandomDeg() {
    return Math.floor(Math.random() * 360) + 1
}


// Toggles Classes for Credits Elemtent
function toggleAccordion() {
    const creditsContent = credits.querySelector(".accordion-content")
    const arrow = credits.querySelector(".accordion-arrow")

    arrow.classList.toggle("active-arrow")
    creditsContent.classList.toggle("hidden")
    creditsContent.classList.toggle("active-content")
}



// Events Listeners
rollDiceBtn.addEventListener("click", roleDice)
credits.addEventListener("click", toggleAccordion)





