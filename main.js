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

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const spriteSheet = require('../assets/images/spritesheet.png');\r\n\r\nclass Game {\r\n    constructor(boardCanvas) {\r\n        this.boardCanvas = boardCanvas;\r\n\r\n\r\n\r\n      \r\n        \r\n        // this.img = new Image();\r\n        // this.img.src = './images/spritesheet.png';\r\n\r\n        this.drawBoard = this.drawBoard.bind(this);\r\n    }\r\n\r\n    drawBoard() {\r\n        const rows = 9;\r\n        const cols = 9;\r\n        const tileSize = 64;\r\n\r\n        let ctx = this.boardCanvas.getContext('2d');\r\n        this.boardCanvas.width = tileSize * cols;\r\n        this.boardCanvas.height = tileSize * rows;\r\n        ctx.mozImageSmoothingEnabled = false;\r\n        ctx.webkitImageSmoothingEnabled = false;\r\n        ctx.msImageSmoothingEnabled = false;\r\n        ctx.imageSmoothingEnabled = false;\r\n\r\n\r\n        let img = new Image();\r\n        img.src = './images/spritesheet.png';\r\n\r\n\r\n        const board = [\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0],\r\n            [0, 0, 0, 0, 0, 0, 0, 0, 0]\r\n        ];  \r\n\r\n        img.onload = function () {\r\n            for (let i = 0; i < rows; i++) {\r\n                for (let j = 0; j < cols; j++) {\r\n                    switch (board[i][j]) {\r\n                        case 0:\r\n                            ctx.drawImage(\r\n                                img, 0, 0, 16, 16,\r\n                                j * tileSize, i * tileSize, tileSize, tileSize\r\n                            );\r\n                            break;\r\n                        default:\r\n                            break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        // let j = 0;\r\n        // let i = 0;\r\n\r\n        // debugger\r\n        \r\n        // img.onload = function () {\r\n        //     ctx.drawImage(\r\n        //         img, 0, 0, 16, 16,\r\n        //         0 * tileSize, 0 * tileSize, tileSize, tileSize\r\n        //     );\r\n        //     ctx.drawImage(\r\n        //         img, 0, 0, 16, 16,\r\n        //         1 * tileSize, 0 * tileSize, tileSize, tileSize\r\n        //     );\r\n        // }\r\n\r\n        // ctx.beginPath();\r\n        // ctx.fillStyle = 'red';\r\n        // ctx.fillRect(0,0,100,100)\r\n\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/game_view.js":
/*!**********************************!*\
  !*** ./src/classes/game_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/classes/game.js\")\r\n\r\nclass GameView {\r\n    constructor(game) {\r\n        this.game = game;\r\n    }\r\n\r\n    start() {\r\n        this.game.drawBoard();\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/classes/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\r\nconst GameView = __webpack_require__(/*! ./classes/game_view */ \"./src/classes/game_view.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const boardCanvas = document.getElementById('board-canvas');\r\n    const entityCanvas = document.getElementById('entity-canvas');\r\n    const attackCanvas = document.getElementById('attack-canvas');\r\n    const game = new Game(boardCanvas);\r\n    const gameView = new GameView(game);\r\n\r\n\r\n    gameView.start();\r\n\r\n    \r\n    // boardCanvas.width = 512;\r\n    // boardCanvas.height = 512;\r\n    \r\n    \r\n    // TESTING //\r\n    console.log(\"Webpack is working!\");\r\n    \r\n    // TESTING //\r\n\r\n\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });