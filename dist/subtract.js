'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createMathOperation = require('./.internal/createMathOperation.js');

var _createMathOperation2 = _interopRequireDefault(_createMathOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Subtract two numbers.
 *
 * @since 4.0.0
 * @category Math
 * @param {number} minuend The first number in a subtraction.
 * @param {number} subtrahend The second number in a subtraction.
 * @returns {number} Returns the difference.
 * @example
 *
 * subtract(6, 4)
 * // => 2
 */
var subtract = (0, _createMathOperation2.default)(function (minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);

exports.default = subtract;

//# sourceMappingURL=subtract.js.map