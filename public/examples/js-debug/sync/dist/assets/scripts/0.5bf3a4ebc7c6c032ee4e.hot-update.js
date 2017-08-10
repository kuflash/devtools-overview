webpackHotUpdate(0,{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(5);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(6);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Calculator = function () {
	  function Calculator() {
	    (0, _classCallCheck3.default)(this, Calculator);
	
	    this.$numberA = (0, _jquery2.default)('.js-number-a');
	    this.$numberB = (0, _jquery2.default)('.js-number-b');
	    this.$action = (0, _jquery2.default)('.js-action');
	    this.$result = (0, _jquery2.default)('.js-result');
	
	    this.addListeners();
	  }
	
	  (0, _createClass3.default)(Calculator, [{
	    key: 'getSum',
	    value: function getSum(_ref) {
	      var a = _ref.a,
	          b = _ref.b;
	
	      return a + b;
	    }
	  }, {
	    key: 'display',
	    value: function display(value) {
	      this.$result.text(value);
	    }
	  }, {
	    key: 'addListeners',
	    value: function addListeners() {
	      this.$action.on('click', this.onClickAction.bind(this));
	    }
	  }, {
	    key: 'onClickAction',
	    value: function onClickAction() {
	      var numberA = this.$numberA.val();
	      var numberB = this.$numberB.val();
	      var sum = this.getSum({ a: numberA, b: numberB });
	      // const sum = this.getSum(mapObject({a: numberA, b: numberB}, convertStringToInt));
	      this.display(sum);
	    }
	  }]);
	  return Calculator;
	}();
	
	exports.default = Calculator;

/***/ }

})
//# sourceMappingURL=0.5bf3a4ebc7c6c032ee4e.hot-update.js.map