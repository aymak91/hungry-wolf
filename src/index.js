const Game = require("./classes/game");
const GameView = require("./classes/game_view");

document.addEventListener("DOMContentLoaded", () => {
    const boardCanvas = document.getElementById('board-canvas');
    const entityCanvas = document.getElementById('entity-canvas');
    const attackCanvas = document.getElementById('attack-canvas');
    const game = new Game(boardCanvas);
    const gameView = new GameView(game);


    gameView.start();

    
    // boardCanvas.width = 512;
    // boardCanvas.height = 512;
    
    
    // TESTING //
    console.log("Webpack is working!");
    
    // TESTING //


});