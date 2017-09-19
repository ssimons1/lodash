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

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `difference` without support
 * for excluding multiple arrays.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var includes = _arrayIncludes2.default;
  var isCommon = true;
  var result = [];
  var valuesLength = values.length;

  if (!array.length) {
    return result;
  }
  if (iteratee) {
    values = (0, _map2.default)(values, function (value) {
      return iteratee(value);
    });
  }
  if (comparator) {
    includes = _arrayIncludesWith2.default;
    isCommon = false;
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = _cacheHas2.default;
    isCommon = false;
    values = new _SetCache2.default(values);
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    outer: for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var computed = iteratee == null ? value : iteratee(value);

      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes(values, computed, comparator)) {
        result.push(value);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

exports.default = baseDifference;

//# sourceMappingURL=baseDifference.js.map