const Game = require('./game')

class GameView {
    constructor(game, wolfState) {
        this.game = game;
        this.wolfState = wolfState;
    }

    start(wolfState) {
        this.game.drawBoard();
        this.game.drawWolf(wolfState);
    }

}

module.exports = GameView;