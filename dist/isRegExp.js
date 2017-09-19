'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./.internal/baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _nodeUtil = require('./.internal/nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsRegExp = _nodeUtil2.default && _nodeUtil2.default.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 */
var isRegExp = nodeIsRegExp ? function (value) {
  return nodeIsRegExp(value);
} : function (value) {
  return (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == '[object RegExp]';
};

exports.default = isRegExp;

//# sourceMappingURL=isRegExp.js.map