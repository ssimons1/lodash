'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eq = require('../eq.js');

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `sortedUniq` and `sortedUniqBy`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseSortedUniq(array, iteratee) {
  var seen = void 0;
  var index = -1;
  var resIndex = 0;

  var length = array.length;

  var result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    if (!index || !(0, _eq2.default)(computed, seen)) {
      seen = computed;
      result[resIndex++] = value === 0 ? 0 : value;
    }
  }
  return result;
}

exports.default = baseSortedUniq;

//# sourceMappingURL=baseSortedUniq.js.map