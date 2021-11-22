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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\bootstrap\\dist\\js\\bootstrap.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\popper.js\\dist\\esm\\popper.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './components/ExampleComponent.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:96399:16)\n    at render_closure1.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:82305:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:11940:17)\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:15783:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:11965:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26637:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26631:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:11940:17)\n    at C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:21292:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:11965:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26637:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26631:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:28284:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26806:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:27113:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:12137:77)\n    at _Future._completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26959:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:26618:12)\n    at Object._asyncRethrow (C:\\Users\\Mke_8\\OneDrive\\Desktop\\BOOLAN-CLASS-40\\ESERCIZI\\Laravel\\laravel-boolpress\\node_modules\\sass\\sass.dart.js:11940:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Mke_8\OneDrive\Desktop\BOOLAN-CLASS-40\ESERCIZI\Laravel\laravel-boolpress\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Mke_8\OneDrive\Desktop\BOOLAN-CLASS-40\ESERCIZI\Laravel\laravel-boolpress\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });