'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createMathOperation = require('./.internal/createMathOperation.js');

var _createMathOperation2 = _interopRequireDefault(_createMathOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Divide two numbers.
 *
 * @since 4.7.0
 * @category Math
 * @param {number} dividend The first number in a division.
 * @param {number} divisor The second number in a division.
 * @returns {number} Returns the quotient.
 * @example
 *
 * divide(6, 4)
 * // => 1.5
 */
var divide = (0, _createMathOperation2.default)(function (dividend, divisor) {
  return dividend / divisor;
}, 1);

exports.default = divide;

//# sourceMappingURL=divide.js.map