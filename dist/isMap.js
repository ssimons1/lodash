'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getTag = require('./.internal/getTag.js');

var _getTag2 = _interopRequireDefault(_getTag);

var _isObjectLike = require('./isObjectLike.js');

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

var _nodeUtil = require('./.internal/nodeUtil.js');

var _nodeUtil2 = _interopRequireDefault(_nodeUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Node.js helper references. */
var nodeIsMap = _nodeUtil2.default && _nodeUtil2.default.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * isMap(new Map)
 * // => true
 *
 * isMap(new WeakMap)
 * // => false
 */
var isMap = nodeIsMap ? function (value) {
  return nodeIsMap(value);
} : function (value) {
  return (0, _isObjectLike2.default)(value) && (0, _getTag2.default)(value) == '[object Map]';
};

exports.default = isMap;

//# sourceMappingURL=isMap.js.map