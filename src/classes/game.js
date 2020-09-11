// const spriteSheet = require('../assets/images/spritesheet.png');

class Game {
    constructor(boardCanvas) {
        this.boardCanvas = boardCanvas;



      
        
        // this.img = new Image();
        // this.img.src = './images/spritesheet.png';

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
        img.src = './images/spritesheet.png';


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
                                img, 0, 0, 16, 16,
                                j * tileSize, i * tileSize, tileSize, tileSize
                            );
                            break;
                        default:
                            break;
                    }
                }
            }
        }

        // let j = 0;
        // let i = 0;

        // debugger
        
        // img.onload = function () {
        //     ctx.drawImage(
        //         img, 0, 0, 16, 16,
        //         0 * tileSize, 0 * tileSize, tileSize, tileSize
        //     );
        //     ctx.drawImage(
        //         img, 0, 0, 16, 16,
        //         1 * tileSize, 0 * tileSize, tileSize, tileSize
        //     );
        // }

        // ctx.beginPath();
        // ctx.fillStyle = 'red';
        // ctx.fillRect(0,0,100,100)


    }

}

module.exports = Game;