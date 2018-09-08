exports.id = "main";
exports.modules = {

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _components = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n\nvar _components2 = _interopRequireDefault(_components);\n\n__webpack_require__(/*! ./components/App.css */ \"./src/components/App.css\");\n\nvar _Footer = __webpack_require__(/*! ./components/Basic/Footer */ \"./src/components/Basic/Footer/index.jsx\");\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _ContactUs = __webpack_require__(/*! ./components/CompanyPages/ContactUs */ \"./src/components/CompanyPages/ContactUs/index.js\");\n\nvar _ContactUs2 = _interopRequireDefault(_ContactUs);\n\nvar _index = __webpack_require__(/*! ./components/index */ \"./src/components/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _logos = __webpack_require__(/*! ./components/CompanyPages/Services/logos */ \"./src/components/CompanyPages/Services/logos/index.js\");\n\nvar _logos2 = _interopRequireDefault(_logos);\n\nvar _branding = __webpack_require__(/*! ./components/CompanyPages/Services/branding */ \"./src/components/CompanyPages/Services/branding/index.js\");\n\nvar _branding2 = _interopRequireDefault(_branding);\n\nvar _videos = __webpack_require__(/*! ./components/CompanyPages/Services/videos */ \"./src/components/CompanyPages/Services/videos/index.js\");\n\nvar _videos2 = _interopRequireDefault(_videos);\n\nvar _websites = __webpack_require__(/*! ./components/CompanyPages/Services/websites */ \"./src/components/CompanyPages/Services/websites/index.js\");\n\nvar _websites2 = _interopRequireDefault(_websites);\n\nvar _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n\nvar _jsCookie = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n\nvar _jsCookie2 = _interopRequireDefault(_jsCookie);\n\nvar _index3 = __webpack_require__(/*! ./components/Basic/Header/index */ \"./src/components/Basic/Header/index.jsx\");\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n    _inherits(App, _Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.confirmCookies = function () {\n            _this.setState({ cook: false });\n            _jsCookie2.default.set('accept-cookie', true, { expires: 365 });\n        };\n\n        _this.state = {\n            cook: true\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            if (_jsCookie2.default.get('accept-cookie') == undefined) {\n                this.setState({ cook: true });\n            } else {\n                this.setState({ cook: false });\n            }\n            window.scrollTo(0, 0);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'App' },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    'sdfdfsfsdf'\n                ),\n                _react2.default.createElement(_reactHelmet2.default, {\n                    htmlAttributes: { lang: \"en\" },\n                    title: 'Dside Branding Agency',\n                    titleTemplate: 'dside.pl - %s',\n                    defaultTitle: 'Dside Branding Agency',\n                    titleAttributes: { itemprop: \"name\", lang: \"en\" },\n                    meta: [{ name: \"charset-8\", content: \"Dside Branding Agency\" }, { name: \"description\", content: \"Dside Branding Agency\" }, { name: \"viewport\", content: \"width=device-width\" }, { property: \"og:type\", content: \"article\" }],\n                    link: [{ rel: \"canonical\", href: \"http://mydside.com\" }, { rel: \"apple-touch-icon\", href: \"http://mydside.com/img/apple-touch-icon-57x57.png\" }, { rel: \"apple-touch-icon\", sizes: \"72x72\", href: \"http://mydside.com/img/apple-touch-icon-72x72.png\" }],\n\n                    script: [{ src: \"http://include.com/pathtojs.js\", type: \"text/javascript\" }, { type: \"application/ld+json\", innerHTML: '{ \"@context\": \"http://schema.org\" }' }],\n                    noscript: [{ innerHTML: '<link rel=\"stylesheet\" type=\"text/css\" href=\"foo.css\" />' }],\n                    style: [{ type: \"text/css\", cssText: \"p {font-size: 12px;}\" }]\n\n                }),\n                _react2.default.createElement(_reactRouterDom.Route, { render: function render(props) {\n\n                        return _react2.default.createElement(\n                            _reactTransitionGroup.TransitionGroup,\n                            null,\n                            props.location.pathname.match(/services\\//gi) ? _react2.default.createElement(_index4.default, { style: 'none' }) : _react2.default.createElement(_index4.default, { style: 'block' }),\n                            _react2.default.createElement(\n                                _reactTransitionGroup.CSSTransition,\n                                { key: props.location.key, timeout: 300, classNames: 'fade' },\n                                _react2.default.createElement(\n                                    _reactRouterDom.Switch,\n                                    null,\n                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/services/logo', component: _logos2.default }),\n                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/services/brand', component: _branding2.default }),\n                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/services/videos', component: _videos2.default }),\n                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/services/website', component: _websites2.default }),\n                                    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/contactus', component: _ContactUs2.default }),\n                                    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _index2.default })\n                                )\n                            )\n                        );\n                    } }),\n                this.state.cook ? _react2.default.createElement(\n                    'div',\n                    { className: 'cookies-container' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'privacy__warning' },\n                        _react2.default.createElement(\n                            'p',\n                            { className: 'cook__description' },\n                            'Did you know? This website uses cookies to ensure you get the best experience on our website. ',\n                            _react2.default.createElement(\n                                'span',\n                                { className: 'shining-underline' },\n                                'Learn more',\n                                _react2.default.createElement('span', null)\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'div',\n                            { className: 'cook__button' },\n                            _react2.default.createElement(\n                                'p',\n                                { onClick: this.confirmCookies },\n                                'Agree'\n                            )\n                        )\n                    )\n                ) : null\n            );\n        }\n    }]);\n\n    return App;\n}(_react.Component);\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

};