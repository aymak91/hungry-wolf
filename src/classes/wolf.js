const Entity = require('./entity');

class Wolf {
    constructor(wolfPos) {
        this.wolfPos = wolfPos;
        this.state = 'IDLE';
        
        this.board = [
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

        const rows = 9;
        const cols = 9;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (wolfPos[0] === i && wolfPos[1] === j) {
                    this.board[i][j] = 1;
                }
            }
        }

    }
}

module.exports = Wolf;