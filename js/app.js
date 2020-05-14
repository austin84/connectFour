const game = new Game();
const beginGameButton = document.getElementById("begin-game");

/**
 * * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGameButton.addEventListener("click", (e) => {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
