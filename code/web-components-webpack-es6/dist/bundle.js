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

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Greeter = (function (_HTMLElement) {
	    _inherits(Greeter, _HTMLElement);
	
	    function Greeter() {
	        _classCallCheck(this, Greeter);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Greeter).apply(this, arguments));
	    }
	
	    _createClass(Greeter, [{
	        key: "createdCallback",
	
	        // Fires when an instance of the element is created.
	        value: function createdCallback() {
	            this.render();
	            this.bind();
	            this.setModel(this.getAttribute("greeting"));
	        }
	    }, {
	        key: "attributeChangedCallback",
	        value: function attributeChangedCallback(name, oldValue, newValue) {
	            if (name === "greeting") {
	                this.setModel(newValue);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            this.createShadowRoot().innerHTML = _template2.default;
	            this.input = this.shadowRoot.querySelector("#in");
	            this.span = this.shadowRoot.querySelector("#log");
	            this.button = this.shadowRoot.querySelector("#btn");
	        }
	    }, {
	        key: "bind",
	        value: function bind() {
	            var _this2 = this;
	
	            // binding view => model
	            // input.addEventListener("change", function (event) {
	            this.input.addEventListener("keyup", function (event) {
	                return _this2.setModel(event.target.value);
	            });
	            this.button.addEventListener("click", function (event) {
	                _this2.setModel("");
	                _this2.input.focus();
	            });
	        }
	    }, {
	        key: "setModel",
	        value: function setModel(value) {
	            this.model = value;
	            this.span.textContent = value;
	            // XXX do not override when typing (looses cursor position otherwise)
	            if (this.input.value !== value) this.input.value = value;
	        }
	    }]);
	
	    return Greeter;
	})(HTMLElement);
	
	document.registerElement('greeter-element', Greeter);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<input id=\"in\">\n<p><span id=\"log\"></span>, World</p>\n<input id=\"btn\" type=\"button\" value=\"Clear\">\n";

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map