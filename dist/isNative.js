'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * Checks if `value` is a pristine native function.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * isNative(Array.prototype.push)
 * // => true
 *
 * isNative(isDate)
 * // => false
 */
function isNative(value) {
  return (0, _isObject2.default)(value) && reIsNative.test(value);
}

exports.default = isNative;

//# sourceMappingURL=isNative.js.map