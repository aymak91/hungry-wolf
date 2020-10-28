const Constants = require('../util/constants');
const Util = require('../util/game_util');
const LevelOne = require('../util/levels/level1');
const Player = require('./player');
const Farmer = require('./farmer');
const spriteSheet = require('../assets/images/spritesheet.png');

class Game {
    constructor(boardCanvas, animateCanvas, attackCanvas, levels) {
        this.levels = levels
        this.kills = 0;
        this.limit = 1;
        this.spawnAmount = 1;
        this.spawnCounter = 0;
        this.currentLevel = levels[0];
        this.boardCanvas = boardCanvas;
        this.animateCanvas = animateCanvas;
        this.animateCanvas.width = this.currentLevel.tileSize * this.currentLevel.cols;
        this.animateCanvas.height = this.currentLevel.tileSize * this.currentLevel.rows;
        this.attackCanvas = attackCanvas;
        this.attackCanvas.width = this.currentLevel.tileSize * this.currentLevel.cols;
        this.attackCanvas.height = this.currentLevel.tileSize * this.currentLevel.rows;
        this.aniCtx = this.animateCanvas.getContext('2d');
        this.attackCtx = this.attackCanvas.getContext('2d');
        this.player = new Player({ col: 5, row: 5 }, this.currentLevel, this.animateCanvas, this.attackCanvas);
        this.farmers = [];
        this.img = new Image();
        this.img.src = spriteSheet;
        this.keyBinds = this.keyBinds.bind(this);
        this.increase = true;
    }    

    allObjects() {
        return [].concat(this.player).concat(this.farmers);
    }

    allEnemies() {
        return [].concat(this.farmers);
    }

    allOccupiedTiles() {
        let occupiedTiles = [];
        occupiedTiles.push(this.player.pos);
        this.farmers.forEach(farmer => {
            occupiedTiles.push(farmer.pos);
        })
        return occupiedTiles;
    }

    reset() {
        this.farmers = [];
        this.player.pos = {col: 5, row: 5};
        this.kills = 0;
        this.limit = 1;
        this.spawnAmount = 1;
        this.spawnCounter = 3;
        this.addFarmers();
    }

    checkGameOver() {
        let playerPosX = this.player.pos.col;
        let playerPosY = this.player.pos.row;
        for (let idx = 0; idx < this.farmers.length; idx++) {
            let farmerPosX = this.farmers[idx].pos.col;
            let farmerPosY = this.farmers[idx].pos.row;
            if (farmerPosX === playerPosX && farmerPosY === playerPosY) {
                return true;
            }
        }
        return false;
    }

    randomPos() {
        let idx = Util.randomInt(0, Util.outerPos.length); 
        let posArr = Util.outerPos[idx];
        let pos = { col: posArr[0], row: posArr[1] }
        return pos;
       
    }

    addFarmers() {
        if (this.farmers.length < this.limit) {
            for (let i = 0; i < this.spawnAmount; i++) {
                this.farmers.push(new Farmer(this.randomPos(), this.currentLevel, this.animateCanvas, this.player.pos));
            }
        }
    }
    
    updateBoard() {
        if (Number.isInteger(this.player.pos.row) && Number.isInteger(this.player.pos.col)) {
            this.currentLevel.board[this.player.pos.row][this.player.pos.col] = -1;
        }

        this.farmers.forEach(farmer => {
            if (Number.isInteger(farmer.pos.row) && Number.isInteger(farmer.pos.col)) {
                this.currentLevel.board[farmer.pos.row][farmer.pos.col] = -2;
            }
        })
    }

    increaseDifficulty() {
        if (this.kills > 0) {
            if (this.kills % 6 === 0) {
                this.limit += 1;
                this.increase = false;
            }
            if (this.kills % 12 === 0) {
                this.spawnAmount += 1;
            }
        }
    }

    step(timeDelta) {      
        this.aniCtx.clearRect(0, 0, 5000, 5000);
        
        if (this.player.state.includes('ATTACK')) {
            this.player.drawAttack();            
            this.farmers.forEach((farmer, idx) => {
                if (this.player.attack(farmer)) {
                    this.farmers[idx] = '';
                    this.currentLevel.board[farmer.pos.row][farmer.pos.col] = 0;
                    this.kills += 1;
                    this.increase = true;
                }
            })
            this.farmers = this.farmers.filter(Boolean);
        }
        this.allObjects().forEach(obj => {
            obj.move(timeDelta);
        })
     
        if (this.spawnCounter <= 0) {
            this.spawnCounter = 3;
            this.addFarmers();
            if (this.increase) {
                this.increaseDifficulty();
            }
        } 
        this.drawEntities();
        this.updateBoard();
    }

    keyBinds(e) {
        // console.log('pressed');
        switch (e.keyCode) {
            case 87: // W
                if (this.player.state === 'IDLE' && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.player.state = 'MOVING_UP';
                    this.player.destination = { col: this.player.pos.col, row: this.player.pos.row - 1 };
                    this.player.oldPos = { col: this.player.pos.col, row: this.player.pos.row };
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
                break;
            case 65: // A
                if (this.player.state === 'IDLE' && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.player.state = 'MOVING_LEFT';
                    this.player.destination = { col: this.player.pos.col - 1, row: this.player.pos.row };
                    this.player.oldPos = { col: this.player.pos.col, row: this.player.pos.row };
                    this.farmers.forEach(farmer => {

                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
                break;
            case 83: // S
                if (this.player.state === 'IDLE' && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.player.state = 'MOVING_DOWN';
                    this.player.destination = { col: this.player.pos.col, row: this.player.pos.row + 1 };
                    this.player.oldPos = { col: this.player.pos.col, row: this.player.pos.row };
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
                break;
            case 68: // D
                if (this.player.state === 'IDLE' && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.player.state = 'MOVING_RIGHT';
                    this.player.destination = { col: this.player.pos.col + 1, row: this.player.pos.row };
                    this.player.oldPos = { col: this.player.pos.col, row: this.player.pos.row };
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
                break;
            case 38: // UpArrow
                e.preventDefault();
                if (this.player.state === 'IDLE' && this.player.attacking <= 0 && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.swordAudio();
                    this.player.state = 'ATTACK_UP';
                    this.player.attacking = 100;
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
            case 37: // LeftArrow
                e.preventDefault();
                if (this.player.state === 'IDLE' && this.player.attacking <= 0 && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.swordAudio();
                    this.player.state = 'ATTACK_LEFT';
                    this.player.attacking = 100;
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
            case 40: // DownArrow
                e.preventDefault();
                if (this.player.state === 'IDLE' && this.player.attacking <= 0 && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.swordAudio();
                    this.player.state = 'ATTACK_DOWN';
                    this.player.attacking = 100;
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
            case 39: // RightArrow
                e.preventDefault();
                if (this.player.state === 'IDLE' && this.player.attacking <= 0 && this.farmers.every(farmer => farmer.state === 'IDLE')) {
                    this.swordAudio();
                    this.player.state = 'ATTACK_RIGHT';
                    this.player.attacking = 100;
                    this.farmers.forEach(farmer => {
                        farmer.state = 'MOVING';
                    });
                    this.spawnCounter -= 1;
                }
            default:
                break;
        }
    }

    bindKeyListeners() {
        document.addEventListener("keydown", this.keyBinds);
    }

    removeKeyListeners() {
        document.removeEventListener("keydown", this.keyBinds);
    }

    drawBoard(level) {
        level.drawLevel(this.boardCanvas);
    }

    drawEntities() {
        this.allObjects().forEach(obj => obj.draw(this.currentLevel));
    }

    swordAudio() { //“Sound effects obtained from https://www.zapsplat.com“
        let sound = document.getElementById("sword-slash");
        sound.play();
    }
}

module.exports = Game