// const spriteSheet = require('../assets/images/spritesheet.png');

class Game {
    constructor(boardCanvas, entityCanvas, boardState) {
        this.boardCanvas = boardCanvas;
        this.entityCanvas = entityCanvas;
        this.boardState = boardState;
        
        // this.img = new Image();
        // this.img.src = './images/spritesheet.png';
        this.pos = [1,1];

        this.drawBoard = this.drawBoard.bind(this);
    }

    drawBoard() {
        const rows = 9;
        const cols = 9;
        const tileSize = 64;

        let ctx = this.boardCanvas.getContext('2d');
        this.boardCanvas.width = tileSize * cols;
        this.boardCanvas.height = tileSize * rows;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;


        let img = new Image();
        img.src = './dist/images/spritesheet.png';


        const board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];  

        img.onload = function () {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    switch (board[i][j]) {
                        case 0:
                            ctx.drawImage(
                                img, 0, 0, 64, 64,
                                j * tileSize, i * tileSize, tileSize, tileSize
                            );
                            break;
                        default:
                            break;
                    }
                }
            }
        }

    }

    drawWolf(board) {
        const rows = 9;
        const cols = 9;
        const tileSize = 64;

        let ctx = this.entityCanvas.getContext('2d');
        this.entityCanvas.width = tileSize * cols;
        this.entityCanvas.height = tileSize * rows;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;


        let img = new Image();
        img.src = './dist/images/spritesheet.png';

        img.onload = function () {
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    switch (board[i][j]) {
                        case 1:
                            ctx.drawImage(
                                img, 65, 0, 64, 64,
                                j * tileSize, i * tileSize, tileSize, tileSize
                            );
                            break;
                        default:
                            break;
                    }
                }
            }
        }

    }

    keyBinds(e) {
        switch (e.keyCode) {
            case 87: // W
                if (this.wolf.state === 'IDLE') {
                    this.wolf.state = 'MOVING_UP';
                }
            case 65: // A
                if (this.wolf.state === 'IDLE') {
                    this.wolf.state = 'MOVING_LEFT';
                }
            case 83: // S
                if (this.wolf.state === 'IDLE') {
                    this.wolf.state = 'MOVING_LEFT';
                }
            case 68: // D
                if (this.wolf.state === 'IDLE') {
                    this.wolf.state = 'MOVING_LEFT';
                }
        }
    }

}

module.exports = Game;