'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEachRight = require('./.internal/arrayEachRight.js');

var _arrayEachRight2 = _interopRequireDefault(_arrayEachRight);

var _baseEachRight = require('./.internal/baseEachRight.js');

var _baseEachRight2 = _interopRequireDefault(_baseEachRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `forEach` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @since 2.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see forEach, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEachRight([1, 2], value => console.log(value))
 * // => Logs `2` then `1`.
 */
function forEachRight(collection, iteratee) {
  var func = Array.isArray(collection) ? _arrayEachRight2.default : _baseEachRight2.default;
  return func(collection, iteratee);
}

exports.default = forEachRight;

//# sourceMappingURL=forEachRight.js.map