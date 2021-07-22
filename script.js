// Game massages
let playerMessage = document.querySelector('.player-message');

// Game Buttons
const buttonRestartGame = document.querySelector('button.restart-game');
const buttonPlayGame = document.querySelector('button.play-game');
const buttonNewGame = document.querySelector('button#new-game-hidden');
const buttonsRestartGame = document.querySelectorAll('button.play-new-game');

// Game Logic
let randomNum = () => Math.trunc(Math.random() * 10) + 1;
let computerGuess;
let computerGuessOutput = document.querySelector('.computer-guess > span');

// computer Inputs
let computerInput = () => {
  computerGuess = randomNum();
  computerGuessOutput.textContent = computerGuess;
};

// Game scores
let score = 0;
let playerScore = document.querySelector('.score');
let highScore = [];
let newHighScore = [];
let playerHighScore = document.querySelector('span.highscore');
let gamePoint = 1;

// Player health
let playerHealthScore = 10;
let playerHealth = document.querySelector('.player-health');

// Player Inputs
let playerGuess;
let playerInput = document.querySelector('#player-input');

const focusOnInput = () => playerInput.focus();
window.onload = event => {
  focusOnInput();
};

// Game resets
buttonsRestartGame.forEach(button => {
  button.addEventListener('click', () => {
    location.reload();
  });
});

// Game over
const gameOver = () => {
  if (playerHealthScore < 1) {
    playerMessage.textContent = 'Game Over!';
    buttonRestartGame.textContent = 'Game Over';
    buttonPlayGame.style.display = 'none';
    buttonNewGame.style.display = 'block';
  }
};

// Track high scores
const trackHighScore = () => {
  playerScore.textContent = score;
  playerHighScore.textContent = newHighScore;
  if (highScore.length > 0 && playerGuess == computerGuess) {
    newHighScore = Math.max(...highScore);
  }
};

const playerLose = () => {
  score = 0;
  playerHealthScore--;
  playerHealth.textContent = playerHealthScore;
  playerMessage.textContent = 'you lost';
};

const playerWin = () => {
  score++;
  highScore.push(score);
  playerMessage.textContent = "you've won!";
};

const gameScore = () => {
  if (playerGuess != computerGuess) {
    console.log(playerGuess, computerGuess);
    playerLose();
  } else {
    playerWin();
  }
};

buttonPlayGame.addEventListener('click', () => {
  playerGuess = Number(document.querySelector('input').value);
  if (playerGuess) {
    computerInput();
    gameScore();
    gameOver();
    trackHighScore();
  } else {
    playerMessage.textContent = 'Please enter number';
  }
});
