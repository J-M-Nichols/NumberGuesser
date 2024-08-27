let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>Math.floor(Math.random()*10)

const compareGuesses=(userGuess, compGuess, targetGuess)=>{
    const userDistance = Math.abs(userGuess-targetGuess)
    const compDistance = Math.abs(compGuess-targetGuess)

    return compDistance >= userDistance
}

const updateScore=winner=>{
    if(winner==='human') humanScore++
    else computerScore++
}

const advanceRound=()=>currentRoundNumber++