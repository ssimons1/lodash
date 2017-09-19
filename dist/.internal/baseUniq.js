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

var _cacheHas = require('./cacheHas.js');

var _cacheHas2 = _interopRequireDefault(_cacheHas);

var _createSet = require('./createSet.js');

var _createSet2 = _interopRequireDefault(_createSet);

var _setToArray = require('./setToArray.js');

var _setToArray2 = _interopRequireDefault(_setToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `uniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1;
  var includes = _arrayIncludes2.default;
  var isCommon = true;

  var length = array.length;

  var result = [];
  var seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith2.default;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : (0, _createSet2.default)(array);
    if (set) {
      return (0, _setToArray2.default)(set);
    }
    isCommon = false;
    includes = _cacheHas2.default;
    seen = new _SetCache2.default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    var value = array[index];
    var computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

exports.default = baseUniq;

//# sourceMappingURL=baseUniq.js.map