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
	configBlock.$inject = ["$provide", "$compileProvider"];
	function configBlock($provide, $compileProvider) {
	    console.log('configBlock');
	    $compileProvider.debugInfoEnabled(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDhhZWZiZWU3MjUxNTk2MTE5MTYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDhDQUE2QztBQUM3QyxxQ0FBeUIsQ0FBVyxDQUFDO0FBQ3JDLHdDQUE0QixDQUFjLENBQUM7QUFFM0MscUJBQU8sQ0FDUCxDQUFDLENBRHdDO0FBRXpDLHFDQUF3QixDQUFXLENBQUM7QUFPcEMsS0FBTyxHQUFHLENBWVQ7QUFaRCxZQUFPLEdBQUcsRUFBQyxDQUFDO0tBSVIsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFFO1VBQ2xGLE1BQU0sQ0FBRSx3QkFBVyxDQUFDO1VBQ3BCLEdBQUcsQ0FBRSxrQkFBUSxDQUFFO1VBQ2YsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFFLENBQ25DO0FBSUwsRUFBQyxFQVpNLEdBQUcsS0FBSCxHQUFHLFFBWVQ7Ozs7Ozs7QUN6QkQ7OztBQUNBLG1CQUEyQixTQUFpQixRQUFnQixTQUFlO0tBQ3ZFLFFBQVEsSUFBTSxZQUFhLFNBQVMsUUFBUTs7QUFEaEMsb0JBQVE7Ozs7Ozs7QUNEeEI7OztBQUdBLHNCQUE4QixVQUEyQixrQkFBbUM7S0FDeEYsUUFBUSxJQUFNO0tBQ2QsaUJBQWlCLGlCQUFrQjtLQUNuQyxTQUFTLFNBQVUsV0FBVztLQUM5QixTQUFTLE1BQU8sVUFBVTs7QUFKZCx1QkFBVzs7Ozs7OztBQ0YzQixLQUFPLEdBQUcsQ0FLVDtBQUxELFlBQU8sR0FBRztLQUFDLFdBQU8sQ0FLakI7S0FMVSxrQkFBTyxFQUFDLENBQUM7U0FFaEIsSUFBSSxhQUFhLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztjQUNsRSxLQUFLLENBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUNuQztLQUNMLENBQUMsRUFMVSxPQUFPLEdBQVAsV0FBTyxLQUFQLFdBQU8sUUFLakI7QUFBRCxFQUFDLEVBTE0sR0FBRyxLQUFILEdBQUcsUUFLVDs7Ozs7OztBQ05EOzs7OENBU0E7S0FxQ0ksaUJBQWMsUUFDUSxVQUEwQjtTQUExQjs7U0FuQ3RCLG1CQUFjO2FBQ1Y7U0FFSixXQUFjO1NBQ2QsVUFBYTtTQUNiLGlCQUFvQjtTQUlwQixlQUFrQjtTQUNsQixjQUFpQjtTQUVqQixZQUFlO1NBRWYsWUFBaUIsQ0FBQyxTQUFRLFFBQU87U0FDakMsZ0JBQXNCO2FBQ2xCO2lCQUNJLEtBQUs7aUJBQ0wsTUFBTTs7YUFFVjtpQkFDSSxLQUFLO2lCQUNMLE1BQU07O2FBRVY7aUJBQ0ksS0FBSztpQkFDTCxNQUFNOzthQUVWO2lCQUNJLEtBQUs7aUJBQ0wsTUFBTTs7O1NBTVYsUUFBUSxJQUFNLGFBQWMsUUFBUTs7S0FHeEMsNkNBQWlCLE1BQWE7U0FDMUIsSUFBSyxNQUFPO2FBQ1IsT0FBTzs7U0FFWCxPQUFPOztLQUdYLHFDQUFTLEtBQVk7U0FDakIsS0FBSyxZQUFjLEtBQUssU0FBUyxRQUFTOztLQUc5QywwQ0FBYyxLQUFXO1NBQ3JCLEtBQUssU0FBUyxPQUFRLEtBQUs7O0tBRy9CLGtDQUFNLE1BQWlCO1NBQ25CLFFBQVEsSUFBTSxPQUFPOztLQUd6QixtQ0FBTyxPQUFrQjtTQUNyQixRQUFRLElBQU0sUUFBUTs7S0FHMUIsb0NBQVEsTUFBaUI7U0FBRTtTQW5CdkIsS0FtQnVCLHlDQUFjO2FBQWQ7O1NBQ3ZCLFFBQVEsSUFBTSxTQUFTLE1BQU07OztLQUlqQyxvQ0FBUSxPQUFrQjtTQUFFO1NBaEJ4QixLQWdCd0IseUNBQWM7YUFBZDs7U0FDeEIsUUFBUSxJQUFNLFNBQVMsT0FBTzs7O0tBSWxDO1NBQ0ksUUFBUSxJQUFNLG9CQUFvQixLQUFLOztLQUczQztTQUNJLFFBQVEsSUFBTTtTQUNkLE9BQU87O0tBR1g7U0FDSSxLQUFLLGNBQWM7U0FDbkIsS0FBSyxTQUFTLElBQUssU0FBUzs7S0FmaEM7S0FrQko7O0FBekZhLG1CQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDhhZWZiZWU3MjUxNTk2MTE5MTYiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2FwcC5ydW4nO1xuaW1wb3J0IHsgY29uZmlnQmxvY2sgfSBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50L3V0aWxzL3ZlcnNpb24ubW9kdWxlJ1xuaW1wb3J0IElTY29wZSA9IGFuZ3VsYXIuSVNjb3BlO1xuaW1wb3J0IHsgQXBwQ3RybCB9IGZyb20gJy4vQXBwQ3RybCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcbiAgICBlaWdlbnNjaGFmdD86IHN0cmluZztcbiAgICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5tb2R1bGUgYXBwIHtcblxuICAgIGltcG9ydCBJU2NvcGUgPSBhbmd1bGFyLklTY29wZTtcbiAgICBpbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbiAgICBsZXQgYXBwTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSggJ2FwcCcsIFsnbmdTYW5pdGl6ZScsICdhcHAudmVyc2lvbiddIClcbiAgICAgICAgLmNvbmZpZyggY29uZmlnQmxvY2spXG4gICAgICAgIC5ydW4oIHJ1bkJsb2NrIClcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsIClcbiAgICA7XG4gICAgLy9jb25zb2xlLmxvZyAoIGFwcE1vZHVsZSApO1xuICAgIC8vY29uc29sZS5sb2cgKCBhcHBNb2R1bGUgPT09IGFuZ3VsYXIubW9kdWxlKCAnYXBwJyApICk7XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LnRzIiwiLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICggdmVyc2lvbjogbnVtYmVyLCBhdXRob3I6IHN0cmluZywgc3BpZWxlbjogc3RyaW5nICkge1xuICAgIGNvbnNvbGUubG9nICggJ3J1bkJsb2NrJyAsIHZlcnNpb24sIGF1dGhvciwgc3BpZWxlbiApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAucnVuLnRzIiwiaW1wb3J0IElQcm92aWRlU2VydmljZSA9IGFuZ3VsYXIuYXV0by5JUHJvdmlkZVNlcnZpY2U7XG5pbXBvcnQgSUNvbXBpbGVQcm92aWRlciA9IGFuZ3VsYXIuSUNvbXBpbGVQcm92aWRlcjtcbi8qKiBAbmdJbmplY3QgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdCbG9jayAoICRwcm92aWRlOiBJUHJvdmlkZVNlcnZpY2UsICRjb21waWxlUHJvdmlkZXIgOiBJQ29tcGlsZVByb3ZpZGVyICkge1xuICAgIGNvbnNvbGUubG9nICggJ2NvbmZpZ0Jsb2NrJyApO1xuICAgICRjb21waWxlUHJvdmlkZXIuZGVidWdJbmZvRW5hYmxlZCggZmFsc2UgKTtcbiAgICAkcHJvdmlkZS5jb25zdGFudCggJ3ZlcnNpb24nLCAxMi4zICk7XG4gICAgJHByb3ZpZGUudmFsdWUoICdhdXRob3InLCAnc2FiYW4gdWVubHVlJyApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuY29uZmlnLnRzIiwiXG5tb2R1bGUgYXBwLnZlcnNpb24ge1xuXG4gICAgbGV0IHZlcnNpb25Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnZlcnNpb24nLCBbXSlcbiAgICAgICAgLnZhbHVlKCAnc3BpZWxlbicsICdpY2ggc3BpZWxlJylcbiAgICA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZS50cyIsImltcG9ydCB7IElBcHBTY29wZSB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IElBdWdtZW50ZWRKUXVlcnkgPSBhbmd1bGFyLklBdWdtZW50ZWRKUXVlcnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVTZXJWbyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xufVxuXG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgY2xhc3MgQXBwQ3RybCB7XG5cbiAgICAvL2VpZ2Vuc2NoYWZ0OiBzdHJpbmcgPSAnd2VydCc7XG4gICAgZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQhISE8L2gxPicgK1xuICAgICAgICAnPHNjcmlwdD5hbGVydChcXCd0ZXN0XFwnKTs8L3NjcmlwdD4nO1xuXG4gICAgZm9vOiBudW1iZXIgPSAzMDA7XG4gICAgYmE6IG51bWJlciA9IDMwMDtcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9ICdyZWQnO1xuXG4gICAgc2VhcmNoOiBJVVNlclZvO1xuXG4gICAgaW1nQmFzZTogc3RyaW5nID0gJ3d3dy5wbGFuZXQtd2lzc2VuLmRlL3NlbmR1bmdlbi8nXG4gICAgaW1nVXJsOiBzdHJpbmcgPSAna2F0emVuLXp3ZWktanVuZ2UtMTAwfl92LWdzZWFwcmVtaXVteGwuanBnJztcblxuICAgIGxpbms6IHN0cmluZyA9ICdodHRwOi8vbmV0VHJlay5kZSc7XG5cbiAgICBsaXN0OiBzdHJpbmdbXSA9IFsnc2FiYW4nLCdoYW5zJywncGV0ZXInXTtcbiAgICB1c2VyTGlzdDogSVVTZXJWb1tdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDEyLFxuICAgICAgICAgICAgbmFtZTogJ2hhbnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTMsXG4gICAgICAgICAgICBuYW1lOiAncGV0ZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTQsXG4gICAgICAgICAgICBuYW1lOiAna2xhdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTUsXG4gICAgICAgICAgICBuYW1lOiAnZnJhbmsnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IgKCAkc2NvcGU6IElBcHBTY29wZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnkgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ215QXBwQ3RybCcgLCAkc2NvcGUsICRlbGVtZW50ICk7XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NGb3JSb3cgKCBldmVuOiBib29sZWFuICkge1xuICAgICAgICBpZiAoIGV2ZW4gKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2V2ZW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnb2RkJztcbiAgICB9XG5cbiAgICBkZWxVc3IgKCB1c3I6IElVU2VyVm8gKSB7XG4gICAgICAgIHRoaXMuZGVsVXNyQnlJbmQgKCB0aGlzLnVzZXJMaXN0LmluZGV4T2YoIHVzciApICk7XG4gICAgfVxuXG4gICAgZGVsVXNyQnlJbmQgKCBpbmQ6IG51bWJlciApIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5zcGxpY2UoIGluZCwgMSApO1xuICAgIH1cblxuICAgIG91dCAoIG1FdnQ/OiBNb3VzZUV2ZW50ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdvdXQnLCBtRXZ0ICk7XG4gICAgfVxuXG4gICAgb3ZlciAoIGV2ZW50PzogTW91c2VFdmVudCApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnb3ZlcicsIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZW50ZXIgKCBtRXZ0PzogTW91c2VFdmVudCwgLi4uYXJnczogYW55W10gKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ2VudGVyJywgbUV2dCwgYXJncyApO1xuICAgICAgICAvL3RoaXMuY2xhc3NOYW1lID0gJ3llbGxvdyc7XG4gICAgfVxuXG4gICAgbGVhdmUgKCBldmVudD86IE1vdXNlRXZlbnQsIC4uLmFyZ3M6IGFueVtdICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdsZWF2ZScsIGV2ZW50LCBhcmdzICk7XG4gICAgICAgIC8vdGhpcy5jbGFzc05hbWUgPSAncmVkJztcbiAgICB9XG5cbiAgICBjaGcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICduZXcgdmFsdWUgb2YgZm9vJywgdGhpcy5mb28gKTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbyAoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnc2F5SGVsbG8nICk7XG4gICAgICAgIHJldHVybiAnPHN0cm9uZz5oZWxsbyB3b3JsZCE8L3N0cm9uZz4nO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlciAoKSB7XG4gICAgICAgIHRoaXMuZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQ8L2gxPic7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCAnY29sb3InLCAneWVsbG93JyApO1xuICAgIH07XG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0FwcEN0cmwudHMiXSwic291cmNlUm9vdCI6IiJ9