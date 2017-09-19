'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = require('./.internal/arrayEach.js');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _baseEach = require('./.internal/baseEach.js');

var _baseEach2 = _interopRequireDefault(_baseEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `forIn`
 * or `forOwn` for object iteration.
 *
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = Array.isArray(collection) ? _arrayEach2.default : _baseEach2.default;
  return func(collection, iteratee);
}

exports.default = forEach;

//# sourceMappingURL=forEach.js.map