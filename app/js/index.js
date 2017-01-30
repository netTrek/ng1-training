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
	console.info(angular);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmY0MDYwOGUyMDAxYjI0MGMzNDQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3V0aWxzL0NvbG9yQ2hhbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSw4Q0FBNkM7O0FBRzdDLDBDQUE2QixDQUFpQyxDQUFDO0FBRS9ELEtBQUksRUFBRSxHQUFnQixJQUFJLDJCQUFZLENBQWdCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlGLEdBQUUsQ0FBQyxXQUFXLENBQUUsU0FBUyxDQUFFLENBQUM7QUFFNUIsUUFBTyxDQUFDLElBQUksQ0FBRyxPQUFPLENBQUUsQ0FBQzs7Ozs7OztBQ1J6Qjs7SUFFRzs7QUFFSDtLQUVJLHNCQUFzQixNQUFrQjtTQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1NBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUcsTUFBTSxDQUFFLENBQUM7U0FDdkIsSUFBSSxDQUFDLElBQUksRUFBRyxDQUFDO0tBQ2pCLENBQUM7S0FFRCxrQ0FBVyxHQUFYLFVBQWMsS0FBc0I7U0FBdEIscUJBQXNCLEdBQXRCLGVBQXNCO1NBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUcsS0FBSyxDQUFFLENBQUM7U0FDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNwQyxDQUFDO0tBRU8sMkJBQUksR0FBWjtTQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN2QixDQUFDO0tBR0wsbUJBQUM7QUFBRCxFQUFDO0FBakJZLHFCQUFZLGVBaUJ4QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJmNDA2MDhlMjAwMWIyNDBjMzQ0IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cblxuXG5pbXBvcnQgeyBDb2xvckNoYW5nZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbHMvQ29sb3JDaGFuZ2VyJztcblxudmFyIGgxOkNvbG9yQ2hhbmdlciA9IG5ldyBDb2xvckNoYW5nZXIgKCA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gxJylbMF0pO1xuaDEuY2hhbmdlQ29sb3IoICcjOTdmZmIxJyApO1xuXG5jb25zb2xlLmluZm8gKCBhbmd1bGFyICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXgudHMiLCIvKipcbiAqIENyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAxNi4wNS4xNi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgQ29sb3JDaGFuZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yICggcHJpdmF0ZSB0YXJnZXQ6SFRNTEVsZW1lbnQgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggdGFyZ2V0ICk7XG4gICAgICAgIHRoaXMuaW5pdCAoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb2xvciAoIGNvbG9yOnN0cmluZyA9IFwiZ3JlZW5cIiApOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCBjb2xvciApO1xuICAgICAgICB0aGlzLnRhcmdldC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcigpO1xuICAgIH1cblxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvdXRpbHMvQ29sb3JDaGFuZ2VyLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==