'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./.internal/castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _isArguments = require('./isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isIndex = require('./.internal/isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isLength = require('./isLength.js');

var _isLength2 = _interopRequireDefault(_isLength);

var _toKey = require('./.internal/toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @since 5.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @see has, hasIn hasPath
 * @example
 *
 * const object = { 'a': { 'b': 2 } }
 * const other = create({ 'a': create({ 'b': 2 }) })
 *
 * hasPathIn(object, 'a.b')
 * // => true
 *
 * hasPathIn(object, ['a', 'b'])
 * // => true
 */
function hasPathIn(object, path) {
  path = (0, _castPath2.default)(path, object);

  var index = -1;
  var _path = path,
      length = _path.length;

  var result = false;
  var key = void 0;

  while (++index < length) {
    key = (0, _toKey2.default)(path[index]);
    if (!(result = object != null && key in Object(object))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0, _isLength2.default)(length) && (0, _isIndex2.default)(key, length) && (Array.isArray(object) || (0, _isArguments2.default)(object));
}

exports.default = hasPathIn;

//# sourceMappingURL=hasPathIn.js.map