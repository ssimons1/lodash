'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayReduce = require('./.internal/arrayReduce.js');

var _arrayReduce2 = _interopRequireDefault(_arrayReduce);

var _baseEach = require('./.internal/baseEach.js');

var _baseEach2 = _interopRequireDefault(_baseEach);

var _baseReduce = require('./.internal/baseReduce.js');

var _baseReduce2 = _interopRequireDefault(_baseReduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `reduce`, `reduceRight`, and `transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduceRight, transform
 * @example
 *
 * reduce([1, 2], (sum, n) => sum + n, 0)
 * // => 3
 *
 * reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 *   return result
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = Array.isArray(collection) ? _arrayReduce2.default : _baseReduce2.default;
  var initAccum = arguments.length < 3;
  return func(collection, iteratee, accumulator, initAccum, _baseEach2.default);
}

exports.default = reduce;

//# sourceMappingURL=reduce.js.map