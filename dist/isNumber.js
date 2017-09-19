'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./.internal/baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `Number.isFinite` method.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @see isInteger, toInteger, toNumber
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' || (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == '[object Number]';
}

exports.default = isNumber;

//# sourceMappingURL=isNumber.js.map