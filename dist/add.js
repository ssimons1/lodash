'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createMathOperation = require('./.internal/createMathOperation.js');

var _createMathOperation2 = _interopRequireDefault(_createMathOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 * @example
 *
 * add(6, 4)
 * // => 10
 */
var add = (0, _createMathOperation2.default)(function (augend, addend) {
  return augend + addend;
}, 0);

exports.default = add;

//# sourceMappingURL=add.js.map