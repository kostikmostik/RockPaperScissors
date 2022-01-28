
let options = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const buttonNodeList = document.querySelectorAll("button");
const gameResult = document.querySelector('.results');

const content0 = document.createElement('div');
const content1 = document.createElement('div');
const content2 = document.createElement('p');
content0.classList.add('computer-pick');
content1.classList.add('results-final');
content2.classList.add('scoree');


buttonNodeList.forEach((button) => 

{
    button.addEventListener('click', () => {game(button.id);});

});

function game(playerSelection)
{
    computerSelection = computerPlay();
    playRound (playerSelection, computerSelection);

}

function computerPlay() //generate computer selection
{
    let n = Math.round(Math.random() * 2);
    return options[n];
}


function playRound (playerSelection, computerSelection) //evaluate and score round
{

if ((playerSelection === 'Rock' && computerSelection === "Scissors") ||
   (playerSelection === 'Paper' && computerSelection === "Rock") ||
   (playerSelection === 'Scissors' && computerSelection === "Paper")){
    playerScore++;
    content1.textContent = `You won, ${playerSelection} beats ${computerSelection}`;
}

if ((playerSelection === 'Rock' && computerSelection === "Paper") ||
   (playerSelection === 'Paper' && computerSelection === "Scissors") ||
   (playerSelection === 'Scissors' && computerSelection === "Rock")){
    computerScore++;
    content1.textContent = `You lost, ${computerSelection} beats ${playerSelection}`;
}

if ((playerSelection === 'Rock' && computerSelection === "Rock") ||
   (playerSelection === 'Paper' && computerSelection === "Paper") ||
   (playerSelection === 'Scissors' && computerSelection === "Scissors")){
    content1.textContent = `Draw..${computerSelection} VS ${playerSelection}`;
}

content0.tectContent = `Computer picked...${computerSelection}`;
content2.textContent = `Score: You: ${playerScore} vs Computer: ${computerScore}`;

gameResult.append(content0, content1, content2);

}