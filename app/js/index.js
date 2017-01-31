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
	        this.list = ['saban', 'hans', 'peter'];
	        console.log('myAppCtrl', $scope, $element);
	    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIyYTUyMDJmOTAxMzc4NTQ3YmYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAucnVuLnRzIiwid2VicGFjazovLy8uL2FwcC9hcHAuY29uZmlnLnRzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnQvdXRpbHMvdmVyc2lvbi5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL0FwcEN0cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBLDhDQUE2QztBQUM3QyxxQ0FBeUIsQ0FBVyxDQUFDO0FBQ3JDLHdDQUE0QixDQUFjLENBQUM7QUFFM0MscUJBQU8sQ0FDUCxDQUFDLENBRHdDO0FBRXpDLHFDQUF3QixDQUFXLENBQUM7QUFPcEMsS0FBTyxHQUFHLENBWVQ7QUFaRCxZQUFPLEdBQUcsRUFBQyxDQUFDO0tBSVIsSUFBSSxTQUFTLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFFO1VBQ2xGLE1BQU0sQ0FBRSx3QkFBVyxDQUFDO1VBQ3BCLEdBQUcsQ0FBRSxrQkFBUSxDQUFFO1VBQ2YsVUFBVSxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFFLENBQ25DO0FBSUwsRUFBQyxFQVpNLEdBQUcsS0FBSCxHQUFHLFFBWVQ7Ozs7Ozs7QUN6QkQ7OztBQUNBLG1CQUEyQixTQUFpQixRQUFnQixTQUFlO0tBQ3ZFLFFBQVEsSUFBTSxZQUFhLFNBQVMsUUFBUTs7QUFEaEMsb0JBQVE7Ozs7Ozs7QUNEeEI7OztBQUVBLHNCQUE4QixVQUF5QjtLQUNuRCxRQUFRLElBQU07S0FDZCxTQUFTLFNBQVUsV0FBVztLQUM5QixTQUFTLE1BQU8sVUFBVTs7QUFIZCx1QkFBVzs7Ozs7OztBQ0QzQixLQUFPLEdBQUcsQ0FLVDtBQUxELFlBQU8sR0FBRztLQUFDLFdBQU8sQ0FLakI7S0FMVSxrQkFBTyxFQUFDLENBQUM7U0FFaEIsSUFBSSxhQUFhLEdBQW9CLE9BQU8sQ0FBQyxNQUFNLENBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQztjQUNsRSxLQUFLLENBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUNuQztLQUNMLENBQUMsRUFMVSxPQUFPLEdBQVAsV0FBTyxLQUFQLFdBQU8sUUFLakI7QUFBRCxFQUFDLEVBTE0sR0FBRyxLQUFILEdBQUcsUUFLVDs7Ozs7OztBQ05EOzs7OENBR0E7S0FRSSxpQkFBYyxRQUNRLFVBQTBCO1NBQTFCOztTQU50QixtQkFBYzthQUNWO1NBRUosWUFBaUIsQ0FBQyxTQUFRLFFBQU87U0FJN0IsUUFBUSxJQUFNLGFBQWMsUUFBUTs7S0FHeEM7U0FDSSxRQUFRLElBQU07U0FDZCxPQUFPOztLQUdYO1NBQ0ksS0FBSyxjQUFjO1NBQ25CLEtBQUssU0FBUyxJQUFLLFNBQVM7O0tBSmhDO0tBT0o7O0FBdkJhLG1CQUFPIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNzIyYTUyMDJmOTAxMzc4NTQ3YmYiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9tYWluLmQudHNcIiAvPlxuaW1wb3J0IHsgcnVuQmxvY2sgfSBmcm9tICcuL2FwcC5ydW4nO1xuaW1wb3J0IHsgY29uZmlnQmxvY2sgfSBmcm9tICcuL2FwcC5jb25maWcnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50L3V0aWxzL3ZlcnNpb24ubW9kdWxlJ1xuaW1wb3J0IElTY29wZSA9IGFuZ3VsYXIuSVNjb3BlO1xuaW1wb3J0IHsgQXBwQ3RybCB9IGZyb20gJy4vQXBwQ3RybCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcFNjb3BlIGV4dGVuZHMgSVNjb3BlIHtcbiAgICBlaWdlbnNjaGFmdD86IHN0cmluZztcbiAgICBjbGlja0hhbmRsZXI6IEZ1bmN0aW9uO1xufVxuXG5tb2R1bGUgYXBwIHtcblxuICAgIGltcG9ydCBJU2NvcGUgPSBhbmd1bGFyLklTY29wZTtcbiAgICBpbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbiAgICBsZXQgYXBwTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSggJ2FwcCcsIFsnbmdTYW5pdGl6ZScsICdhcHAudmVyc2lvbiddIClcbiAgICAgICAgLmNvbmZpZyggY29uZmlnQmxvY2spXG4gICAgICAgIC5ydW4oIHJ1bkJsb2NrIClcbiAgICAgICAgLmNvbnRyb2xsZXIoJ0FwcEN0cmwnLCBBcHBDdHJsIClcbiAgICA7XG4gICAgLy9jb25zb2xlLmxvZyAoIGFwcE1vZHVsZSApO1xuICAgIC8vY29uc29sZS5sb2cgKCBhcHBNb2R1bGUgPT09IGFuZ3VsYXIubW9kdWxlKCAnYXBwJyApICk7XG5cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2luZGV4LnRzIiwiLyoqIEBuZ0luamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkJsb2NrICggdmVyc2lvbjogbnVtYmVyLCBhdXRob3I6IHN0cmluZywgc3BpZWxlbjogc3RyaW5nICkge1xuICAgIGNvbnNvbGUubG9nICggJ3J1bkJsb2NrJyAsIHZlcnNpb24sIGF1dGhvciwgc3BpZWxlbiApO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hcHAucnVuLnRzIiwiaW1wb3J0IElQcm92aWRlU2VydmljZSA9IGFuZ3VsYXIuYXV0by5JUHJvdmlkZVNlcnZpY2U7XG4vKiogQG5nSW5qZWN0ICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnQmxvY2sgKCAkcHJvdmlkZTogSVByb3ZpZGVTZXJ2aWNlICkge1xuICAgIGNvbnNvbGUubG9nICggJ2NvbmZpZ0Jsb2NrJyApO1xuICAgICRwcm92aWRlLmNvbnN0YW50KCAndmVyc2lvbicsIDEyLjMgKTtcbiAgICAkcHJvdmlkZS52YWx1ZSggJ2F1dGhvcicsICdzYWJhbiB1ZW5sdWUnICk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2FwcC5jb25maWcudHMiLCJcbm1vZHVsZSBhcHAudmVyc2lvbiB7XG5cbiAgICBsZXQgdmVyc2lvbk1vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoICdhcHAudmVyc2lvbicsIFtdKVxuICAgICAgICAudmFsdWUoICdzcGllbGVuJywgJ2ljaCBzcGllbGUnKVxuICAgIDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50L3V0aWxzL3ZlcnNpb24ubW9kdWxlLnRzIiwiaW1wb3J0IHsgSUFwcFNjb3BlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgSUF1Z21lbnRlZEpRdWVyeSA9IGFuZ3VsYXIuSUF1Z21lbnRlZEpRdWVyeTtcbi8qKiBAbmdJbmplY3QgKi9cbmV4cG9ydCBjbGFzcyBBcHBDdHJsIHtcblxuICAgIC8vZWlnZW5zY2hhZnQ6IHN0cmluZyA9ICd3ZXJ0JztcbiAgICBlaWdlbnNjaGFmdCA9ICduZXVlciA8aDE+d2VydCEhITwvaDE+JyArXG4gICAgICAgICc8c2NyaXB0PmFsZXJ0KFxcJ3Rlc3RcXCcpOzwvc2NyaXB0Pic7XG5cbiAgICBsaXN0OiBzdHJpbmdbXSA9IFsnc2FiYW4nLCdoYW5zJywncGV0ZXInXTtcblxuICAgIGNvbnN0cnVjdG9yICggJHNjb3BlOiBJQXBwU2NvcGUsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlICRlbGVtZW50OiBJQXVnbWVudGVkSlF1ZXJ5ICkge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdteUFwcEN0cmwnICwgJHNjb3BlLCAkZWxlbWVudCApO1xuICAgIH1cblxuICAgIHNheUhlbGxvICgpOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZyAoICdzYXlIZWxsbycgKTtcbiAgICAgICAgcmV0dXJuICc8c3Ryb25nPmhlbGxvIHdvcmxkITwvc3Ryb25nPic7XG4gICAgfVxuXG4gICAgY2xpY2tIYW5kbGVyICgpIHtcbiAgICAgICAgdGhpcy5laWdlbnNjaGFmdCA9ICduZXVlciA8aDE+d2VydDwvaDE+JztcbiAgICAgICAgdGhpcy4kZWxlbWVudC5jc3MoICdjb2xvcicsICd5ZWxsb3cnICk7XG4gICAgfTtcbiAgICBcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvQXBwQ3RybC50cyJdLCJzb3VyY2VSb290IjoiIn0=