const Game = require("./classes/game");
const GameView = require("./classes/game_view");
const Wolf = require("./classes/wolf")

document.addEventListener("DOMContentLoaded", () => {
    const boardCanvas = document.getElementById('board-canvas');
    const entityCanvas = document.getElementById('entity-canvas');
    const attackCanvas = document.getElementById('attack-canvas');
    
    
    const game = new Game(boardCanvas, entityCanvas);
    let wolf = new Wolf([1,3]);
    let wolfState = wolf.board;
    const gameView = new GameView(game, wolfState);


    gameView.start(wolfState);

    
    // boardCanvas.width = 512;
    // boardCanvas.height = 512;
    
    
    // TESTING //
    console.log("Webpack is working!");
    window.pos = game.pos;
    window.wolfState = wolf;
    // TESTING //


});