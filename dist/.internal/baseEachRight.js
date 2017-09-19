'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwnRight = require('./baseForOwnRight.js');

var _baseForOwnRight2 = _interopRequireDefault(_baseForOwnRight);

var _isArrayLike = require('../isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `forEachRight`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEachRight(collection, iteratee) {
  if (collection == null) {
    return collection;
  }
  if (!(0, _isArrayLike2.default)(collection)) {
    return (0, _baseForOwnRight2.default)(collection, iteratee);
  }
  var iterable = Object(collection);
  var length = collection.length;

  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}

exports.default = baseEachRight;

//# sourceMappingURL=baseEachRight.js.map