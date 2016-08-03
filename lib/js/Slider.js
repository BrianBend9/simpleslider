(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Slider", [], factory);
	else if(typeof exports === 'object')
		exports["Slider"] = factory();
	else
		root["Slider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _ui_component = __webpack_require__(2);
	
	var _helpers = __webpack_require__(4);
	
	var _ui_control = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Slider = function Slider(sliderElementId, newConfigObject) {
	  _classCallCheck(this, Slider);
	
	  var activeImageIndex = void 0;
	  var timeoutId = void 0;
	  var images = document.getElementById(sliderElementId).children;
	
	  this.elementId = sliderElementId;
	  this.timeoutId = timeoutId;
	  this.navButtons = true;
	  this.autoPlay = true;
	  this.autoPlayDelay = 3000;
	  this.activeImageIndex = activeImageIndex;
	
	  if ((typeof newConfigObject === 'undefined' ? 'undefined' : _typeof(newConfigObject)) === 'object') {
	    for (var setting in newConfigObject) {
	      this[setting] = newConfigObject[setting];
	    }
	  }
	
	  (0, _ui_component.addWrapper)(sliderElementId);
	  (0, _helpers.addSliderClass)(sliderElementId);
	  (0, _ui_control.initializeSliderPositions)(images, this);
	
	  if (this.navButtons === true) {
	    (0, _ui_component.addNavButton)('▶', 'js-previous-button', sliderElementId);
	    (0, _ui_component.addNavButton)('◀', 'js-next-button', sliderElementId);
	    (0, _ui_component.addButtonEventListeners)();
	  }
	
	  if (this.autoPlay === true) {
	    (0, _ui_control.startAutoPlayTimer)(this, _ui_control.slide, this.autoPlayDelay);
	  }
	};
	
	exports.default = Slider;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addNavButton = exports.addButtonEventListeners = exports.addWrapper = undefined;
	
	var _ui_control = __webpack_require__(3);
	
	function addWrapper(sliderElementId) {
	  var sliderElement = document.getElementById(sliderElementId);
	  var mysliderParent = sliderElement.parentNode;
	  var wrapper = document.createElement('div');
	  wrapper.classList.add('js-simpleslider-wrapper');
	  mysliderParent.replaceChild(wrapper, sliderElement);
	  wrapper.appendChild(sliderElement);
	} /* eslint-disable */
	
	;
	
	function addButtonEventListeners() {
	  var buttons = document.getElementsByClassName('js-nav-button');
	  for (var i = 0; i < buttons.length; i++) {
	    buttons[i].addEventListener("click", _ui_control.slide, false);
	  }
	};
	
	function addNavButton(buttonText, buttonClass, sliderElementId) {
	  var sliderElement = document.getElementById(sliderElementId);
	  var button = document.createElement("button");
	  var text = document.createTextNode(buttonText);
	  button.appendChild(text);
	  button.classList.add("nav-button", "js-nav-button", buttonClass);
	  sliderElement.parentNode.insertBefore(button, sliderElement);
	};
	
	exports.addWrapper = addWrapper;
	exports.addButtonEventListeners = addButtonEventListeners;
	exports.addNavButton = addNavButton;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.startAutoPlayTimer = exports.initializeSliderPositions = exports.slide = undefined;
	
	var _helpers = __webpack_require__(4);
	
	function slide(event) {
	  var sliderElementId = event.type === undefined ? event.elementId : event.target.parentNode.lastChild.getAttribute('id');
	  var images = document.getElementById(sliderElementId).children;
	  var sliderObject = event.type === undefined ? event : (0, _helpers.getInstanceOf)(Slider, sliderElementId, window);
	
	  if (event.type !== undefined && sliderObject.timeoutId !== undefined) {
	    resetAutoPlayTimer(sliderObject);
	  }
	
	  if ((event.type === undefined || event.target.classList.contains("js-next-button")) && sliderObject.activeImageIndex === images.length - 1) {
	    resetAllImagePositions(images, sliderObject);
	    initializeSliderPositions(images, sliderObject);
	  } else if ((event.type === undefined || event.target.classList.contains("js-next-button")) && sliderObject.activeImageIndex < images.length - 1) {
	    slideImagesToNextPosition(images, sliderObject);
	  } else if (event.target.classList.contains("js-previous-button") && sliderObject.activeImageIndex > 0) {
	    slideImagesToPreviousPosition(images, sliderObject);
	  }
	} /* eslint-disable */
	
	;
	
	function slideImagesToPreviousPosition(imageArray, sliderObject) {
	  imageArray[sliderObject.activeImageIndex].classList.remove("is-inactive", "is-active");
	  sliderObject.activeImageIndex -= 1;
	  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
	  imageArray[sliderObject.activeImageIndex].classList.remove("is-inactive");
	};
	
	function slideImagesToNextPosition(imageArray, sliderObject) {
	  imageArray[sliderObject.activeImageIndex].classList.add("is-inactive");
	  imageArray[sliderObject.activeImageIndex].classList.remove("is-active");
	  sliderObject.activeImageIndex += 1;
	  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
	};
	
	function resetAllImagePositions(imageArray, sliderObject) {
	  for (var i = 0; i < imageArray.length; i++) {
	    imageArray[i].classList.remove("is-inactive", "is-active");
	  }
	};
	
	function initializeSliderPositions(imageArray, sliderObject) {
	  sliderObject.activeImageIndex = 0;
	  imageArray[sliderObject.activeImageIndex].classList.add("is-active");
	}
	
	function startAutoPlayTimer(sliderObject, callbackFn, delay) {
	  sliderObject.intervalId = setInterval(function () {
	    callbackFn(sliderObject);
	  }, delay);
	};
	
	function resetAutoPlayTimer(sliderObject) {
	  clearInterval(sliderObject.timeoutId);
	  sliderObject.timeoutId = undefined;
	  console.log(sliderObject.timeoutId);
	  startAutoPlayTimer(sliderObject, slide, sliderObject.autoPlayDelay);
	};
	
	exports.slide = slide;
	exports.initializeSliderPositions = initializeSliderPositions;
	exports.startAutoPlayTimer = startAutoPlayTimer;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* eslint-disable */
	
	function getInstanceOf(object, sliderElementId, scope) {
	  for (var property in scope) {
	    if (scope.hasOwnProperty(property) && scope[property] instanceof object && scope[property].elementId === sliderElementId) {
	      return scope[property];
	    }
	  }
	}
	
	function addSliderClass(sliderElementId) {
	  var sliderElement = document.getElementById(sliderElementId);
	  sliderElement.classList.add('js-simpleslider');
	}
	
	exports.getInstanceOf = getInstanceOf;
	exports.addSliderClass = addSliderClass;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Slider.js.map