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
	__webpack_require__(4);
	var AppCtrl_1 = __webpack_require__(6);
	var app;
	(function (app) {
	    var appModule = angular.module('app', ['ngSanitize', 'app.version', 'app.service'])
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
	configBlock.$inject = ["$provide", "$compileProvider", "$helpProvider"];
	function configBlock($provide, $compileProvider, $helpProvider) {
	    console.log('configBlock');
	    $helpProvider.setCurrency('$');
	    $helpProvider.setPercent(10);
	    $compileProvider.debugInfoEnabled(true);
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var help_service_1 = __webpack_require__(5);
	var app;
	(function (app) {
	    var services;
	    (function (services) {
	        var serviceModule = angular.module('app.service', [])
	            .provider('$help', help_service_1.HelpServiceProvider);
	    })(services = app.services || (app.services = {}));
	})(app || (app = {}));


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var HelpService = (function () {
	    function HelpService(currency, percent) {
	        this.currency = currency;
	        this.percent = percent;
	    }
	    HelpService.prototype.calcTip = function (price) {
	        return (price * this.percent / 100) + this.currency;
	    };
	    return HelpService;
	}());
	var HelpServiceProvider = (function () {
	    function HelpServiceProvider() {
	        this.currency = "€";
	        this.percent = 5;
	    }
	    HelpServiceProvider.prototype.setCurrency = function (currency) {
	        this.currency = currency;
	    };
	    HelpServiceProvider.prototype.setPercent = function (percent) {
	        this.percent = percent;
	    };
	    /** @ngInject */
	    HelpServiceProvider.prototype.$get = function () {
	        return new HelpService(this.currency, this.percent);
	    };
	    return HelpServiceProvider;
	}());
	exports.HelpServiceProvider = HelpServiceProvider;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	/** @ngInject */
	var AppCtrl = (function () {
	    AppCtrl.$inject = ["$scope", "$element", "$help"];
	    function AppCtrl($scope, $element, $help) {
	        this.$element = $element;
	        this.$help = $help;
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
	        console.log($help, $help.calcTip(100));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTdjMzQ2M2JhM2Y5OGI3YWRlN2QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvaGVscC9oZWxwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDhDQUE2QztBQUM3QyxxQ0FBeUIsQ0FBVyxDQUFDO0FBQ3JDLHdDQUE0QixDQUFjLENBQUM7QUFFM0MscUJBQU8sQ0FDUCxDQUFDLENBRHdDO0FBQ3pDLHFCQUFPLENBRVAsQ0FBQyxDQUZrQztBQUduQyxxQ0FBd0IsQ0FBVyxDQUFDO0FBT3BDLEtBQU8sR0FBRyxDQWFUO0FBYkQsWUFBTyxHQUFHLEVBQUMsQ0FBQztLQUlSLElBQUksU0FBUyxHQUFvQixPQUFPLENBQUMsTUFBTSxDQUFFLEtBQUssRUFDbEQsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFFO1VBQzdDLE1BQU0sQ0FBRSx3QkFBVyxDQUFDO1VBQ3BCLEdBQUcsQ0FBRSxrQkFBUSxDQUFFO1VBQ2YsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFF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USxJQUFLLE9BQU8sTUFBTSxRQUFTOztLQUl2Qyw2Q0FBaUIsTUFBYTtTQUMxQixJQUFLLE1BQU87YUFDUixPQUFPOztTQUVYLE9BQU87O0tBR1gscUNBQVMsS0FBWTtTQUNqQixLQUFLLFlBQWMsS0FBSyxTQUFTLFFBQVM7O0tBRzlDLDBDQUFjLEtBQVc7U0FDckIsS0FBSyxTQUFTLE9BQVEsS0FBSzs7S0FHL0Isa0NBQU0sTUFBaUI7U0FDbkIsUUFBUSxJQUFNLE9BQU87O0tBR3pCLG1DQUFPLE9BQWtCO1NBQ3JCLFFBQVEsSUFBTSxRQUFROztLQUcxQixvQ0FBUSxNQUFpQjtTQUFFO1NBekJ2QixLQXlCdUIseUNBQWM7YUFBZDs7U0FDdkIsUUFBUSxJQUFNLFNBQVMsTUFBTTs7O0tBSWpDLG9DQUFRLE9BQWtCO1NBQUU7U0F0QnhCLEtBc0J3Qix5Q0FBYzthQUFkOztTQUN4QixRQUFRLElBQU0sU0FBUyxPQUFPOzs7S0FJbEM7U0FDSSxRQUFRLElBQU0sb0JBQW9CLEtBQUs7O0tBRzNDO1NBQ0ksUUFBUSxJQUFNO1NBQ2QsT0FBTzs7S0FHWDtTQUNJLEtBQUssY0FBYztTQUNuQixLQUFLLFNBQVMsSUFBSyxTQUFTOztLQXJCaEM7S0F3Qko7O0FBaEdhLG1CQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTdjMzQ2M2JhM2Y5OGI3YWRlN2QiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2FwcC5ydW4nO1xuaW1wb3J0IHsgY29uZmlnQmxvY2sgfSBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50L3V0aWxzL3ZlcnNpb24ubW9kdWxlJ1xuaW1wb3J0ICcuL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZSdcblxuaW1wb3J0IElTY29wZSA9IGFuZ3VsYXIuSVNjb3BlO1xuaW1wb3J0IHsgQXBwQ3RybCB9IGZyb20gJy4vQXBwQ3RybCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcbiAgICBlaWdlbnNjaGFmdD86IHN0cmluZztcbiAgICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5tb2R1bGUgYXBwIHtcblxuICAgIGltcG9ydCBJU2NvcGUgPSBhbmd1bGFyLklTY29wZTtcbiAgICBpbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbiAgICBsZXQgYXBwTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSggJ2FwcCcsXG4gICAgICAgIFsnbmdTYW5pdGl6ZScsICdhcHAudmVyc2lvbicsICdhcHAuc2VydmljZSddIClcbiAgICAgICAgLmNvbmZpZyggY29uZmlnQmxvY2spXG4gICAgICAgIC5ydW4oIHJ1bkJsb2NrIClcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsIClcbiAgICA7XG4gICAgLy9jb25zb2xlLmxvZyAoIGFwcE1vZHVsZSApO1xuICAgIC8vY29uc29sZS5sb2cgKCBhcHBNb2R1bGUgPT09IGFuZ3VsYXIubW9kdWxlKCAnYXBwJyApICk7XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LnRzIiwiLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICggdmVyc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcGllbGVuOiBzdHJpbmcgICkge1xuICAgIGNvbnNvbGUubG9nICggJ3J1bkJsb2NrJyAsIHZlcnNpb24sIGF1dGhvciwgc3BpZWxlbiApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAucnVuLnRzIiwiaW1wb3J0IElQcm92aWRlU2VydmljZSA9IGFuZ3VsYXIuYXV0by5JUHJvdmlkZVNlcnZpY2U7XG5pbXBvcnQgSUNvbXBpbGVQcm92aWRlciA9IGFuZ3VsYXIuSUNvbXBpbGVQcm92aWRlcjtcbmltcG9ydCB7IElIZWxwU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxwL2hlbHAuc2VydmljZSc7XG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnQmxvY2sgKCAkcHJvdmlkZTogSVByb3ZpZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGVQcm92aWRlciA6IElDb21waWxlUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscFByb3ZpZGVyOiBJSGVscFNlcnZpY2VQcm92aWRlciAgKSB7XG4gICAgY29uc29sZS5sb2cgKCAnY29uZmlnQmxvY2snICk7XG5cbiAgICAkaGVscFByb3ZpZGVyLnNldEN1cnJlbmN5KCAnJCcgKTtcbiAgICAkaGVscFByb3ZpZGVyLnNldFBlcmNlbnQoIDEwICk7XG5cbiAgICAkY29tcGlsZVByb3ZpZGVyLmRlYnVnSW5mb0VuYWJsZWQoIHRydWUgKTtcbiAgICAkcHJvdmlkZS5jb25zdGFudCggJ3ZlcnNpb24nLCAxMi4zICk7XG4gICAgJHByb3ZpZGUudmFsdWUoICdhdXRob3InLCAnc2FiYW4gdWVubHVlJyApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuY29uZmlnLnRzIiwiXG5tb2R1bGUgYXBwLnZlcnNpb24ge1xuXG4gICAgbGV0IHZlcnNpb25Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnZlcnNpb24nLCBbXSlcbiAgICAgICAgLnZhbHVlKCAnc3BpZWxlbicsICdpY2ggc3BpZWxlJylcbiAgICA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZS50cyIsIlxuXG5pbXBvcnQgeyBIZWxwU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9oZWxwL2hlbHAuc2VydmljZSc7XG5tb2R1bGUgYXBwLnNlcnZpY2VzIHtcblxuICAgIGltcG9ydCBJTW9kdWxlID0gYW5ndWxhci5JTW9kdWxlO1xuICAgIGxldCBzZXJ2aWNlTW9kdWxlIDogSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnNlcnZpY2UnLCBbXSApXG4gICAgICAgICAgICAucHJvdmlkZXIoICckaGVscCcsIEhlbHBTZXJ2aWNlUHJvdmlkZXIgKVxuICAgICAgICA7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2VydmljZXMvc2VydmljZXMubW9kdWxlLnRzIiwiaW1wb3J0IElTZXJ2aWNlUHJvdmlkZXIgPSBhbmd1bGFyLklTZXJ2aWNlUHJvdmlkZXI7XG4vKipcbiAqIENyZWF0ZWQgYnkgc3Vlbmx1ZSBvbiAwMS4wMi4xNy5cbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElIZWxwU2VydmljZSB7XG4gICAgY2FsY1RpcCAoIHByaWNlOiBudW1iZXIgKSA6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSGVscFNlcnZpY2VQcm92aWRlciBleHRlbmRzIElTZXJ2aWNlUHJvdmlkZXIge1xuICAgIHNldEN1cnJlbmN5ICggY3VycmVuY3k6IHN0cmluZyApO1xuICAgIHNldFBlcmNlbnQgKCBwZXJjZW50OiBudW1iZXIgKTtcbn1cblxuY2xhc3MgSGVscFNlcnZpY2UgaW1wbGVtZW50cyBJSGVscFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIHBlcmNlbnQ6IG51bWJlciApIHt9XG5cbiAgICBjYWxjVGlwICggcHJpY2UgOiBudW1iZXIgKSA6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiAoIHByaWNlICogdGhpcy5wZXJjZW50IC8gMTAwICkgKyB0aGlzLmN1cnJlbmN5O1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgSGVscFNlcnZpY2VQcm92aWRlciBpbXBsZW1lbnRzIElIZWxwU2VydmljZVByb3ZpZGVyIHtcbiAgICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmcgPSBcIuKCrFwiO1xuICAgIHByaXZhdGUgcGVyY2VudDogbnVtYmVyPSA1O1xuXG4gICAgc2V0Q3VycmVuY3kgKCBjdXJyZW5jeSA6IHN0cmluZyApIHtcbiAgICAgICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICAgIH1cblxuICAgIHNldFBlcmNlbnQgKCBwZXJjZW50IDogbnVtYmVyICkge1xuICAgICAgICB0aGlzLnBlcmNlbnQgPSBwZXJjZW50O1xuICAgIH1cblxuICAgIC8qKiBAbmdJbmplY3QgKi9cbiAgICAkZ2V0ICgpIDogYW55IHtcbiAgICAgICAgcmV0dXJuIG5ldyBIZWxwU2VydmljZSggdGhpcy5jdXJyZW5jeSwgdGhpcy5wZXJjZW50ICk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NlcnZpY2VzL2hlbHAvaGVscC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSUFwcFNjb3BlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbmltcG9ydCB7IElIZWxwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaGVscC9oZWxwLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVU2VyVm8ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhZ2U6IG51bWJlcjtcbn1cblxuLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGNsYXNzIEFwcEN0cmwge1xuXG4gICAgLy9laWdlbnNjaGFmdDogc3RyaW5nID0gJ3dlcnQnO1xuICAgIGVpZ2Vuc2NoYWZ0ID0gJ25ldWVyIDxoMT53ZXJ0ISEhPC9oMT4nICtcbiAgICAgICAgJzxzY3JpcHQ+YWxlcnQoXFwndGVzdFxcJyk7PC9zY3JpcHQ+JztcblxuICAgIGZvbzogbnVtYmVyID0gMzAwO1xuICAgIGJhOiBudW1iZXIgPSAzMDA7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcgPSAncmVkJztcblxuICAgIHNlYXJjaDogSVVTZXJWbztcblxuICAgIGltZ0Jhc2U6IHN0cmluZyA9ICd3d3cucGxhbmV0LXdpc3Nlbi5kZS9zZW5kdW5nZW4vJ1xuICAgIGltZ1VybDogc3RyaW5nID0gJ2thdHplbi16d2VpLWp1bmdlLTEwMH5fdi1nc2VhcHJlbWl1bXhsLmpwZyc7XG5cbiAgICBsaW5rOiBzdHJpbmcgPSAnaHR0cDovL25ldFRyZWsuZGUnO1xuXG4gICAgbGlzdDogc3RyaW5nW10gPSBbJ3NhYmFuJywnaGFucycsJ3BldGVyJ107XG4gICAgdXNlckxpc3Q6IElVU2VyVm9bXSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgYWdlOiAxMixcbiAgICAgICAgICAgIG5hbWU6ICdoYW5zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDEzLFxuICAgICAgICAgICAgbmFtZTogJ3BldGVyJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDE0LFxuICAgICAgICAgICAgbmFtZTogJ2tsYXVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDE1LFxuICAgICAgICAgICAgbmFtZTogJ2ZyYW5rJ1xuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yICggJHNjb3BlOiBJQXBwU2NvcGUsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSAkaGVscDogSUhlbHBTZXJ2aWNlXG4gICAgICAgICkge1xuXG5cbiAgICAgICAgY29uc29sZS5sb2cgKCAnbXlBcHBDdHJsJyAsICRzY29wZSwgJGVsZW1lbnQgKTtcblxuICAgICAgICBjb25zb2xlLmxvZyggJGhlbHAsICRoZWxwLmNhbGNUaXAoIDEwMCApICk7XG5cbiAgICB9XG5cbiAgICBnZXRDbGFzc0ZvclJvdyAoIGV2ZW46IGJvb2xlYW4gKSB7XG4gICAgICAgIGlmICggZXZlbiApIHtcbiAgICAgICAgICAgIHJldHVybiAnZXZlbic7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdvZGQnO1xuICAgIH1cblxuICAgIGRlbFVzciAoIHVzcjogSVVTZXJWbyApIHtcbiAgICAgICAgdGhpcy5kZWxVc3JCeUluZCAoIHRoaXMudXNlckxpc3QuaW5kZXhPZiggdXNyICkgKTtcbiAgICB9XG5cbiAgICBkZWxVc3JCeUluZCAoIGluZDogbnVtYmVyICkge1xuICAgICAgICB0aGlzLnVzZXJMaXN0LnNwbGljZSggaW5kLCAxICk7XG4gICAgfVxuXG4gICAgb3V0ICggbUV2dD86IE1vdXNlRXZlbnQgKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ291dCcsIG1FdnQgKTtcbiAgICB9XG5cbiAgICBvdmVyICggZXZlbnQ/OiBNb3VzZUV2ZW50ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdvdmVyJywgZXZlbnQgKTtcbiAgICB9XG5cbiAgICBlbnRlciAoIG1FdnQ/OiBNb3VzZUV2ZW50LCAuLi5hcmdzOiBhbnlbXSApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnZW50ZXInLCBtRXZ0LCBhcmdzICk7XG4gICAgICAgIC8vdGhpcy5jbGFzc05hbWUgPSAneWVsbG93JztcbiAgICB9XG5cbiAgICBsZWF2ZSAoIGV2ZW50PzogTW91c2VFdmVudCwgLi4uYXJnczogYW55W10gKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ2xlYXZlJywgZXZlbnQsIGFyZ3MgKTtcbiAgICAgICAgLy90aGlzLmNsYXNzTmFtZSA9ICdyZWQnO1xuICAgIH1cblxuICAgIGNoZyAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ25ldyB2YWx1ZSBvZiBmb28nLCB0aGlzLmZvbyApO1xuICAgIH1cblxuICAgIHNheUhlbGxvICgpOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdzYXlIZWxsbycgKTtcbiAgICAgICAgcmV0dXJuICc8c3Ryb25nPmhlbGxvIHdvcmxkITwvc3Ryb25nPic7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyICgpIHtcbiAgICAgICAgdGhpcy5laWdlbnNjaGFmdCA9ICduZXVlciA8aDE+d2VydDwvaDE+JztcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jc3MoICdjb2xvcicsICd5ZWxsb3cnICk7XG4gICAgfTtcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvQXBwQ3RybC50cyJdLCJzb3VyY2VSb290IjoiIn0=