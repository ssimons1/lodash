'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SetCache = require('./SetCache.js');

var _SetCache2 = _interopRequireDefault(_SetCache);

var _arrayIncludes = require('./arrayIncludes.js');

var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

var _arrayIncludesWith = require('./arrayIncludesWith.js');

var _arrayIncludesWith2 = _interopRequireDefault(_arrayIncludesWith);

var _map = require('../map.js');

var _map2 = _interopRequireDefault(_map);

var _cacheHas = require('./cacheHas.js');

var _cacheHas2 = _interopRequireDefault(_cacheHas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of methods like `intersection` that accepts an
 * array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith2.default : _arrayIncludes2.default;
  var length = arrays[0].length;
  var othLength = arrays.length;
  var caches = new Array(othLength);
  var result = [];

  var array = void 0;
  var maxLength = Infinity;
  var othIndex = othLength;

  while (othIndex--) {
    array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = (0, _map2.default)(array, function (value) {
        return iteratee(value);
      });
    }
    maxLength = Math.min(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new _SetCache2.default(othIndex && array) : undefined;
  }
  array = arrays[0];

  var index = -1;
  var seen = caches[0];

  outer: while (++index < length && result.length < maxLength) {
    var value = array[index];
    var computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (!(seen ? (0, _cacheHas2.default)(seen, computed) : includes(result, computed, comparator))) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache ? (0, _cacheHas2.default)(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

exports.default = baseIntersection;

//# sourceMappingURL=baseIntersection.js.map