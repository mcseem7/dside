exports.id = "main";
exports.modules = {

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _core = __webpack_require__(/*! @cra-express/core */ \"@cra-express/core\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _require = __webpack_require__(/*! ../src/App */ \"./src/App.js\"),\n    App = _require.default;\n\nvar clientBuildPath = path.resolve(__dirname, 'client');\n\nfunction handleUniversalRender(req, res) {\n    var context = {};\n    var stream = ReactDOMServer.renderToNodeStream(React.createElement(\n        _reactRouter.StaticRouter,\n        { location: req.url, context: context },\n        React.createElement(App, null)\n    ));\n\n    if (context.url) {\n        res.redirect(301, context.url);\n        return;\n    }\n\n    return stream;\n}\n\nvar app = (0, _core.createReactAppExpress)({\n    clientBuildPath: clientBuildPath,\n    universalRender: handleUniversalRender\n});\n\nmodule.exports = app;\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "@cra-express/universal-loader/lib/renderer/string-renderer":
false,

/***/ "loadable-components/server":
false

};