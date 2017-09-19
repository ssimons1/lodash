'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SetCache = require('./SetCache.js');

var _SetCache2 = _interopRequireDefault(_SetCache);

var _some = require('../some.js');

var _some2 = _interopRequireDefault(_some);

var _cacheHas = require('./cacheHas.js');

var _cacheHas2 = _interopRequireDefault(_cacheHas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
  var arrLength = array.length;
  var othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1;
  var result = true;
  var seen = bitmask & COMPARE_UNORDERED_FLAG ? new _SetCache2.default() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.

  var _loop = function _loop() {
    var compared = void 0;
    var arrValue = array[index];
    var othValue = other[index];

    if (customizer) {
      compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        return 'continue';
      }
      result = false;
      return 'break';
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!(0, _some2.default)(other, function (othValue, othIndex) {
        if (!(0, _cacheHas2.default)(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        return 'break';
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      return 'break';
    }
  };

  _loop2: while (++index < arrLength) {
    var _ret = _loop();

    switch (_ret) {
      case 'continue':
        continue;

      case 'break':
        break _loop2;}
  }

  stack['delete'](array);
  stack['delete'](other);
  return result;
}

exports.default = equalArrays;

//# sourceMappingURL=equalArrays.js.map