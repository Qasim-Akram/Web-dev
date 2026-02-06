let Cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
let sum = 0


let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum");
let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("cards")
let playerEl = document.getElementById("player-el")

//creating player objects 
let player = {
    name: "Qasim",
    chips: 145

}
playerEl.textContent = player.name + " : $" + player.chips

//random card genetator
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else
        return randomNumber
}

//starting game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    Cards = [firstCard, secondCard]

    renderGame()
}

//rendering game 
function renderGame() {
    sumEl.textContent = "Sum:" + sum;
    cardEl.textContent = "Cards:"

    for (let count = 0; count < Cards.length; count++) {
        cardEl.textContent += Cards[count] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw another card!"
    } else if (sum === 21) {
        message = "Whoo!You've got the black jack."
        hasBlackjack = true
    } else {
        message = "You're are out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

//for new cards 

function newCards() {
    if (isAlive === true && hasBlackjack === false) {
        thirdCard = getRandomCard()
        sum += thirdCard
        Cards.push(thirdCard)
        renderGame()
    }
}






