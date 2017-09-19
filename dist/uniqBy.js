'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseUniq = require('./.internal/baseUniq.js');

var _baseUniq2 = _interopRequireDefault(_baseUniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniq, uniqWith
 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function uniqBy(array, iteratee) {
  return array != null && array.length ? (0, _baseUniq2.default)(array, iteratee) : [];
}

exports.default = uniqBy;

//# sourceMappingURL=uniqBy.js.map