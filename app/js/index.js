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

	"use strict";
	/// <reference path="../typings/main.d.ts" />
	var app_run_1 = __webpack_require__(1);
	var app_config_1 = __webpack_require__(2);
	__webpack_require__(3);
	var AppCtrl_1 = __webpack_require__(4);
	var app;
	(function (app) {
	    var appModule = angular.module('app', ['ngSanitize', 'app.version'])
	        .config(app_config_1.configBlock)
	        .run(app_run_1.runBlock)
	        .controller('AppCtrl', AppCtrl_1.AppCtrl);
	})(app || (app = {}));


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	/** @ngInject */
	runBlock.$inject = ["version", "author", "spielen"];
	function runBlock(version, author, spielen) {
	    console.log('runBlock', version, author, spielen);
	}
	exports.runBlock = runBlock;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	/** @ngInject */
	configBlock.$inject = ["$provide"];
	function configBlock($provide) {
	    console.log('configBlock');
	    $provide.constant('version', 12.3);
	    $provide.value('author', 'saban uenlue');
	}
	exports.configBlock = configBlock;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var app;
	(function (app) {
	    var version;
	    (function (version) {
	        var versionModule = angular.module('app.version', [])
	            .value('spielen', 'ich spiele');
	    })(version = app.version || (app.version = {}));
	})(app || (app = {}));


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/** @ngInject */
	var AppCtrl = (function () {
	    AppCtrl.$inject = ["$scope", "$element"];
	    function AppCtrl($scope, $element) {
	        this.$element = $element;
	        //eigenschaft: string = 'wert';
	        this.eigenschaft = 'neuer <h1>wert!!!</h1>' +
	            '<script>alert(\'test\');</script>';
	        this.foo = 300;
	        this.ba = 300;
	        this.className = 'red';
	        this.imgBase = 'www.planet-wissen.de/sendungen/';
	        this.imgUrl = 'katzen-zwei-junge-100~_v-gseapremiumxl.jpg';
	        this.link = 'http://netTrek.de';
	        this.list = ['saban', 'hans', 'peter'];
	        console.log('myAppCtrl', $scope, $element);
	    }
	    AppCtrl.prototype.out = function (mEvt) {
	        console.log('out', mEvt);
	    };
	    AppCtrl.prototype.over = function (event) {
	        console.log('over', event);
	    };
	    AppCtrl.prototype.enter = function (mEvt) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        console.log('enter', mEvt, args);
	        //this.className = 'yellow';
	    };
	    AppCtrl.prototype.leave = function (event) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        console.log('leave', event, args);
	        //this.className = 'red';
	    };
	    AppCtrl.prototype.chg = function () {
	        console.log('new value of foo', this.foo);
	    };
	    AppCtrl.prototype.sayHello = function () {
	        console.log('sayHello');
	        return '<strong>hello world!</strong>';
	    };
	    AppCtrl.prototype.clickHandler = function () {
	        this.eigenschaft = 'neuer <h1>wert</h1>';
	        this.$element.css('color', 'yellow');
	    };
	    ;
	    return AppCtrl;
	}());
	exports.AppCtrl = AppCtrl;


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY3NjQwYWEwMmJiNDBjZjQ2MDQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDhDQUE2QztBQUM3QyxxQ0FBeUIsQ0FBVyxDQUFDO0FBQ3JDLHdDQUE0QixDQUFjLENBQUM7QUFFM0MscUJBQU8sQ0FDUCxDQUFDLENBRHdDO0FBRXpDLHFDQUF3QixDQUFXLENBQUM7QUFPcEMsS0FBTyxHQUFHLENBWVQ7QUFaRCxZQUFPLEdBQUcsRUFBQyxDQUFDO0tBSVIsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFFO1VBQ2xGLE1BQU0sQ0FBRSx3QkFBVyxDQUFDO1VBQ3BCLEdBQUcsQ0FBRSxrQkFBUSxDQUFFO1VBQ2YsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFFLENBQ25DO0FBSUwsRUFBQyxFQVpNLEdBQUcsS0FBSCxHQUFHLFFBWVQ7Ozs7Ozs7QUN6QkQ7OztBQUNBLG1CQUEyQixTQUFpQixRQUFnQixTQUFlO0tBQ3ZFLFFBQVEsSUFBTSxZQUFhLFNBQVMsUUFBUTs7QUFEaEMsb0JBQVE7Ozs7Ozs7QUNEeEI7OztBQUVBLHNCQUE4QixVQUF5QjtLQUNuRCxRQUFRLElBQU07S0FDZCxTQUFTLFNBQVUsV0FBVztLQUM5QixTQUFTLE1BQU8sVUFBVTs7QUFIZCx1QkFBVzs7Ozs7OztBQ0QzQixLQUFPLEdBQUcsQ0FLVDtBQUxELFlBQU8sR0FBRztLQUFDLFdBQU8sQ0FLakI7S0FMVSxrQkFBTyxFQUFDLENBQUM7U0FFaEIsSUFBSSxhQUFhLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztjQUNsRSxLQUFLLENBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUNuQztLQUNMLENBQUMsRUFMVSxPQUFPLEdBQVAsV0FBTyxLQUFQLFdBQU8sUUFLakI7QUFBRCxFQUFDLEVBTE0sR0FBRyxLQUFILEdBQUcsUUFLVDs7Ozs7OztBQ05EOzs7OENBR0E7S0FpQkksaUJBQWMsUUFDUSxVQUEwQjtTQUExQjs7U0FmdEIsbUJBQWM7YUFDVjtTQUVKLFdBQWM7U0FDZCxVQUFhO1NBQ2IsaUJBQW9CO1NBRXBCLGVBQWtCO1NBQ2xCLGNBQWlCO1NBRWpCLFlBQWU7U0FFZixZQUFpQixDQUFDLFNBQVEsUUFBTztTQUk3QixRQUFRLElBQU0sYUFBYyxRQUFROztLQUd4QyxrQ0FBTSxNQUFpQjtTQUNuQixRQUFRLElBQU0sT0FBTzs7S0FHekIsbUNBQU8sT0FBa0I7U0FDckIsUUFBUSxJQUFNLFFBQVE7O0tBRzFCLG9DQUFRLE1BQWlCO1NBQUU7U0FSdkIsS0FRdUIseUNBQWM7YUFBZDs7U0FDdkIsUUFBUSxJQUFNLFNBQVMsTUFBTTs7O0tBSWpDLG9DQUFRLE9BQWtCO1NBQUU7U0FMeEIsS0FLd0IseUNBQWM7YUFBZDs7U0FDeEIsUUFBUSxJQUFNLFNBQVMsT0FBTzs7O0tBSWxDO1NBQ0ksUUFBUSxJQUFNLG9CQUFvQixLQUFLOztLQUczQztTQUNJLFFBQVEsSUFBTTtTQUNkLE9BQU87O0tBR1g7U0FDSSxLQUFLLGNBQWM7U0FDbkIsS0FBSyxTQUFTLElBQUssU0FBUzs7S0FKaEM7S0FPSjs7QUF0RGEsbUJBQU8iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Njc2NDBhYTAyYmI0MGNmNDYwNCIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vYXBwLnJ1bic7XG5pbXBvcnQgeyBjb25maWdCbG9jayB9IGZyb20gJy4vYXBwLmNvbmZpZyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUnXG5pbXBvcnQgSVNjb3BlID0gYW5ndWxhci5JU2NvcGU7XG5pbXBvcnQgeyBBcHBDdHJsIH0gZnJvbSAnLi9BcHBDdHJsJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwU2NvcGUgZXh0ZW5kcyBJU2NvcGUge1xuICAgIGVpZ2Vuc2NoYWZ0Pzogc3RyaW5nO1xuICAgIGNsaWNrSGFuZGxlcjogRnVuY3Rpb247XG59XG5cbm1vZHVsZSBhcHAge1xuXG4gICAgaW1wb3J0IElTY29wZSA9IGFuZ3VsYXIuSVNjb3BlO1xuICAgIGltcG9ydCBJQXVnbWVudGVkSlF1ZXJ5ID0gYW5ndWxhci5JQXVnbWVudGVkSlF1ZXJ5O1xuICAgIGxldCBhcHBNb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwJywgWyduZ1Nhbml0aXplJywgJ2FwcC52ZXJzaW9uJ10gKVxuICAgICAgICAuY29uZmlnKCBjb25maWdCbG9jaylcbiAgICAgICAgLnJ1biggcnVuQmxvY2sgKVxuICAgICAgICAuY29udHJvbGxlcignQXBwQ3RybCcsIEFwcEN0cmwgKVxuICAgIDtcbiAgICAvL2NvbnNvbGUubG9nICggYXBwTW9kdWxlICk7XG4gICAgLy9jb25zb2xlLmxvZyAoIGFwcE1vZHVsZSA9PT0gYW5ndWxhci5tb2R1bGUoICdhcHAnICkgKTtcblxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXgudHMiLCIvKiogQG5nSW5qZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gcnVuQmxvY2sgKCB2ZXJzaW9uOiBudW1iZXIsIGF1dGhvcjogc3RyaW5nLCBzcGllbGVuOiBzdHJpbmcgKSB7XG4gICAgY29uc29sZS5sb2cgKCAncnVuQmxvY2snICwgdmVyc2lvbiwgYXV0aG9yLCBzcGllbGVuICk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FwcC5ydW4udHMiLCJpbXBvcnQgSVByb3ZpZGVTZXJ2aWNlID0gYW5ndWxhci5hdXRvLklQcm92aWRlU2VydmljZTtcbi8qKiBAbmdJbmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdCbG9jayAoICRwcm92aWRlOiBJUHJvdmlkZVNlcnZpY2UgKSB7XG4gICAgY29uc29sZS5sb2cgKCAnY29uZmlnQmxvY2snICk7XG4gICAgJHByb3ZpZGUuY29uc3RhbnQoICd2ZXJzaW9uJywgMTIuMyApO1xuICAgICRwcm92aWRlLnZhbHVlKCAnYXV0aG9yJywgJ3NhYmFuIHVlbmx1ZScgKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmNvbmZpZy50cyIsIlxubW9kdWxlIGFwcC52ZXJzaW9uIHtcblxuICAgIGxldCB2ZXJzaW9uTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSggJ2FwcC52ZXJzaW9uJywgW10pXG4gICAgICAgIC52YWx1ZSggJ3NwaWVsZW4nLCAnaWNoIHNwaWVsZScpXG4gICAgO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJpbXBvcnQgeyBJQXBwU2NvcGUgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBJQXVnbWVudGVkSlF1ZXJ5ID0gYW5ndWxhci5JQXVnbWVudGVkSlF1ZXJ5O1xuLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGNsYXNzIEFwcEN0cmwge1xuXG4gICAgLy9laWdlbnNjaGFmdDogc3RyaW5nID0gJ3dlcnQnO1xuICAgIGVpZ2Vuc2NoYWZ0ID0gJ25ldWVyIDxoMT53ZXJ0ISEhPC9oMT4nICtcbiAgICAgICAgJzxzY3JpcHQ+YWxlcnQoXFwndGVzdFxcJyk7PC9zY3JpcHQ+JztcblxuICAgIGZvbzogbnVtYmVyID0gMzAwO1xuICAgIGJhOiBudW1iZXIgPSAzMDA7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSAncmVkJztcblxuICAgIGltZ0Jhc2U6IHN0cmluZyA9ICd3d3cucGxhbmV0LXdpc3Nlbi5kZS9zZW5kdW5nZW4vJ1xuICAgIGltZ1VybDogc3RyaW5nID0gJ2thdHplbi16d2VpLWp1bmdlLTEwMH5fdi1nc2VhcHJlbWl1bXhsLmpwZyc7XG5cbiAgICBsaW5rOiBzdHJpbmcgPSAnaHR0cDovL25ldFRyZWsuZGUnO1xuXG4gICAgbGlzdDogc3RyaW5nW10gPSBbJ3NhYmFuJywnaGFucycsJ3BldGVyJ107XG5cbiAgICBjb25zdHJ1Y3RvciAoICRzY29wZTogSUFwcFNjb3BlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSAkZWxlbWVudDogSUF1Z21lbnRlZEpRdWVyeSApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnbXlBcHBDdHJsJyAsICRzY29wZSwgJGVsZW1lbnQgKTtcbiAgICB9XG5cbiAgICBvdXQgKCBtRXZ0PzogTW91c2VFdmVudCApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnb3V0JywgbUV2dCApO1xuICAgIH1cblxuICAgIG92ZXIgKCBldmVudD86IE1vdXNlRXZlbnQgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ292ZXInLCBldmVudCApO1xuICAgIH1cblxuICAgIGVudGVyICggbUV2dD86IE1vdXNlRXZlbnQsIC4uLmFyZ3M6IGFueVtdICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdlbnRlcicsIG1FdnQsIGFyZ3MgKTtcbiAgICAgICAgLy90aGlzLmNsYXNzTmFtZSA9ICd5ZWxsb3cnO1xuICAgIH1cblxuICAgIGxlYXZlICggZXZlbnQ/OiBNb3VzZUV2ZW50LCAuLi5hcmdzOiBhbnlbXSApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnbGVhdmUnLCBldmVudCwgYXJncyApO1xuICAgICAgICAvL3RoaXMuY2xhc3NOYW1lID0gJ3JlZCc7XG4gICAgfVxuXG4gICAgY2hnICgpIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnbmV3IHZhbHVlIG9mIGZvbycsIHRoaXMuZm9vICk7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8gKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ3NheUhlbGxvJyApO1xuICAgICAgICByZXR1cm4gJzxzdHJvbmc+aGVsbG8gd29ybGQhPC9zdHJvbmc+JztcbiAgICB9XG5cbiAgICBjbGlja0hhbmRsZXIgKCkge1xuICAgICAgICB0aGlzLmVpZ2Vuc2NoYWZ0ID0gJ25ldWVyIDxoMT53ZXJ0PC9oMT4nO1xuICAgICAgICB0aGlzLiRlbGVtZW50LmNzcyggJ2NvbG9yJywgJ3llbGxvdycgKTtcbiAgICB9O1xuICAgIFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9BcHBDdHJsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==