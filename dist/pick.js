'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePick = require('./.internal/basePick.js');

var _basePick2 = _interopRequireDefault(_basePick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * const object = { 'a': 1, 'b': '2', 'c': 3 }
 *
 * pick(object, ['a', 'c'])
 * // => { 'a': 1, 'c': 3 }
 */
function pick(object) {
  for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paths[_key - 1] = arguments[_key];
  }

  return object == null ? {} : (0, _basePick2.default)(object, paths);
}

exports.default = pick;

//# sourceMappingURL=pick.js.map