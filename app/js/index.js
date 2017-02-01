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
	__webpack_require__(7);
	__webpack_require__(4);
	var AppCtrl_1 = __webpack_require__(6);
	var app;
	(function (app) {
	    var appModule = angular.module('app', ['ngSanitize', 'app.version', 'app.service', 'app.module'])
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
	/** @ngInject */
	var ModelCalcService = (function () {
	    ModelCalcService.$inject = ["$model"];
	    function ModelCalcService($model) {
	        this.$model = $model;
	    }
	    ModelCalcService.prototype.sum = function () {
	        return this.$model.num1 + this.$model.num2;
	    };
	    return ModelCalcService;
	}());
	exports.ModelCalcService = ModelCalcService;
	var app;
	(function (app) {
	    var services;
	    (function (services) {
	        var serviceModule = angular.module('app.service', [])
	            .provider('$help', help_service_1.HelpServiceProvider)
	            .factory('$model', function () {
	            return {
	                num1: 1,
	                num2: 2
	            };
	        })
	            .service('$modeCalc', ModelCalcService);
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
	    HelpServiceProvider.prototype.$get = function ($log) {
	        $log.debug('create singleton og HelpService ');
	        return new HelpService(this.currency, this.percent);
	    };
	    HelpServiceProvider.prototype.$get.$inject = ["$log"];
	    return HelpServiceProvider;
	}());
	exports.HelpServiceProvider = HelpServiceProvider;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	/** @ngInject */
	var AppCtrl = (function () {
	    AppCtrl.$inject = ["$scope", "$element", "$model", "$modeCalc", "$help"];
	    function AppCtrl($scope, $element, $model, $modeCalc, $help) {
	        this.$element = $element;
	        this.$model = $model;
	        this.$modeCalc = $modeCalc;
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
	        console.log($help, $help.calcTip(100), $model, $model.num1);
	        console.info($modeCalc.sum());
	        $model.num1 *= 100;
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


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by suenlue on 01.02.17.
	 */
	var app;
	(function (app) {
	    var main;
	    (function (main) {
	        var mainModule = angular.module('app.module', [])
	            .controller('MainCtrl', ["$model", function ($model) {
	            console.info($model);
	        }]);
	    })(main = app.main || (app.main = {}));
	})(app || (app = {}));


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGE1MzIyZGEwNzgyNDJjZmEwYTMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvaGVscC9oZWxwLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudC9tYWluL21haW4ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSw4Q0FBNkM7QUFDN0MscUNBQXlCLENBQVcsQ0FBQztBQUNyQyx3Q0FBNEIsQ0FBYyxDQUFDO0FBRTNDLHFCQUFPLENBQ1AsQ0FBQyxDQUR3QztBQUN6QyxxQkFBTyxDQUNQLENBQUMsQ0FEb0M7QUFDckMscUJBQU8sQ0FFUCxDQUFDLENBRmtDO0FBR25DLHFDQUF3QixDQUFXLENBQUM7QUFPcEMsS0FBTyxHQUFHLENBYVQ7QUFiRCxZQUFPLEdBQUcsRUFBQyxDQUFDO0tBSVIsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUNsRCxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFFO1VB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QVc7U0FDckIsS0FBSyxTQUFTLE9BQVEsS0FBSzs7S0FHL0Isa0NBQU0sTUFBaUI7U0FDbkIsUUFBUSxJQUFNLE9BQU87O0tBR3pCLG1DQUFPLE9BQWtCO1NBQ3JCLFFBQVEsSUFBTSxRQUFROztLQUcxQixvQ0FBUSxNQUFpQjtTQUFFO1NBNUJ2QixLQTRCdUIseUNBQWM7YUFBZDs7U0FDdkIsUUFBUSxJQUFNLFNBQVMsTUFBTTs7O0tBSWpDLG9DQUFRLE9BQWtCO1NBQUU7U0F6QnhCLEtBeUJ3Qix5Q0FBYzthQUFkOztTQUN4QixRQUFRLElBQU0sU0FBUyxPQUFPOzs7S0FJbEM7U0FDSSxRQUFRLElBQU0sb0JBQW9CLEtBQUs7O0tBRzNDO1NBQ0ksUUFBUSxJQUFNO1NBQ2QsT0FBTzs7S0FHWDtTQUNJLEtBQUssY0FBYztTQUNuQixLQUFLLFNBQVMsSUFBSyxTQUFTOztLQXhCaEM7S0EyQko7O0FBdEdhLG1CQUFPOzs7Ozs7O0FDWHBCOzs7O0FBTUEsS0FBTztBQUFQLFlBQU8sS0FBRztLQUFDO0tBQUEsaUJBQUs7U0FHWixJQUFJLGFBQXNCLFFBQVEsT0FBUSxjQUFjO2NBQ25ELFdBQVksdUJBQVksVUFBRSxRQUFxQjthQUM1QyxRQUFRLEtBQU87O1FBTGhCLCtCQUFJO0lBQVIsY0FBRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhhNTMyMmRhMDc4MjQyY2ZhMGEzIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCB7IHJ1bkJsb2NrIH0gZnJvbSAnLi9hcHAucnVuJztcbmltcG9ydCB7IGNvbmZpZ0Jsb2NrIH0gZnJvbSAnLi9hcHAuY29uZmlnJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZSdcbmltcG9ydCAnLi9jb21wb25lbnQvbWFpbi9tYWluLm1vZHVsZSdcbmltcG9ydCAnLi9zZXJ2aWNlcy9zZXJ2aWNlcy5tb2R1bGUnXG5cbmltcG9ydCBJU2NvcGUgPSBhbmd1bGFyLklTY29wZTtcbmltcG9ydCB7IEFwcEN0cmwgfSBmcm9tICcuL0FwcEN0cmwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBTY29wZSBleHRlbmRzIElTY29wZSB7XG4gICAgZWlnZW5zY2hhZnQ/OiBzdHJpbmc7XG4gICAgY2xpY2tIYW5kbGVyOiBGdW5jdGlvbjtcbn1cblxubW9kdWxlIGFwcCB7XG5cbiAgICBpbXBvcnQgSVNjb3BlID0gYW5ndWxhci5JU2NvcGU7XG4gICAgaW1wb3J0IElBdWdtZW50ZWRKUXVlcnkgPSBhbmd1bGFyLklBdWdtZW50ZWRKUXVlcnk7XG4gICAgbGV0IGFwcE1vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoICdhcHAnLFxuICAgICAgICBbJ25nU2FuaXRpemUnLCAnYXBwLnZlcnNpb24nLCAnYXBwLnNlcnZpY2UnLCAnYXBwLm1vZHVsZSddIClcbiAgICAgICAgLmNvbmZpZyggY29uZmlnQmxvY2spXG4gICAgICAgIC5ydW4oIHJ1bkJsb2NrIClcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsIClcbiAgICA7XG4gICAgLy9jb25zb2xlLmxvZyAoIGFwcE1vZHVsZSApO1xuICAgIC8vY29uc29sZS5sb2cgKCBhcHBNb2R1bGUgPT09IGFuZ3VsYXIubW9kdWxlKCAnYXBwJyApICk7XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LnRzIiwiLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICggdmVyc2lvbjogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzcGllbGVuOiBzdHJpbmcgICkge1xuICAgIGNvbnNvbGUubG9nICggJ3J1bkJsb2NrJyAsIHZlcnNpb24sIGF1dGhvciwgc3BpZWxlbiApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAucnVuLnRzIiwiaW1wb3J0IElQcm92aWRlU2VydmljZSA9IGFuZ3VsYXIuYXV0by5JUHJvdmlkZVNlcnZpY2U7XG5pbXBvcnQgSUNvbXBpbGVQcm92aWRlciA9IGFuZ3VsYXIuSUNvbXBpbGVQcm92aWRlcjtcbmltcG9ydCB7IElIZWxwU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxwL2hlbHAuc2VydmljZSc7XG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnQmxvY2sgKCAkcHJvdmlkZTogSVByb3ZpZGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbXBpbGVQcm92aWRlciA6IElDb21waWxlUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVscFByb3ZpZGVyOiBJSGVscFNlcnZpY2VQcm92aWRlciAgKSB7XG4gICAgY29uc29sZS5sb2cgKCAnY29uZmlnQmxvY2snICk7XG5cbiAgICAkaGVscFByb3ZpZGVyLnNldEN1cnJlbmN5KCAnJCcgKTtcbiAgICAkaGVscFByb3ZpZGVyLnNldFBlcmNlbnQoIDEwICk7XG5cbiAgICAkY29tcGlsZVByb3ZpZGVyLmRlYnVnSW5mb0VuYWJsZWQoIHRydWUgKTtcbiAgICAkcHJvdmlkZS5jb25zdGFudCggJ3ZlcnNpb24nLCAxMi4zICk7XG4gICAgJHByb3ZpZGUudmFsdWUoICdhdXRob3InLCAnc2FiYW4gdWVubHVlJyApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAuY29uZmlnLnRzIiwiXG5tb2R1bGUgYXBwLnZlcnNpb24ge1xuXG4gICAgbGV0IHZlcnNpb25Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnZlcnNpb24nLCBbXSlcbiAgICAgICAgLnZhbHVlKCAnc3BpZWxlbicsICdpY2ggc3BpZWxlJylcbiAgICA7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudC91dGlscy92ZXJzaW9uLm1vZHVsZS50cyIsIlxuXG5pbXBvcnQgeyBIZWxwU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9oZWxwL2hlbHAuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1vZGVsU2VydmljZSB7XG4gICAgbnVtMTogbnVtYmVyO1xuICAgIG51bTI6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTW9kZWxDYWxjU2VydmljZSB7XG4gICAgc3VtICgpOiBudW1iZXI7XG59XG5cbi8qKiBAbmdJbmplY3QgKi9cbmV4cG9ydCBjbGFzcyBNb2RlbENhbGNTZXJ2aWNlIGltcGxlbWVudHMgSU1vZGVsQ2FsY1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKCBwcml2YXRlICRtb2RlbDogSU1vZGVsU2VydmljZSApIHt9XG5cbiAgICBzdW0gKCkgOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy4kbW9kZWwubnVtMSArIHRoaXMuJG1vZGVsLm51bTI7XG4gICAgfVxuXG5cbn1cblxuXG5tb2R1bGUgYXBwLnNlcnZpY2VzIHtcblxuICAgIGltcG9ydCBJTW9kdWxlID0gYW5ndWxhci5JTW9kdWxlO1xuICAgIGxldCBzZXJ2aWNlTW9kdWxlIDogSU1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCAnYXBwLnNlcnZpY2UnLCBbXSApXG4gICAgICAgICAgICAucHJvdmlkZXIoICckaGVscCcsIEhlbHBTZXJ2aWNlUHJvdmlkZXIgKVxuICAgICAgICAgICAgLmZhY3RvcnkoICckbW9kZWwnLCAoKSA6IElNb2RlbFNlcnZpY2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SU1vZGVsU2VydmljZT4ge1xuICAgICAgICAgICAgICAgICAgICBudW0xOiAxLFxuICAgICAgICAgICAgICAgICAgICBudW0yOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zZXJ2aWNlICggJyRtb2RlQ2FsYycsIE1vZGVsQ2FsY1NlcnZpY2UgKVxuICAgICAgICA7XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2VydmljZXMvc2VydmljZXMubW9kdWxlLnRzIiwiaW1wb3J0IElTZXJ2aWNlUHJvdmlkZXIgPSBhbmd1bGFyLklTZXJ2aWNlUHJvdmlkZXI7XG5pbXBvcnQgSUxvZ1NlcnZpY2UgPSBhbmd1bGFyLklMb2dTZXJ2aWNlO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IHN1ZW5sdWUgb24gMDEuMDIuMTcuXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJSGVscFNlcnZpY2Uge1xuICAgIGNhbGNUaXAgKCBwcmljZTogbnVtYmVyICkgOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUhlbHBTZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBJU2VydmljZVByb3ZpZGVyIHtcbiAgICBzZXRDdXJyZW5jeSAoIGN1cnJlbmN5OiBzdHJpbmcgKTtcbiAgICBzZXRQZXJjZW50ICggcGVyY2VudDogbnVtYmVyICk7XG59XG5cbmNsYXNzIEhlbHBTZXJ2aWNlIGltcGxlbWVudHMgSUhlbHBTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yICggcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBwZXJjZW50OiBudW1iZXIgKSB7fVxuXG4gICAgY2FsY1RpcCAoIHByaWNlIDogbnVtYmVyICkgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKCBwcmljZSAqIHRoaXMucGVyY2VudCAvIDEwMCApICsgdGhpcy5jdXJyZW5jeTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIEhlbHBTZXJ2aWNlUHJvdmlkZXIgaW1wbGVtZW50cyBJSGVscFNlcnZpY2VQcm92aWRlciB7XG4gICAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nID0gXCLigqxcIjtcbiAgICBwcml2YXRlIHBlcmNlbnQ6IG51bWJlcj0gNTtcblxuICAgIHNldEN1cnJlbmN5ICggY3VycmVuY3kgOiBzdHJpbmcgKSB7XG4gICAgICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgICB9XG5cbiAgICBzZXRQZXJjZW50ICggcGVyY2VudCA6IG51bWJlciApIHtcbiAgICAgICAgdGhpcy5wZXJjZW50ID0gcGVyY2VudDtcbiAgICB9XG5cbiAgICAvKiogQG5nSW5qZWN0ICovXG4gICAgJGdldCAoICRsb2c6IElMb2dTZXJ2aWNlICkgOiBhbnkge1xuICAgICAgICAkbG9nLmRlYnVnKCAnY3JlYXRlIHNpbmdsZXRvbiBvZyBIZWxwU2VydmljZSAnKTtcbiAgICAgICAgcmV0dXJuIG5ldyBIZWxwU2VydmljZSggdGhpcy5jdXJyZW5jeSwgdGhpcy5wZXJjZW50ICk7XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NlcnZpY2VzL2hlbHAvaGVscC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSUFwcFNjb3BlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbmltcG9ydCB7IElIZWxwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvaGVscC9oZWxwLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1vZGVsU2VydmljZSwgSU1vZGVsQ2FsY1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlcnZpY2VzLm1vZHVsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVTZXJWbyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFnZTogbnVtYmVyO1xufVxuXG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgY2xhc3MgQXBwQ3RybCB7XG5cbiAgICAvL2VpZ2Vuc2NoYWZ0OiBzdHJpbmcgPSAnd2VydCc7XG4gICAgZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQhISE8L2gxPicgK1xuICAgICAgICAnPHNjcmlwdD5hbGVydChcXCd0ZXN0XFwnKTs8L3NjcmlwdD4nO1xuXG4gICAgZm9vOiBudW1iZXIgPSAzMDA7XG4gICAgYmE6IG51bWJlciA9IDMwMDtcbiAgICBjbGFzc05hbWU6IHN0cmluZyA9ICdyZWQnO1xuXG4gICAgc2VhcmNoOiBJVVNlclZvO1xuXG4gICAgaW1nQmFzZTogc3RyaW5nID0gJ3d3dy5wbGFuZXQtd2lzc2VuLmRlL3NlbmR1bmdlbi8nXG4gICAgaW1nVXJsOiBzdHJpbmcgPSAna2F0emVuLXp3ZWktanVuZ2UtMTAwfl92LWdzZWFwcmVtaXVteGwuanBnJztcblxuICAgIGxpbms6IHN0cmluZyA9ICdodHRwOi8vbmV0VHJlay5kZSc7XG5cbiAgICBsaXN0OiBzdHJpbmdbXSA9IFsnc2FiYW4nLCdoYW5zJywncGV0ZXInXTtcbiAgICB1c2VyTGlzdDogSVVTZXJWb1tdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBhZ2U6IDEyLFxuICAgICAgICAgICAgbmFtZTogJ2hhbnMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTMsXG4gICAgICAgICAgICBuYW1lOiAncGV0ZXInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTQsXG4gICAgICAgICAgICBuYW1lOiAna2xhdXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFnZTogMTUsXG4gICAgICAgICAgICBuYW1lOiAnZnJhbmsnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IgKCAkc2NvcGU6IElBcHBTY29wZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgJGVsZW1lbnQ6IElBdWdtZW50ZWRKUXVlcnksXG4gICAgICAgICAgICAgICAgICBwcml2YXRlICRtb2RlbDogSU1vZGVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgJG1vZGVDYWxjOiBJTW9kZWxDYWxjU2VydmljZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgJGhlbHA6IElIZWxwU2VydmljZVxuICAgICAgICApIHtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nICggJ215QXBwQ3RybCcgLCAkc2NvcGUsICRlbGVtZW50ICk7XG5cbiAgICAgICAgY29uc29sZS5sb2coICRoZWxwLCAkaGVscC5jYWxjVGlwKCAxMDAgKSwgJG1vZGVsLCAkbW9kZWwubnVtMSApO1xuXG4gICAgICAgIGNvbnNvbGUuaW5mbyAoICRtb2RlQ2FsYy5zdW0oKSApO1xuICAgICAgICBcbiAgICAgICAgJG1vZGVsLm51bTEgKj0gMTAwO1xuXG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NGb3JSb3cgKCBldmVuOiBib29sZWFuICkge1xuICAgICAgICBpZiAoIGV2ZW4gKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2V2ZW4nO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnb2RkJztcbiAgICB9XG5cbiAgICBkZWxVc3IgKCB1c3I6IElVU2VyVm8gKSB7XG4gICAgICAgIHRoaXMuZGVsVXNyQnlJbmQgKCB0aGlzLnVzZXJMaXN0LmluZGV4T2YoIHVzciApICk7XG4gICAgfVxuXG4gICAgZGVsVXNyQnlJbmQgKCBpbmQ6IG51bWJlciApIHtcbiAgICAgICAgdGhpcy51c2VyTGlzdC5zcGxpY2UoIGluZCwgMSApO1xuICAgIH1cblxuICAgIG91dCAoIG1FdnQ/OiBNb3VzZUV2ZW50ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdvdXQnLCBtRXZ0ICk7XG4gICAgfVxuXG4gICAgb3ZlciAoIGV2ZW50PzogTW91c2VFdmVudCApIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnb3ZlcicsIGV2ZW50ICk7XG4gICAgfVxuXG4gICAgZW50ZXIgKCBtRXZ0PzogTW91c2VFdmVudCwgLi4uYXJnczogYW55W10gKSB7XG4gICAgICAgIGNvbnNvbGUubG9nICggJ2VudGVyJywgbUV2dCwgYXJncyApO1xuICAgICAgICAvL3RoaXMuY2xhc3NOYW1lID0gJ3llbGxvdyc7XG4gICAgfVxuXG4gICAgbGVhdmUgKCBldmVudD86IE1vdXNlRXZlbnQsIC4uLmFyZ3M6IGFueVtdICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdsZWF2ZScsIGV2ZW50LCBhcmdzICk7XG4gICAgICAgIC8vdGhpcy5jbGFzc05hbWUgPSAncmVkJztcbiAgICB9XG5cbiAgICBjaGcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICduZXcgdmFsdWUgb2YgZm9vJywgdGhpcy5mb28gKTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbyAoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc29sZS5sb2cgKCAnc2F5SGVsbG8nICk7XG4gICAgICAgIHJldHVybiAnPHN0cm9uZz5oZWxsbyB3b3JsZCE8L3N0cm9uZz4nO1xuICAgIH1cblxuICAgIGNsaWNrSGFuZGxlciAoKSB7XG4gICAgICAgIHRoaXMuZWlnZW5zY2hhZnQgPSAnbmV1ZXIgPGgxPndlcnQ8L2gxPic7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuY3NzKCAnY29sb3InLCAneWVsbG93JyApO1xuICAgIH07XG4gICAgXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0FwcEN0cmwudHMiLCJpbXBvcnQgeyBJTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2VydmljZXMubW9kdWxlJztcbi8qKlxuICogQ3JlYXRlZCBieSBzdWVubHVlIG9uIDAxLjAyLjE3LlxuICovXG5cblxubW9kdWxlIGFwcC5tYWluIHtcblxuICAgIGltcG9ydCBJTW9kdWxlID0gYW5ndWxhci5JTW9kdWxlO1xuICAgIGxldCBtYWluTW9kdWxlOiBJTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoICdhcHAubW9kdWxlJywgW10pXG4gICAgICAgIC5jb250cm9sbGVyKCAnTWFpbkN0cmwnLCAoICRtb2RlbDogSU1vZGVsU2VydmljZSApPT4ge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvICggJG1vZGVsICk7XG4gICAgICAgIH0pXG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50L21haW4vbWFpbi5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9