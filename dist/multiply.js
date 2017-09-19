'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createMathOperation = require('./.internal/createMathOperation.js');

var _createMathOperation2 = _interopRequireDefault(_createMathOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Multiply two numbers.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} multiplier The first number in a multiplication.
 * @param {number} multiplicand The second number in a multiplication.
 * @returns {number} Returns the product.
 * @example
 *
 * multiply(6, 4)
 * // => 24
 */
var multiply = (0, _createMathOperation2.default)(function (multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);

exports.default = multiply;

//# sourceMappingURL=multiply.js.map