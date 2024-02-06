// Generate random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Game variables
  let secretNumber;
  let guessesLeft;
  let guesses = [];
  
  // Initialize game
  function initGame() {
    secretNumber = getRandomNumber(1, 100);
    guessesLeft = 10;
    guesses = [];
    document.getElementById('message').innerText = '';
    document.getElementById('guesses').innerText = '';
    document.getElementById('remaining').innerText = guessesLeft;
  }
  
  // Check guess
  function checkGuess() {
    let guess = parseInt(document.getElementById('guessField').value);
    
    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      document.getElementById('message').innerText = 'Please enter a number between 1 and 100.';
      return;
    }
  
    // Check if the guess is correct
    if (guess === secretNumber) {
      document.getElementById('message').innerText = `Congratulations! The number ${secretNumber} is correct!`;
    } else {
      guesses.push(guess);
      document.getElementById('guesses').innerText = guesses.join(', ');
      guessesLeft--;
      document.getElementById('remaining').innerText = guessesLeft;
  
      // Check if the player has guesses left
      if (guessesLeft === 0) {
        document.getElementById('message').innerText = `Sorry! You're out of guesses. The correct number was ${secretNumber}.`;
      } else {
        let hint = guess < secretNumber ? 'too low' : 'too high';
        document.getElementById('message').innerText = `The number ${guess} is ${hint}. Try again!`;
      }
    }
  }
  
  // Initialize game
  initGame();
  
