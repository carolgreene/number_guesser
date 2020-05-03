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
    winningNum = 2,
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

//listener for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value)

  //validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }


  //check if won
  if(guess === winningNum) {
    //disable input
    guessInput.disabled = true
    //change border color
    guessInput.style.borderColor = 'green'
   //set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
  } else {

  }
})

//set message
function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}