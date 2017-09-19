'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _isPlainObject = require('./isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is likely a DOM element.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * isElement(document.body)
 * // => true
 *
 * isElement('<body>')
 * // => false
 */
function isElement(value) {
  return (0, _isObjectLike2.default)(value) && value.nodeType === 1 && !(0, _isPlainObject2.default)(value);
}

exports.default = isElement;

//# sourceMappingURL=isElement.js.map