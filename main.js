/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/spritesheet.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spritesheet.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"157c883f385d1ea3838e5d880b47581c.png\";\n\n//# sourceURL=webpack:///./src/assets/images/spritesheet.png?");

/***/ }),

/***/ "./src/classes/entity.js":
/*!*******************************!*\
  !*** ./src/classes/entity.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const spriteSheet = __webpack_require__(/*! ../assets/images/spritesheet.png */ \"./src/assets/images/spritesheet.png\");\r\n\r\nclass Entity {\r\n    constructor(pos, currentLevel, canvas) {\r\n        this.pos = pos;\r\n        this.canvas = canvas\r\n        this.board = currentLevel;\r\n        this.destination = null;\r\n        this.oldPos = null;\r\n        this.img = new Image();\r\n        this.img.src = spriteSheet;\r\n    }\r\n\r\n    validMove(destination) {\r\n        return this.currentLevel.board[destination.row][destination.col] < 1;\r\n    }\r\n}\r\n\r\nmodule.exports = Entity;\n\n//# sourceURL=webpack:///./src/classes/entity.js?");

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const spriteSheet = require('../assets/images/spritesheet.png');\r\n\r\nclass Game {\r\n    constructor(boardCanvas, entityCanvas, boardState) {\r\n        this.boardCanvas = boardCanvas;\r\n        this.entityCanvas = entityCanvas;\r\n        this.boardState = boardState;\r\n        \r\n        // this.img = new Image();\r\n        // this.img.src = './images/spritesheet.png';\r\n        this.pos = [1,1];\r\n\r\n        this.drawBoard = this.drawBoard.bind(this);\r\n    }\r\n\r\n    drawBoard() {\r\n        const rows = 9;\r\n        const cols = 9;\r\n        const tileSize = 64;\r\n\r\n        let ctx = this.boardCanvas.getContext('2d');\r\n        this.boardCanvas.width = tileSize * cols;\r\n        this.boardCanvas.height = tileSize * rows;\r\n        ctx.mozImageSmoothingEnabled = false;\r\n        ctx.webkitImageSmoothingEnabled = false;\r\n        ctx.msImageSmoothingEnabled = false;\r\n        ctx.imageSmoothingEnabled = false;\r\n\r\n\r\n        let img = new Image();\r\n        img.src = './dist/images/spritesheet.png';\r\n\r\n\r\n        const board = [\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0]\r\n        ];  \r\n\r\n        img.onload = function () {\r\n            for (let i = 0; i < rows; i++) {\r\n                for (let j = 0; j < cols; j++) {\r\n                    switch (board[i][j]) {\r\n                        case 0:\r\n                            ctx.drawImage(\r\n                                img, 0, 0, 64, 64,\r\n                                j * tileSize, i * tileSize, tileSize, tileSize\r\n                            );\r\n                            break;\r\n                        default:\r\n                            break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    drawWolf(board) {\r\n        const rows = 9;\r\n        const cols = 9;\r\n        const tileSize = 64;\r\n\r\n        let ctx = this.entityCanvas.getContext('2d');\r\n        this.entityCanvas.width = tileSize * cols;\r\n        this.entityCanvas.height = tileSize * rows;\r\n        ctx.mozImageSmoothingEnabled = false;\r\n        ctx.webkitImageSmoothingEnabled = false;\r\n        ctx.msImageSmoothingEnabled = false;\r\n        ctx.imageSmoothingEnabled = false;\r\n\r\n\r\n        let img = new Image();\r\n        img.src = './dist/images/spritesheet.png';\r\n\r\n        img.onload = function () {\r\n            for (let i = 0; i < rows; i++) {\r\n                for (let j = 0; j < cols; j++) {\r\n                    switch (board[i][j]) {\r\n                        case 1:\r\n                            ctx.drawImage(\r\n                                img, 65, 0, 64, 64,\r\n                                j * tileSize, i * tileSize, tileSize, tileSize\r\n                            );\r\n                            break;\r\n                        default:\r\n                            break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    keyBinds(e) {\r\n        switch (e.keyCode) {\r\n            case 87: // W\r\n                if (this.wolf.state === 'IDLE') {\r\n                    this.wolf.state = 'MOVING_UP';\r\n                }\r\n            case 65: // A\r\n                if (this.wolf.state === 'IDLE') {\r\n                    this.wolf.state = 'MOVING_LEFT';\r\n                }\r\n            case 83: // S\r\n                if (this.wolf.state === 'IDLE') {\r\n                    this.wolf.state = 'MOVING_LEFT';\r\n                }\r\n            case 68: // D\r\n                if (this.wolf.state === 'IDLE') {\r\n                    this.wolf.state = 'MOVING_LEFT';\r\n                }\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/game_view.js":
/*!**********************************!*\
  !*** ./src/classes/game_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/classes/game.js\")\r\n\r\nclass GameView {\r\n    constructor(game, wolfState) {\r\n        this.game = game;\r\n        this.wolfState = wolfState;\r\n    }\r\n\r\n    start(wolfState) {\r\n        this.game.drawBoard();\r\n        this.game.drawWolf(wolfState);\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/classes/game_view.js?");

/***/ }),

/***/ "./src/classes/wolf.js":
/*!*****************************!*\
  !*** ./src/classes/wolf.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Entity = __webpack_require__(/*! ./entity */ \"./src/classes/entity.js\");\r\n\r\nclass Wolf {\r\n    constructor(wolfPos) {\r\n        this.wolfPos = wolfPos;\r\n        this.state = 'IDLE';\r\n        \r\n        this.board = [\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0]\r\n        ];\r\n\r\n        const rows = 9;\r\n        const cols = 9;\r\n\r\n        for (let i = 0; i < rows; i++) {\r\n            for (let j = 0; j < cols; j++) {\r\n                if (wolfPos[0] === i && wolfPos[1] === j) {\r\n                    this.board[i][j] = 1;\r\n                }\r\n            }\r\n        }\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = Wolf;\n\n//# sourceURL=webpack:///./src/classes/wolf.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\r\nconst GameView = __webpack_require__(/*! ./classes/game_view */ \"./src/classes/game_view.js\");\r\nconst Wolf = __webpack_require__(/*! ./classes/wolf */ \"./src/classes/wolf.js\")\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const boardCanvas = document.getElementById('board-canvas');\r\n    const entityCanvas = document.getElementById('entity-canvas');\r\n    const attackCanvas = document.getElementById('attack-canvas');\r\n    \r\n    \r\n    const game = new Game(boardCanvas, entityCanvas);\r\n    let wolf = new Wolf([1,3]);\r\n    let wolfState = wolf.board;\r\n    const gameView = new GameView(game, wolfState);\r\n\r\n\r\n    gameView.start(wolfState);\r\n\r\n    \r\n    // boardCanvas.width = 512;\r\n    // boardCanvas.height = 512;\r\n    \r\n    \r\n    // TESTING //\r\n    console.log(\"Webpack is working!\");\r\n    window.pos = game.pos;\r\n    window.wolfState = wolf;\r\n    // TESTING //\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });