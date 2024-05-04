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

function getHumanChoice(){
    const humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase()
    return humanChoice
}

function playRounds(rounds) {
    let humanScore = 0
    let computerScore = 0
    for (let i = 1; i < rounds; i++) {
        let computerChoice = getComputerChoice()
        let playerChoice = getHumanChoice()

        if ((computerChoice == "rock" ) && (playerChoice == "paper")) {
            humanScore += 1
        } else if ((computerChoice == "rock" ) && (playerChoice == "scissors")) {
            computerChoice += 1
        } else if ((computerChoice == "paper" ) && (playerChoice == "scissors")) {
            humanScore += 1
        } else if ((computerChoice == "paper" ) && (playerChoice == "rock")) {
            computerScore += 1
        } else if ((computerChoice == "scissors" ) && (playerChoice == "rock")) {
            humanScore += 1
        } else if ((computerChoice == "scissors" ) && (playerChoice == "paper")) {
            computerScore += 1
        }
        console.log("Human Score: ", humanScore, "Computer Score: ", computerScore)

    }
}