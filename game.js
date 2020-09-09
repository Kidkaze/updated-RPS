// global variables
let playerScore = 0;
let compScore = 0;
const computerSelection = computerPlay();
const container = document.querySelector('#container');

const div = document.createElement('div');
div.classList.add('results');

container.appendChild(div);

const h3 = document.createElement('h3');

const h4 = document.createElement('h4');

const h2 = document.createElement('h2');

// random computer generated choice
function computerPlay() {
  let result = ['rock', 'paper', 'scissors'];
  let random = result[Math.floor(Math.random() * result.length)];
  return random;
}

// play one round
function playRound(playerSelection, computerSelection) {
  const rock = 'Rock'.toLowerCase();
  const paper = 'Paper'.toLowerCase();
  const scissors = 'Scissors'.toLowerCase();
  if (playerSelection === computerSelection) {
    return `Tie! ${playerSelection} is the same as ${computerSelection}`;
  } else if (
    (playerSelection === rock && computerSelection === scissors) ||
    (playerSelection === paper && computerSelection === rock) ||
    (playerSelection === scissors && computerSelection === paper)
  ) {
    playerScore = playerScore + 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === rock && computerSelection === paper) ||
    (playerSelection === paper && computerSelection === scissors) ||
    (playerSelection === scissors && computerSelection === rock)
  ) {
    compScore = compScore + 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// using click event, display rounds won by either computer or player
function roundPlay() {
  const rockBtn = document.querySelector('#rock');
  rockBtn.addEventListener('click', () => {
    let playerSelection = rock.id;
    h4.innerText = playRound(playerSelection, computerSelection);
    h3.innerText = `You have ${playerScore} and the computer has ${compScore}`;
    div.appendChild(h4);
    div.appendChild(h3);
  });

  const paperBtn = document.querySelector('#paper');
  paperBtn.addEventListener('click', () => {
    let playerSelection = paper.id;
    h4.innerText = playRound(playerSelection, computerSelection);
    h3.innerText = `You have ${playerScore} and the computer has ${compScore}`;
    div.appendChild(h4);
    div.appendChild(h3);
  });

  const scissorsBtn = document.querySelector('#scissors');
  scissorsBtn.addEventListener('click', () => {
    let playerSelection = scissors.id;
    h4.innerText = playRound(playerSelection, computerSelection);
    h3.innerText = `You have ${playerScore} and the computer has ${compScore}`;
    div.appendChild(h4);
    div.appendChild(h3);
  });
}

roundPlay();
