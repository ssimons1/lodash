'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _copyArray = require('./.internal/copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _isSymbol = require('./isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

var _stringToPath = require('./.internal/stringToPath.js');

var _stringToPath2 = _interopRequireDefault(_stringToPath);

var _toKey = require('./.internal/toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to a property path array.
 *
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * toPath('a.b.c')
 * // => ['a', 'b', 'c']
 *
 * toPath('a[0].b.c')
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (Array.isArray(value)) {
    return (0, _map2.default)(value, _toKey2.default);
  }
  return (0, _isSymbol2.default)(value) ? [value] : (0, _copyArray2.default)((0, _stringToPath2.default)(value));
}

exports.default = toPath;

//# sourceMappingURL=toPath.js.map