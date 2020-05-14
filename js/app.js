const game = new Game();
const beginGameButton = document.getElementById("begin-game");

/**
 * * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginGameButton.addEventListener("click", (e) => {
  game.startGame();
  beginGameButton.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});

/**
 * * Listens for keyboard presses
 */
document.addEventListener("keydown", (e) => {
  game.handleKeydown(e);
});
