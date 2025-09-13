
const secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("result");

  if (userGuess === secretNumber) {
    result.textContent = "🎉 Correct! You guessed it!";
    result.style.color = "green";
  } else if (userGuess > secretNumber) {
    result.textContent = "📉 Too high! Try again.";
    result.style.color = "red";
  } else {
    result.textContent = "📈 Too low! Try again.";
    result.style.color = "red";
  }
}
