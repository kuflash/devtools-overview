webpackHotUpdate(0,{

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mapObject = undefined;
	
	var _defineProperty2 = __webpack_require__(53);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends3 = __webpack_require__(26);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _keys = __webpack_require__(49);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapObject = exports.mapObject = function mapObject(obj, func) {
	  var keys = (0, _keys2.default)(obj);
	  return keys.reduce(function (result, key) {
	    return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, key, func(obj[key])));
	  }, {});
	};

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(7);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};

/***/ }

})
//# sourceMappingURL=0.8bc3d4eb10d01e622d36.hot-update.js.map