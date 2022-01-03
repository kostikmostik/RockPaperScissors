
let options = ['rock', 'paper', 'scissors'];

let playerScore;
let computerScore;

let playerSelection;
let computerSelection;

game();

function game() //play 5 rouns and determine winner
{
    computerScore = 0;
    playerScore = 0;
    for (let i = 0; i <= 4; i++)
    {
        playerSelection = prompt("Rock, paper, or scissors?");
        computerSelection = computerPlay();
        console.log(`Player: ${playerSelection}; Computer: ${computerSelection}`);
        playRound (playerSelection, computerSelection)
    }
    console.log(`Computer score ${computerScore}, plyer score ${playerScore}`);
    alert(`Computer score ${computerScore}, plyer score ${playerScore}`);
}

function computerPlay() //generate computer selection
{
    let n = Math.round(Math.random() * 2);
    return options[n];
}

function playRound (playerSelection, computerSelection) //evaluate and score round
{

if ((playerSelection === 'rock' && computerSelection === "scissors") ||
   (playerSelection === 'paper' && computerSelection === "rock") ||
   (playerSelection === 'scissors' && computerSelection === "paper")){
    playerScore++;
    console.log(`You won, ${playerSelection} beats ${computerSelection}`);
}

if ((playerSelection === 'rock' && computerSelection === "paper") ||
   (playerSelection === 'paper' && computerSelection === "scissors") ||
   (playerSelection === 'scissors' && computerSelection === "rock")){
    computerScore++;
    console.log(`You lost, ${computerSelection} beats ${playerSelection}`);
}

if ((playerSelection === 'rock' && computerSelection === "rock") ||
   (playerSelection === 'paper' && computerSelection === "paper") ||
   (playerSelection === 'scissors' && computerSelection === "scissors")){
    console.log(`Draw..${computerSelection} VS ${playerSelection}`);
}
}