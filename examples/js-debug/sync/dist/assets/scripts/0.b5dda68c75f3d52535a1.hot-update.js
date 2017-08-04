webpackHotUpdate(0,{

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.convertStringToInt = exports.mapObject = undefined;
	
	var _defineProperty2 = __webpack_require__(26);
	
	var _defineProperty3 = _interopRequireDefault(_defineProperty2);
	
	var _extends3 = __webpack_require__(27);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _keys = __webpack_require__(50);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mapObject = exports.mapObject = function mapObject(obj, func) {
	  var keys = (0, _keys2.default)(obj);
	  return keys.reduce(function (result, key) {
	    return (0, _extends4.default)({}, result, (0, _defineProperty3.default)({}, key, func(obj[key])));
	  }, {});
	};
	
	var convertStringToInt = exports.convertStringToInt = function convertStringToInt(str) {
	  return parseInt(str, 10);
	};

/***/ }

})
//# sourceMappingURL=0.b5dda68c75f3d52535a1.hot-update.js.map