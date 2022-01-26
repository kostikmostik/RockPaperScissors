
let options = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const buttonNodeList = document.querySelectorAll("button");
const gameResult = document.querySelector('#result');
const content = document.createElement('p');
content.classList.add('content');

buttonNodeList.forEach((button) => 

{
    button.addEventListener('click', () => {game(button.id);});

});

function game(playerSelection)
{
    computerSelection = computerPlay();
    console.log(`Player: ${playerSelection}; Computer: ${computerSelection}`);
    content.textContent = `Player: ${playerSelection}; Computer: ${computerSelection}`;
    container.appendChild(content);
    playRound (playerSelection, computerSelection);

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
    content.textContent = `You won, ${playerSelection} beats ${computerSelection}`;
    container.appendChild(content);
}

if ((playerSelection === 'rock' && computerSelection === "paper") ||
   (playerSelection === 'paper' && computerSelection === "scissors") ||
   (playerSelection === 'scissors' && computerSelection === "rock")){
    computerScore++;
    content.textContent = `You lost, ${computerSelection} beats ${playerSelection}`;
    container.appendChild(content);
}

if ((playerSelection === 'rock' && computerSelection === "rock") ||
   (playerSelection === 'paper' && computerSelection === "paper") ||
   (playerSelection === 'scissors' && computerSelection === "scissors")){
    content.textContent = `Draw..${computerSelection} VS ${playerSelection}`;
    container.appendChild(content);
}
}

