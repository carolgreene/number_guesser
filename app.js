/*
GAME FUNCTION:
-Player must guess a number btwn a min & a max
-Player gets a certain amt of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if they lose
-Let player play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNumb = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min & max
minNum.textContent = min;
maxNumb.textContent = max;

//play again event listener
game.addEventListener('mousedown', function(e) {  //can't use click, it automatically reloads
  if(e.target.className === 'play-again'){
    guessInput.value = ''
    window.location.reload()
  }
})

//listener for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value)
  //validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`)
  }

  //check if won
  if(guess === winningNum) {   
    gameOver(true, `${winningNum} is correct, YOU WIN!`)
  } else {
    //wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0) {
      //game over - lost   
    gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)
    } else {
      //game continues - answer wrong
      //clear input
      guessInput.value = '';
      //tell player wrong guess
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
})

//game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green': color = 'red'

  //disable input
  guessInput.disabled = true
  //change border color
  guessInput.style.borderColor = color
  //set text color
  message.style.color = color
 //set message
  setMessage(msg)

  //Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min)
}

//set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}

