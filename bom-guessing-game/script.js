// Generate a random number between 0 and 100
let numberRange = Math.floor(Math.random() * 11);
const div = document.getElementById("app");
const h1 = document.createElement("h1");
h1.textContent = "Start Game";
div.appendChild(h1);

let playGame = document.createElement("button");
playGame.textContent = "Play Game";
div.appendChild(playGame);

playGame.addEventListener("click", () => {
  let userGuess = window.prompt("Try to guess the number (0-20)");
  
  if (userGuess != null) {
    // Create a paragraph to display messages
    let message = document.createElement("p");
    div.appendChild(message);

    if (userGuess < numberRange) {
      message.textContent = "Too low! Try another number.";
    } else if (userGuess > numberRange) {
      message.textContent = "Too high! Try a lower number.";
    } else {
      message.textContent = "Congratulations! You've guessed the number!";
    }
  }
});
