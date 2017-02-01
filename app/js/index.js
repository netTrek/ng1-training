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
	        this.userList = [
	            {
	                age: 12,
	                name: 'hans'
	            },
	            {
	                age: 13,
	                name: 'peter'
	            },
	            {
	                age: 14,
	                name: 'klaus'
	            },
	            {
	                age: 15,
	                name: 'frank'
	            }
	        ];
	        console.log('myAppCtrl', $scope, $element);
	    }
	    AppCtrl.prototype.getClassForRow = function (even) {
	        if (even) {
	            return 'even';
	        }
	        return 'odd';
	    };
	    AppCtrl.prototype.delUsr = function (usr) {
	        this.delUsrByInd(this.userList.indexOf(usr));
	    };
	    AppCtrl.prototype.delUsrByInd = function (ind) {
	        this.userList.splice(ind, 1);
	    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWQwYmZiNjQ0ZTVkMGZiNmNkYTQiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDhDQUE2QztBQUM3QyxxQ0FBeUIsQ0FBVyxDQUFDO0FBQ3JDLHdDQUE0QixDQUFjLENBQUM7QUFFM0MscUJBQU8sQ0FDUCxDQUFDLENBRHdDO0FBRXpDLHFDQUF3QixDQUFXLENBQUM7QUFPcEMsS0FBTyxHQUFHLENBWVQ7QUFaRCxZQUFPLEdBQUcsRUFBQyxDQUFDO0tBSVIsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFFO1VBQ2xGLE1BQU0sQ0FBRSx3QkFBVyxDQUFDO1VBQ3BCLEdBQUcsQ0FBRSxrQkFBUSxDQUFFO1VBQ2YsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFFLENBQ25DO0FBSUwsRUFBQyxFQVpNLEdBQUcsS0FBSCxHQUFHLFFBWVQ7Ozs7Ozs7QUN6QkQ7OztBQUNBLG1CQUEyQixTQUFpQixRQUFnQixTQUFlO0tBQ3ZFLFFBQVEsSUFBTSxZQUFhLFNBQVMsUUFBUTs7QUFEaEMsb0JBQVE7Ozs7Ozs7QUNEeEI7OztBQUVBLHNCQUE4QixVQUF5QjtLQUNuRCxRQUFRLElBQU07S0FDZCxTQUFTLFNBQVUsV0FBVztLQUM5QixTQUFTLE1BQU8sVUFBVTs7QUFIZCx1QkFBVzs7Ozs7OztBQ0QzQixLQUFPLEdBQUcsQ0FLVDtBQUxELFlBQU8sR0FBRztLQUFDLFdBQU8sQ0FLakI7S0FMVSxrQkFBTyxFQUFDLENBQUM7U0FFaEIsSUFBSSxhQUFhLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztjQUNsRSxLQUFLLENBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUNuQztLQUNMLENBQUMsRUFMVSxPQUFPLEdBQVAsV0FBTyxLQUFQLFdBQU8sUUFLakI7QUFBRCxFQUFDLEVBTE0sR0FBRyxLQUFILEdBQUcsUUFLVDs7Ozs7OztBQ05EOzs7OENBU0E7S0FtQ0ksaUJBQWMsUUFDUSxVQUEwQjtTQUExQjs7U0FqQ3RCLG1CQUFjO2FBQ1Y7U0FFSixXQUFjO1NBQ2QsVUFBYTtTQUNiLGlCQUFvQjtTQUVwQixlQUFrQjtTQUNsQixjQUFpQjtTQUVqQixZQUFlO1NBRWYsWUFBaUIsQ0FBQyxTQUFRLFFBQU87U0FDakMsZ0JBQXNCO2FBQ2xCO2lCQUNJLEtBQUs7aUJBQ0wsTUFBTTs7YUFFVjtpQkFDSSxLQUFLO2lCQUNMLE1BQU07O2FBRVY7aUJBQ0ksS0FBSztpQkFDTCxNQUFNOzthQUVWO2lCQUNJLEtBQUs7aUJBQ0wsTUFBTTs7O1NBTVYsUUFBUSxJQUFNLGFBQWMsUUFBUTs7S0FHeEMsNkNBQWlCLE1BQWE7U0FDMUIsSUFBSyxNQUFPO2FBQ1IsT0FBTzs7U0FFWCxPQUFPOztLQUdYLHFDQUFTLEtBQVk7U0FDakIsS0FBSyxZQUFjLEtBQUssU0FBUyxRQUFTOztLQUc5QywwQ0FBYyxLQUFXO1NBQ3JCLEtBQUssU0FBUyxPQUFRLEtBQUs7O0tBRy9CLGtDQUFNLE1BQWlCO1NBQ25CLFFBQVEsSUFBTSxPQUFPOztLQUd6QixtQ0FBTyxPQUFrQjtTQUNyQixRQUFRLElBQU0sUUFBUTs7S0FHMUIsb0NBQVEsTUFBaUI7U0FBRTtTQWpCdkIsS0FpQnVCLHlDQUFjO2FBQWQ7O1NBQ3ZCLFFBQVEsSUFBTSxTQUFTLE1BQU07OztLQUlqQyxvQ0FBUSxPQUFrQjtTQUFFO1NBZHhCLEtBY3dCLHlDQUFjO2FBQWQ7O1NBQ3hCLFFBQVEsSUFBTSxTQUFTLE9BQU87OztLQUlsQztTQUNJLFFBQVEsSUFBTSxvQkFBb0IsS0FBSzs7S0FHM0M7U0FDSSxRQUFRLElBQU07U0FDZCxPQUFPOztLQUdYO1NBQ0ksS0FBSyxjQUFjO1NBQ25CLEtBQUssU0FBUyxJQUFLLFNBQVM7O0tBYmhDO0tBZ0JKOztBQXZGYSxtQkFBTyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFkMGJmYjY0NGU1ZDBmYjZjZGE0IiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9hcHAucnVuJztcbmltcG9ydCB7IGNvbmZpZ0Jsb2NrIH0gZnJvbSAnLi9hcHAuY29uZmlnJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZSdcbmltcG9ydCBJU2NvcGUgPSBhbmd1bGFyLklTY29wZTtcbmltcG9ydCB7IEFwcEN0cmwgfSBmcm9tICcuL0FwcEN0cmwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTY29wZSBleHRlbmRzIElTY29wZSB7XG4gICAgZWlnZW5zY2hhZnQ/OiBzdHJpbmc7XG4gICAgY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxubW9kdWxlIGFwcCB7XG5cbiAgICBpbXBvcnQgSVNjb3BlID0gYW5ndWxhci5JU2NvcGU7XG4gICAgaW1wb3J0IElBdWdtZW50ZWRKUXVlcnkgPSBhbmd1bGFyLklBdWdtZW50ZWRKUXVlcnk7XG4gICAgbGV0IGFwcE1vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoICdhcHAnLCBbJ25nU2FuaXRpemUnLCAnYXBwLnZlcnNpb24nXSApXG4gICAgICAgIC5jb25maWcoIGNvbmZpZ0Jsb2NrKVxuICAgICAgICAucnVuKCBydW5CbG9jayApXG4gICAgICAgIC5jb250cm9sbGVyKCdBcHBDdHJsJywgQXBwQ3RybCApXG4gICAgO1xuICAgIC8vY29uc29sZS5sb2cgKCBhcHBNb2R1bGUgKTtcbiAgICAvL2NvbnNvbGUubG9nICggYXBwTW9kdWxlID09PSBhbmd1bGFyLm1vZHVsZSggJ2FwcCcgKSApO1xuXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC50cyIsIi8qKiBAbmdJbmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoIHZlcnNpb246IG51bWJlciwgYXV0aG9yOiBzdHJpbmcsIHNwaWVsZW46IHN0cmluZyApIHtcbiAgICBjb25zb2xlLmxvZyAoICdydW5CbG9jaycgLCB2ZXJzaW9uLCBhdXRob3IsIHNwaWVsZW4gKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLnJ1bi50cyIsImltcG9ydCBJUHJvdmlkZVNlcnZpY2UgPSBhbmd1bGFyLmF1dG8uSVByb3ZpZGVTZXJ2aWNlO1xuLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Jsb2NrICggJHByb3ZpZGU6IElQcm92aWRlU2VydmljZSApIHtcbiAgICBjb25zb2xlLmxvZyAoICdjb25maWdCbG9jaycgKTtcbiAgICAkcHJvdmlkZS5jb25zdGFudCggJ3ZlcnNpb24nLCAxMi4zICk7XG4gICAgJHByb3ZpZGUudmFsdWUoICdhdXRob3InLCAnc2FiYW4gdWVubHVlJyApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuY29uZmlnLnRzIiwiXG5tb2R1bGUgYXBwLnZlcnNpb24ge1xuXG4gICAgbGV0IHZlcnNpb25Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnZlcnNpb24nLCBbXSlcbiAgICAgICAgLnZhbHVlKCAnc3BpZWxlbicsICdpY2ggc3BpZWxlJylcbiAgICA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZS50cyIsImltcG9ydCB7IElBcHBTY29wZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IElBdWdtZW50ZWRKUXVlcnkgPSBhbmd1bGFyLklBdWdtZW50ZWRKUXVlcnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVTZXJWbyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xufVxuXG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgY2xhc3MgQXBwQ3RybCB7XG5cbiAgICAvL2VpZ2Vuc2NoYWZ0OiBzdHJpbmcgPSAnd2VydCc7XG4gICAgZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQhISE8L2gxPicgK1xuICAgICAgICAnPHNjcmlwdD5hbGVydChcXCd0ZXN0XFwnKTs8L3NjcmlwdD4nO1xuXG4gICAgZm9vOiBudW1iZXIgPSAzMDA7XG4gICAgYmE6IG51bWJlciA9IDMwMDtcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9ICdyZWQnO1xuXG4gICAgaW1nQmFzZTogc3RyaW5nID0gJ3d3dy5wbGFuZXQtd2lzc2VuLmRlL3NlbmR1bmdlbi8nXG4gICAgaW1nVXJsOiBzdHJpbmcgPSAna2F0emVuLXp3ZWktanVuZ2UtMTAwfl92LWdzZWFwcmVtaXVteGwuanBnJztcblxuICAgIGxpbms6IHN0cmluZyA9ICdodHRwOi8vbmV0VHJlay5kZSc7XG5cbiAgICBsaXN0OiBzdHJpbmdbXSA9IFsnc2FiYW4nLCdoYW5zJywncGV0ZXInXTtcbiAgICB1c2VyTGlzdDogSVVTZXJWb1tdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDEyLFxuICAgICAgICAgICAgbmFtZTogJ2hhbnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTMsXG4gICAgICAgICAgICBuYW1lOiAncGV0ZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTQsXG4gICAgICAgICAgICBuYW1lOiAna2xhdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTUsXG4gICAgICAgICAgICBuYW1lOiAnZnJhbmsnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IgKCAkc2NvcGU6IElBcHBTY29wZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ215QXBwQ3RybCcgLCAkc2NvcGUsICRlbGVtZW50ICk7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NGb3JSb3cgKCBldmVuOiBib29sZWFuICkge1xuICAgICAgICBpZiAoIGV2ZW4gKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2V2ZW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnb2RkJztcbiAgICB9XG5cbiAgICBkZWxVc3IgKCB1c3I6IElVU2VyVm8gKSB7XG4gICAgICAgIHRoaXMuZGVsVXNyQnlJbmQgKCB0aGlzLnVzZXJMaXN0LmluZGV4T2YoIHVzciApICk7XG4gICAgfVxuXG4gICAgZGVsVXNyQnlJbmQgKCBpbmQ6IG51bWJlciApIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5zcGxpY2UoIGluZCwgMSApO1xuICAgIH1cblxuICAgIG91dCAoIG1FdnQ/OiBNb3VzZUV2ZW50ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdvdXQnLCBtRXZ0ICk7XG4gICAgfVxuXG4gICAgb3ZlciAoIGV2ZW50PzogTW91c2VFdmVudCApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnb3ZlcicsIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZW50ZXIgKCBtRXZ0PzogTW91c2VFdmVudCwgLi4uYXJnczogYW55W10gKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ2VudGVyJywgbUV2dCwgYXJncyApO1xuICAgICAgICAvL3RoaXMuY2xhc3NOYW1lID0gJ3llbGxvdyc7XG4gICAgfVxuXG4gICAgbGVhdmUgKCBldmVudD86IE1vdXNlRXZlbnQsIC4uLmFyZ3M6IGFueVtdICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdsZWF2ZScsIGV2ZW50LCBhcmdzICk7XG4gICAgICAgIC8vdGhpcy5jbGFzc05hbWUgPSAncmVkJztcbiAgICB9XG5cbiAgICBjaGcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICduZXcgdmFsdWUgb2YgZm9vJywgdGhpcy5mb28gKTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbyAoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnc2F5SGVsbG8nICk7XG4gICAgICAgIHJldHVybiAnPHN0cm9uZz5oZWxsbyB3b3JsZCE8L3N0cm9uZz4nO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlciAoKSB7XG4gICAgICAgIHRoaXMuZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQ8L2gxPic7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCAnY29sb3InLCAneWVsbG93JyApO1xuICAgIH07XG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0FwcEN0cmwudHMiXSwic291cmNlUm9vdCI6IiJ9