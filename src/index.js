// Create your game here!
//Part
// Generate a random number between 0 and 100
let numberRange = Math.floor(Math.random() * 101);
const div = document.getElementById("app");
const h1 = document.createElement("h1");
h1.textContent = "Start Game";
div.appendChild(h1);
let playGame = document.createElement("button");
playGame.textContent = "Play Game";
div.appendChild(playGame);
playGame = window.prompt("Try attempt");
if (playGame != null) {
  let pTag = document.createElement("pTag");
  div.appendChild(pTag);
  pTag.textContent = playGame;
  if (playGame < numberRange) {
    let p = document.createElement("p");
    p.textContent = "Too low! Try another number";
  } else if (playGame > numberRange) {
    let p1 = document.createElement("p");
    p1.textContent = "Too high! Try lower number";
  } else {
    p.textContent = "Congratulations!";
  }
}

