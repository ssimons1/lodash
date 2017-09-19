'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = require('./.internal/castPath.js');

var _castPath2 = _interopRequireDefault(_castPath);

var _toKey = require('./.internal/toKey.js');

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c1': 3, 'c2': () => 4 } }] }
 *
 * result(object, 'a[0].b.c1')
 * // => 3
 *
 * result(object, 'a[0].b.c2')
 * // => 4
 *
 * result(object, 'a[0].b.c3', 'default')
 * // => 'default'
 *
 * result(object, 'a[0].b.c3', () => 'default')
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = (0, _castPath2.default)(path, object);

  var index = -1;
  var length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[(0, _toKey2.default)(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = typeof value == 'function' ? value.call(object) : value;
  }
  return object;
}

exports.default = result;

//# sourceMappingURL=result.js.map