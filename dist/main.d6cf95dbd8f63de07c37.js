(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./lib/elements/button/index.jsx":
/*!***************************************!*\
  !*** ./lib/elements/button/index.jsx ***!
  \***************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\nvar Button = function Button(props) {\n  if (props.type === 'submit') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\",\n      className: \"button\",\n      value: props.children\n    });\n  }\n\n  if (props.type === 'text') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      className: \"text\",\n      type: \"button\"\n    }, props.children);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    className: \"button button-start\",\n    href: props.href,\n    role: \"button\"\n  }, props.children);\n};\nButton.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,\n  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['button', 'text', 'submit'])\n};\nButton.defaultProps = {\n  href: '',\n  type: 'button'\n};\nvar _default = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Button, \"Button\", \"D:\\\\web\\\\ecc\\\\components-library\\\\lib\\\\elements\\\\button\\\\index.jsx\");\n  reactHotLoader.register(_default, \"default\", \"D:\\\\web\\\\ecc\\\\components-library\\\\lib\\\\elements\\\\button\\\\index.jsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./lib/elements/button/index.jsx?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements/button */ \"./lib/elements/button/index.jsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return _elements_button__WEBPACK_IMPORTED_MODULE_0__[\"Button\"]; });\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi react-hot-loader/patch ./lib/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! react-hot-loader/patch */\"./node_modules/react-hot-loader/patch.js\");\nmodule.exports = __webpack_require__(/*! ./lib/index.js */\"./lib/index.js\");\n\n\n//# sourceURL=webpack:///multi_react-hot-loader/patch_./lib/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = react;\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

},[[0,"runtime","vendors"]]]);