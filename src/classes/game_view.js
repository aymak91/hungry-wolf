const Game = require('./game')

class GameView {
    constructor(game) {
        this.game = game;
    }

    start() {
        this.game.drawBoard();
    }

}

module.exports = GameView;