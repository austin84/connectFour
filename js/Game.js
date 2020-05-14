class Game {
  constructor() {
    this.board = new Board();
    this.players = createPlayers();
    this.ready = false;
  }

  /**
   * Creates two player objects
   * @return {Array} An array of two player objects.
   */
  createPlayers() {
    let players = [
      new Player("Player1", 1, "#e15258", true),
      new Player("Player2", 2, "#e59a13"),
    ];
    return players;
  }

  /**
   * Gets game ready for play
   */
  startGame() {}
}
