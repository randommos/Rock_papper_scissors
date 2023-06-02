const computerPlay = () => {
    const arrOfChoices = ["rock","paper","scissors"]
    const randomNum = Math.floor(Math.random() * 3)
    const computerChoice = arrOfChoices[randomNum]
    return computerChoice
}

let playerScore = 0
let computerScore = 0

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "You tied! Both picked rock."
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "You tied! Both picked scissors."
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "You tied! Both picked paper."
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lost! rock crushes scissors."
        
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You won! rock crushes scissors."
        
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You won! paper covers rock."
        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lost! paper covers rock."
        
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lost! scissors cut paper."
        
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++ 
        return "You won! scissors cut paper."
       
    } 
}


const game = () => {
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock,paper,scissors..." , "Shoot!").toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (computerScore > playerScore) {
        return "you lost, the computer won T-T"
    } else if (playerScore > computerScore){
        return "yow won, you defeated the computer!"
    } else {
        return "you draw with the computer, you are equally as great!"
    }
}

console.log (game ())
