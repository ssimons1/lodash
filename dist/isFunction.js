'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./.internal/baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * isFunction(_)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 */
function isFunction(value) {
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == '[object Function]' || tag == '[object AsyncFunction]' || tag == '[object GeneratorFunction]' || tag == '[object Proxy]';
}

exports.default = isFunction;

//# sourceMappingURL=isFunction.js.map