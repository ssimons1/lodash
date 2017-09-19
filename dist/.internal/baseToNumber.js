'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSymbol = require('../isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0, _isSymbol2.default)(value)) {
    return NAN;
  }
  return +value;
}

exports.default = baseToNumber;

//# sourceMappingURL=baseToNumber.js.map