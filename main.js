const scissors_btn = document.querySelector(".scissors-btn")
const paper_btn = document.querySelector(".paper-btn")
const rock_btn = document.querySelector(".rock-btn")
const btn = document.querySelectorAll("button")
const scoreboard = document.querySelector(".scoreboard")

let computerScore = 0
let humanScore = 0

scoreboard.innerHTML = "Score Computer: " + String(computerScore) + " Human: " + String(humanScore)

scissors_btn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const winner = returnWinner("scissors", computerChoice)

    if (winner == "human") {
        humanScore += 1
    } else if (winner == "computer") {
        computerScore += 1
    }
    scoringFunction()
})

paper_btn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const winner = returnWinner("paper", computerChoice)

    if (winner == "human") {
        humanScore += 1
    } else if (winner == "computer") {
        computerScore += 1
    }
    scoringFunction()
})

rock_btn.addEventListener("click", () => {
    const computerChoice = getComputerChoice()
    const winner = returnWinner("rock", computerChoice)

    if (winner == "human") {
        humanScore += 1
    } else if (winner == "computer") {
        computerScore += 1
    }
    scoringFunction()
})

function getComputerChoice() {
    function getRandomInt() {
        return Math.floor(Math.random() * 3)
    }
    let choice = getRandomInt()
    if (choice == 0) {
        return "rock"
    } else if (choice == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function scoringFunction() {
    if (computerScore == 5) {
        scoreboard.innerHTML = "Computer Wins!!!"
        humanScore = 0
        computerScore = 0
    } else if (humanScore == 5) {
        scoreboard.innerHTML = "Human Wins!!!"
        humanScore = 0
        computerScore = 0
    } else {
        scoreboard.innerHTML = "Score Computer: " + String(computerScore) + " Human: " + String(humanScore)
    }
}

function returnWinner(playerChoice, computerChoice) {
    if ((computerChoice == "rock" ) && (playerChoice == "paper")) {
        return "human"
    } else if ((computerChoice == "rock" ) && (playerChoice == "scissors")) {
        return "computer"
    } else if ((computerChoice == "paper" ) && (playerChoice == "scissors")) {
        return "human"
    } else if ((computerChoice == "paper" ) && (playerChoice == "rock")) {
        return "computer"
    } else if ((computerChoice == "scissors" ) && (playerChoice == "rock")) {
        return "human"
    } else if ((computerChoice == "scissors" ) && (playerChoice == "paper")) {
        return "computer"
    }
}