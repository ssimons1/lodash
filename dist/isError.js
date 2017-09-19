'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./.internal/baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isPlainObject = require('./isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 */
function isError(value) {
  if (!(0, _isObjectLike2.default)(value)) {
    return false;
  }
  var tag = (0, _baseGetTag2.default)(value);
  return tag == '[object Error]' || tag == '[object DOMException]' || typeof value.message == 'string' && typeof value.name == 'string' && !(0, _isPlainObject2.default)(value);
}

exports.default = isError;

//# sourceMappingURL=isError.js.map