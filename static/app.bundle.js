/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/App.jsx","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueList.jsx */ \"./src/IssueList.jsx\");\n\n\n\nvar destination = document.getElementById(\"container\");\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IssueList_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), destination);\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IssueAdd; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar IssueAdd =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(IssueAdd, _React$Component);\n\n  function IssueAdd() {\n    var _this;\n\n    _classCallCheck(this, IssueAdd);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.issueAdd;\n      this.props.createIssue({\n        owner: form.owner.value,\n        title: form.title.value,\n        status: 'New',\n        created: new Date()\n      });\n      form.owner.value = '';\n      form.title.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"form\", {\n        name: \"issueAdd\",\n        onSubmit: this.handleSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"owner\",\n        placeholder: \"Owner\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        placeholder: \"Title\"\n      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", null, \"Add\")));\n    }\n  }]);\n\n  return IssueAdd;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component); // function IssueAdd(props) {\n//     function handleSubmit(e) {\n//         e.preventDefault();\n//         var form = document.forms.issueAdd;\n//         props.createIssue({\n//             owner:form.owner.value,\n//             title:form.title.value,\n//             status:'New',\n//             created:new Date(),\n//         });\n//         form.owner.value='';\n//         form.title.value='';\n//     }\n//     return (\n//         <div>\n//             <form name=\"issueAdd\" onSubmit={handleSubmit}>\n//                 <input type='text' name='owner' placeholder=\"Owner\" />\n//                 <input type='text' name='title' placeholder=\"Title\" />\n//                 <button>Add</button>\n//             </form>\n//         </div>\n//     );\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/IssueAdd.jsx?");

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IssueFilter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar IssueFilter =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(IssueFilter, _React$Component);\n\n  function IssueFilter() {\n    _classCallCheck(this, IssueFilter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));\n  }\n\n  _createClass(IssueFilter, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is a place holder for the issue Filter.\");\n    }\n  }]);\n\n  return IssueFilter;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n;\n\n//# sourceURL=webpack:///./src/IssueFilter.jsx?");

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IssueList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! whatwg-fetch */ \"./node_modules/whatwg-fetch/fetch.js\");\n/* harmony import */ var _IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IssueAdd.jsx */ \"./src/IssueAdd.jsx\");\n/* harmony import */ var _IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IssueFilter.jsx */ \"./src/IssueFilter.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n // class IssueRow extends React.Component {\n//     render() {\n//         const issue = this.props.issue;\n//         console.log(\"count\");\n//         return (\n//             <tr>\n//               <td>{issue._id}</td>  \n//               <td>{issue.status}</td>\n//               <td>{issue.owner}</td>\n//               <td>{issue.created.toDateString()}</td>\n//               <td>{issue.effort}</td>\n//               <td>{issue.completionDate? \n//               issue.completionDate.toDateString(): ''}</td>\n//               <td>{issue.title}</td>\n//             </tr>\n//         );\n//     };\n// }\n\nvar IssueRow = function IssueRow(props) {\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue._id), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.status), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.owner), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.created.toDateString()), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.effort), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.completionDate ? props.issue.completionDate.toDateString() : ''), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"td\", null, props.issue.title));\n}; // class IssueTable extends React.Component {\n//     render() {\n//         const issueRows = this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />)\n//         return (\n//             <table className=\"bordered-table\">\n//                 <thead>\n//                     <tr>\n//                         <th>Id</th>\n//                         <th>Status</th>\n//                         <th>Owner</th>\n//                         <th>Created</th>\n//                         <th>Effort</th>\n//                         <th>Completion Date</th>\n//                         <th>title</th>\n//                     </tr>\n//                 </thead>\n//                 <tbody>\n//                     {issueRows}\n//                 </tbody>\n//             </table>\n//         );\n//     }\n// }\n\n\nvar IssueTable = function IssueTable(props) {\n  var issueRows = props.issues.map(function (issue) {\n    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IssueRow, {\n      key: issue._id,\n      issue: issue\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Id\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Status\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Owner\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Created\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Effort\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"Completion Date\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"th\", null, \"title\"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"tbody\", null, issueRows));\n};\n\nvar IssueList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(IssueList, _React$Component);\n\n  function IssueList() {\n    var _this;\n\n    _classCallCheck(this, IssueList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));\n    _this.state = {\n      issues: []\n    };\n    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueList, [{\n    key: \"createIssue\",\n    value: function createIssue(newIssue) {\n      var _this2 = this;\n\n      fetch('/api/issues', {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(newIssue)\n      }).then(function (response) {\n        if (response.ok) {\n          response.json().then(function (newIssue) {\n            newIssue.created = new Date(newIssue.created);\n\n            if (newIssue.completionDate) {\n              newIssue.completionDate = new Date(newIssue.completionDate);\n            }\n\n            ;\n\n            var newIssues = _this2.state.issues.concat(newIssue);\n\n            _this2.setState({\n              issues: newIssues\n            });\n          });\n        } else {\n          response.json().then(function (error) {\n            alert(\"Failed to add issue: \" + error.message);\n          });\n        }\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"loadData\",\n    value: function loadData() {\n      var _this3 = this;\n\n      fetch('/api/issues').then(function (response) {\n        if (response.ok) {\n          response.json().then(function (data) {\n            console.log(\"Total count of records: \", data._metadata.total_count);\n            data.records.forEach(function (issue) {\n              issue.created = new Date(issue.created);\n\n              if (issue.completionDate) {\n                issue.completionDate = new Date(issue.completionDate);\n              }\n            });\n\n            _this3.setState({\n              issues: data.records\n            });\n          });\n        } else {\n          response.json().then(function (error) {\n            alert(\"Failed to fetch issues:\" + error.message);\n          });\n        }\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"h1\", null, \"Issue Tracker\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IssueFilter_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IssueTable, {\n        issues: this.state.issues\n      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IssueAdd_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        createIssue: this.createIssue\n      }));\n    }\n  }]);\n\n  return IssueList;\n}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/IssueList.jsx?");

/***/ })

/******/ });