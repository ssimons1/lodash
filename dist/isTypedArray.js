'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getTag = require('./.internal/getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _nodeUtil = require('./.internal/nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match `toStringTag` values of typed arrays. */
var reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/;

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil2.default && _nodeUtil2.default.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? function (value) {
  return nodeIsTypedArray(value);
} : function (value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object' && value !== null && reTypedTag.test((0, _getTag2.default)(value));
};

exports.default = isTypedArray;

//# sourceMappingURL=isTypedArray.js.map