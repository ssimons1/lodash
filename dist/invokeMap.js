'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseEach = require('./.internal/baseEach.js');

var _baseEach2 = _interopRequireDefault(_baseEach);

var _invoke = require('./invoke.js');

var _invoke2 = _interopRequireDefault(_invoke);

var _isArrayLike = require('./isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Invokes the method at `path` of each element in `collection`, returning
 * an array of the results of each invoked method. Any additional arguments
 * are provided to each invoked method. If `path` is a function, it's invoked
 * for, and `this` bound to, each element in `collection`.
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {Array} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * invokeMap([123, 456], String.prototype.split, [''])
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
function invokeMap(collection, path, args) {
  var index = -1;
  var isFunc = typeof path == 'function';
  var result = (0, _isArrayLike2.default)(collection) ? new Array(collection.length) : [];

  (0, _baseEach2.default)(collection, function (value) {
    result[++index] = isFunc ? path.apply(value, args) : (0, _invoke2.default)(value, path, args);
  });
  return result;
}

exports.default = invokeMap;

//# sourceMappingURL=invokeMap.js.map