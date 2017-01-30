/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/main.d.ts" />
	"use strict";
	var ColorChanger_1 = __webpack_require__(1);
	var h1 = new ColorChanger_1.ColorChanger(document.getElementsByTagName('h1')[0]);
	h1.changeColor('#97ffb1');


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by suenlue on 16.05.16.
	 */
	"use strict";
	var ColorChanger = (function () {
	    function ColorChanger(target) {
	        this.target = target;
	        console.log(target);
	        this.init();
	    }
	    ColorChanger.prototype.changeColor = function (color) {
	        if (color === void 0) { color = "green"; }
	        console.log(color);
	        this.target.style.color = color;
	    };
	    ColorChanger.prototype.init = function () {
	        this.changeColor();
	    };
	    return ColorChanger;
	}());
	exports.ColorChanger = ColorChanger;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTBlZTc3MGZjYjhmODRiMmI3OTQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3V0aWxzL0NvbG9yQ2hhbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSw4Q0FBNkM7O0FBRTdDLDBDQUEyQixDQUFpQyxDQUFDO0FBRTdELEtBQUksRUFBRSxHQUFnQixJQUFJLDJCQUFZLENBQWdCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlGLEdBQUUsQ0FBQyxXQUFXLENBQUUsU0FBUyxDQUFFLENBQUM7Ozs7Ozs7QUNMNUI7O0lBRUc7O0FBRUg7S0FFSSxzQkFBc0IsTUFBa0I7U0FBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtTQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFHLE1BQU0sQ0FBRSxDQUFDO1NBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUcsQ0FBQztLQUNqQixDQUFDO0tBRUQsa0NBQVcsR0FBWCxVQUFjLEtBQXNCO1NBQXRCLHFCQUFzQixHQUF0QixlQUFzQjtTQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFHLEtBQUssQ0FBRSxDQUFDO1NBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDcEMsQ0FBQztLQUVPLDJCQUFJLEdBQVo7U0FDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdkIsQ0FBQztLQUdMLG1CQUFDO0FBQUQsRUFBQztBQWpCWSxxQkFBWSxlQWlCeEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMGVlNzcwZmNiOGY4NGIyYjc5NCIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5cbmltcG9ydCB7Q29sb3JDaGFuZ2VyfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbHMvQ29sb3JDaGFuZ2VyJztcblxudmFyIGgxOkNvbG9yQ2hhbmdlciA9IG5ldyBDb2xvckNoYW5nZXIgKCA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gxJylbMF0pO1xuaDEuY2hhbmdlQ29sb3IoICcjOTdmZmIxJyApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LnRzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMTYuMDUuMTYuXG4gKi9cblxuZXhwb3J0IGNsYXNzIENvbG9yQ2hhbmdlciB7XG5cbiAgICBjb25zdHJ1Y3RvciAoIHByaXZhdGUgdGFyZ2V0OkhUTUxFbGVtZW50ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoIHRhcmdldCApO1xuICAgICAgICB0aGlzLmluaXQgKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29sb3IgKCBjb2xvcjpzdHJpbmcgPSBcImdyZWVuXCIgKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nICggY29sb3IgKTtcbiAgICAgICAgdGhpcy50YXJnZXQuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoKTtcbiAgICB9XG5cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL3V0aWxzL0NvbG9yQ2hhbmdlci50cyJdLCJzb3VyY2VSb290IjoiIn0=