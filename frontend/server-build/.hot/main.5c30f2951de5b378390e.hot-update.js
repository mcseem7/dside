exports.id = "main";
exports.modules = {

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _core = __webpack_require__(/*! @cra-express/core */ \"@cra-express/core\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\n\nvar _require = __webpack_require__(/*! ../src/App */ \"./src/App.js\"),\n    App = _require.default;\n\nvar clientBuildPath = path.resolve(__dirname, '../client');\n\nvar AppClass = App;\n\nvar app = (0, _core.createReactAppExpress)({\n  clientBuildPath: clientBuildPath,\n  universalRender: (0, _core.handleUniversalRender)(React.createElement(App, null))\n});\n\nif (true) {\n  module.hot.accept(/*! ../src/App */ \"./src/App.js\", function () {\n    var _require2 = __webpack_require__(/*! ../src/App */ \"./src/App.js\"),\n        App = _require2.default;\n\n    AppClass = App;\n    console.log('✅ Server hot reloaded App');\n  });\n}\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ })

};