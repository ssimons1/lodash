'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = require('./.internal/arrayEach.js');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _baseForOwn = require('./.internal/baseForOwn.js');

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _isBuffer = require('./isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _isTypedArray = require('./isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An alternative to `reduce` this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @see reduce, reduceRight
 * @example
 *
 * transform([2, 3, 4], (result, n) => {
 *   result.push(n *= n)
 *   return n % 2 == 0
 * }, [])
 * // => [4, 9]
 *
 * transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = Array.isArray(object);
  var isArrLike = isArr || (0, _isBuffer2.default)(object) || (0, _isTypedArray2.default)(object);

  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if ((0, _isObject2.default)(object)) {
      accumulator = typeof Ctor == 'function' ? Object.create(Object.getPrototypeOf(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? _arrayEach2.default : _baseForOwn2.default)(object, function (value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

exports.default = transform;

//# sourceMappingURL=transform.js.map