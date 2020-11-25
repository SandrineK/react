module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speakers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Header/Header */ "./src/components/Header/Header.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/Menu */ "./src/components/Menu/Menu.jsx");
/* harmony import */ var _src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SpeakerSearchBar/SpeakerSearchBar */ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js");
/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _src_components_SpeakersHoc_SpeakersHoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/SpeakersHoc/SpeakersHoc */ "./src/components/SpeakersHoc/SpeakersHoc.js");
/* harmony import */ var _src_SpeakersProps_SpeakersProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/SpeakersProps/SpeakersProps */ "./src/SpeakersProps/SpeakersProps.js");

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\pages\\speakers.js";








function Page() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_SpeakersHoc_SpeakersHoc__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_SpeakersProps_SpeakersProps__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/SpeakersProps/SpeakersProps.js":
/*!********************************************!*\
  !*** ./src/SpeakersProps/SpeakersProps.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\SpeakersProps\\SpeakersProps.js";


function SpeakersRenderProps(props) {
  return props.children();
}

const SpeakersProps = () => {
  const speakers = [{
    imageSrc: 'speaker-component-1124',
    name: 'Douglas Crockford'
  }, {
    imageSrc: 'speaker-component-1530',
    name: 'Tamara Baker'
  }, {
    imageSrc: 'speaker-component-10803',
    name: 'Eugene Chuvyrov'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SpeakersRenderProps, {
    children: () => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: speakers.map(speaker => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: `images/${speaker.imageSrc}.png`,
            alt: speaker.name
          }, speaker.imageSrc, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 33
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, undefined);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakersProps);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\Footer\\Footer.js";


const Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: "images/footer.png"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 22
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Header/Header.jsx":
/*!******************************************!*\
  !*** ./src/components/Header/Header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\Header\\Header.jsx";


const Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: "images/header.png"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 22
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Menu/Menu.jsx":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\Menu\\Menu.jsx";


const Menu = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: "images/menu.gif"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 20
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js":
/*!*************************************************************!*\
  !*** ./src/components/SpeakerSearchBar/SpeakerSearchBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\SpeakerSearchBar\\SpeakerSearchBar.js";


const SpeakerSearchBar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
  src: "images/searchbar.gif"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 32
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (SpeakerSearchBar);

/***/ }),

/***/ "./src/components/SpeakersHoc/SpeakersHoc.js":
/*!***************************************************!*\
  !*** ./src/components/SpeakersHoc/SpeakersHoc.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withData */ "./src/components/SpeakersHoc/withData.js");

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\SpeakersHoc\\SpeakersHoc.js";



const SpeakersHoc = ({
  speakers
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: speakers.map(({
      imageSrc,
      name
    }) => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: `images/${imageSrc}.png`,
        alt: name
      }, imageSrc, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

const maxSpeakersToShow = 2;
/**
 * Example of HOC
 * Higher Order Component (HOC)
 * Function that take a component and return a new component
 * Enhanced = renforcé
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_withData__WEBPACK_IMPORTED_MODULE_2__["default"])(maxSpeakersToShow)(SpeakersHoc));

/***/ }),

/***/ "./src/components/SpeakersHoc/withData.js":
/*!************************************************!*\
  !*** ./src/components/SpeakersHoc/withData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\work\\tuto\\react\\design-components-using-tailwind-and-react-hook\\src\\components\\SpeakersHoc\\withData.js";

/**
 * Example of HOC
 * Higher Order Component (HOC)
 * Function that take a component and return a new component
 * Enhanced = renforcé
 * @param maxSpeakersToShow
 * @returns {function(*): function(): *}
 */
function withData(maxSpeakersToShow) {
  return function withData(Component) {
    const speakers = [{
      imageSrc: 'speaker-component-1124',
      name: 'Douglas Crockford'
    }, {
      imageSrc: 'speaker-component-1530',
      name: 'Tamara Baker'
    }, {
      imageSrc: 'speaker-component-10803',
      name: 'Eugene Chuvyrov'
    }];
    return function () {
      const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {
        speakers: limitSpeakers
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 20
      }, this);
    };
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withData);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3BlYWtlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NwZWFrZXJzUHJvcHMvU3BlYWtlcnNQcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzSG9jL1NwZWFrZXJzSG9jLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzSG9jL3dpdGhEYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUGFnZSIsIlNwZWFrZXJzUmVuZGVyUHJvcHMiLCJwcm9wcyIsImNoaWxkcmVuIiwiU3BlYWtlcnNQcm9wcyIsInNwZWFrZXJzIiwiaW1hZ2VTcmMiLCJuYW1lIiwibWFwIiwic3BlYWtlciIsIkZvb3RlciIsIkhlYWRlciIsIk1lbnUiLCJTcGVha2VyU2VhcmNoQmFyIiwiU3BlYWtlcnNIb2MiLCJtYXhTcGVha2Vyc1RvU2hvdyIsIndpdGhEYXRhIiwiQ29tcG9uZW50IiwibGltaXRTcGVha2VycyIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFB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QUFULENBQWUsQ0FBZixFQUFrQkosaUJBQWxCLENBQXRCO0FBQ0EsMEJBQU8scUVBQUMsU0FBRDtBQUFXLGdCQUFRLEVBQUVHO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBUDtBQUNILEtBSEQ7QUFJSCxHQW5CRDtBQXFCSDs7QUFFY0YsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNqQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3NwZWFrZXJzLmpzXCIpO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnVcIjtcclxuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyXCI7XHJcbmltcG9ydCBTcGVha2Vyc0hvYyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNIb2MvU3BlYWtlcnNIb2NcIjtcclxuaW1wb3J0IFNwZWFrZXJzUHJvcHMgZnJvbSBcIi4uL3NyYy9TcGVha2Vyc1Byb3BzL1NwZWFrZXJzUHJvcHNcIjtcclxuXHJcbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgLz5cclxuICAgICAgICAgICAgPFNwZWFrZXJzSG9jIC8+XHJcbiAgICAgICAgICAgIDxTcGVha2Vyc1Byb3BzIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlcnNSZW5kZXJQcm9wcyhwcm9wcyl7XHJcbiAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4oKTtcclxufVxyXG5cclxuY29uc3QgU3BlYWtlcnNQcm9wcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNwZWFrZXJzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMTI0JyxcclxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgQ3JvY2tmb3JkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnVGFtYXJhIEJha2VyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTEwODAzJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V1Z2VuZSBDaHV2eXJvdidcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNwZWFrZXJzUmVuZGVyUHJvcHM+XHJcbiAgICAgICAgICAgIHsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BpbWFnZXMvJHtzcGVha2VyLmltYWdlU3JjfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzcGVha2VyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaW1hZ2VTcmN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L1NwZWFrZXJzUmVuZGVyUHJvcHM+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNQcm9wczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gPGltZyBzcmM9J2ltYWdlcy9mb290ZXIucG5nJy8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4gPGltZyBzcmM9J2ltYWdlcy9oZWFkZXIucG5nJy8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IDxpbWcgc3JjPSdpbWFnZXMvbWVudS5naWYnLz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3BlYWtlclNlYXJjaEJhciA9ICgpID0+IDxpbWcgc3JjPSdpbWFnZXMvc2VhcmNoYmFyLmdpZicvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJTZWFyY2hCYXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB3aXRoRGF0YSBmcm9tIFwiLi93aXRoRGF0YVwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnNIb2MgPSAoe3NwZWFrZXJzfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7c3BlYWtlcnMubWFwKCh7aW1hZ2VTcmMsIG5hbWV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaW1hZ2VzLyR7aW1hZ2VTcmN9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlU3JjfS8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBtYXhTcGVha2Vyc1RvU2hvdyA9IDI7XHJcbi8qKlxyXG4gKiBFeGFtcGxlIG9mIEhPQ1xyXG4gKiBIaWdoZXIgT3JkZXIgQ29tcG9uZW50IChIT0MpXHJcbiAqIEZ1bmN0aW9uIHRoYXQgdGFrZSBhIGNvbXBvbmVudCBhbmQgcmV0dXJuIGEgbmV3IGNvbXBvbmVudFxyXG4gKiBFbmhhbmNlZCA9IHJlbmZvcmPDqVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEobWF4U3BlYWtlcnNUb1Nob3cpKFNwZWFrZXJzSG9jKTtcclxuIiwiLyoqXHJcbiAqIEV4YW1wbGUgb2YgSE9DXHJcbiAqIEhpZ2hlciBPcmRlciBDb21wb25lbnQgKEhPQylcclxuICogRnVuY3Rpb24gdGhhdCB0YWtlIGEgY29tcG9uZW50IGFuZCByZXR1cm4gYSBuZXcgY29tcG9uZW50XHJcbiAqIEVuaGFuY2VkID0gcmVuZm9yY8OpXHJcbiAqIEBwYXJhbSBtYXhTcGVha2Vyc1RvU2hvd1xyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6IGZ1bmN0aW9uKCk6ICp9XHJcbiAqL1xyXG5mdW5jdGlvbiB3aXRoRGF0YShtYXhTcGVha2Vyc1RvU2hvdykge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiB3aXRoRGF0YShDb21wb25lbnQpIHtcclxuICAgICAgICBjb25zdCBzcGVha2VycyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMTI0JyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEb3VnbGFzIENyb2NrZm9yZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xNTMwJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdUYW1hcmEgQmFrZXInXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGltYWdlU3JjOiAnc3BlYWtlci1jb21wb25lbnQtMTA4MDMnLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0V1Z2VuZSBDaHV2eXJvdidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0U3BlYWtlcnMgPSBzcGVha2Vycy5zbGljZSgwLCBtYXhTcGVha2Vyc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHNwZWFrZXJzPXtsaW1pdFNwZWFrZXJzfT48L0NvbXBvbmVudD47XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9