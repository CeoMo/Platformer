/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/img/astronaut.gif":
/*!*******************************!*\
  !*** ./src/img/astronaut.gif ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b4dc19b81cf00e38f6fb487711b6ed20.gif");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9720169bb711f3c6b0ed0877c200bfa8.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7d125b1031f4a20ff86322b117ffa545.png");

/***/ }),

/***/ "./src/img/red_middle_animated.gif":
/*!*****************************************!*\
  !*** ./src/img/red_middle_animated.gif ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "485192536e64024c2afe154769d7e623.gif");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_astronaut_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/astronaut.gif */ "./src/img/astronaut.gif");
/* harmony import */ var _img_red_middle_animated_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/red_middle_animated.gif */ "./src/img/red_middle_animated.gif");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 1.5;
var levelCompleted = false;
var levelAnnouncement = true;
var animationId;
var isPaused = false;
var gameStarted = false;

// Load the sunset GIF as a background
var sunsetGif = new Image();
sunsetGif.src = _img_red_middle_animated_gif__WEBPACK_IMPORTED_MODULE_3__["default"];
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 1
    };
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = _img_astronaut_gif__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0;
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);
  return GenericObject;
}();
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backgroundImage = createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var player, platforms, genericObjects, scrollOffset;
function initializeGame() {
  player = new Player();
  scrollOffset = 0;
  levelCompleted = false;
  levelAnnouncement = true;

  // Platforms aligned across the bottom of the canvas
  platforms = [new Platform({
    x: -1,
    y: canvas.height - platformImage.height,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: canvas.height - platformImage.height,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 - 6,
    y: canvas.height - platformImage.height,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 - 9,
    y: canvas.height - platformImage.height,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 - 12,
    y: canvas.height - platformImage.height,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 - 15,
    y: canvas.height - platformImage.height,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: backgroundImage
  })];
}
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
function animate() {
  animationId = requestAnimationFrame(animate);

  // Draw the sunset GIF as the background
  c.drawImage(sunsetGif, 0, 0, canvas.width, canvas.height);

  // Clear any previous drawings
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // Draw other background objects and platforms
  genericObjects.forEach(function (genericObject) {
    return genericObject.draw();
  });
  platforms.forEach(function (platform) {
    return platform.draw();
  });
  player.update();
  if (levelAnnouncement) {
    c.font = '30px Arial';
    c.fillStyle = 'black';
    c.fillText('Level 1', canvas.width / 2 - 50, 50);
    setTimeout(function () {
      return levelAnnouncement = false;
    }, 2000);
  }
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        return platform.position.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x -= 2;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        return platform.position.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        return genericObject.position.x += 2;
      });
    }
  }
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
  if (scrollOffset > 2000 && !levelCompleted) {
    levelCompleted = true;
  }
  if (levelCompleted) {
    c.font = '30px Arial';
    c.fillStyle = 'green';
    c.fillText('Level 1 Completed!', canvas.width / 2 - 100, 100);
  }
}
function startGame() {
  if (!gameStarted) {
    initializeGame();
    animate();
    gameStarted = true;
    isPaused = false;
  } else if (isPaused) {
    isPaused = false;
    animate();
  }
}
function pauseGame() {
  if (!isPaused) {
    isPaused = true;
    cancelAnimationFrame(animationId);
  }
}
function resetGame() {
  cancelAnimationFrame(animationId);
  initializeGame();
  gameStarted = false;
  isPaused = false;
  animate();
}

// Initialize game state on page load
initializeGame();

// Event listeners for controls
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('pauseButton').addEventListener('click', pauseGame);
document.getElementById('resetButton').addEventListener('click', resetGame);
addEventListener('keydown', function (event) {
  if (!isPaused) {
    switch (event.key) {
      case 'a':
        keys.left.pressed = true;
        break;
      case 'd':
        keys.right.pressed = true;
        break;
      case 'w':
        if (player.velocity.y === 0) {
          // Only jump if on a platform
          player.velocity.y -= 20;
        }
        break;
    }
  }
});
addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'a':
      keys.left.pressed = false;
      break;
    case 'd':
      keys.right.pressed = false;
      break;
  }
});
/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map