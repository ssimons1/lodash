'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayReduceRight = require('./.internal/arrayReduceRight.js');

var _arrayReduceRight2 = _interopRequireDefault(_arrayReduceRight);

var _baseEachRight = require('./.internal/baseEachRight.js');

var _baseEachRight2 = _interopRequireDefault(_baseEachRight);

var _baseReduce = require('./.internal/baseReduce.js');

var _baseReduce2 = _interopRequireDefault(_baseReduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `reduce` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduce
 * @example
 *
 * const array = [[0, 1], [2, 3], [4, 5]]
 *
 * reduceRight(array, (flattened, other) => flattened.concat(other), [])
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
  var func = Array.isArray(collection) ? _arrayReduceRight2.default : _baseReduce2.default;
  var initAccum = arguments.length < 3;
  return func(collection, iteratee, accumulator, initAccum, _baseEachRight2.default);
}

exports.default = reduceRight;

//# sourceMappingURL=reduceRight.js.map