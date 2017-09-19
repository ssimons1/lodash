'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwn = require('./baseForOwn.js');

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _isArrayLike = require('../isArrayLike.js');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `forEach`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
function baseEach(collection, iteratee) {
  if (collection == null) {
    return collection;
  }
  if (!(0, _isArrayLike2.default)(collection)) {
    return (0, _baseForOwn2.default)(collection, iteratee);
  }
  var length = collection.length;
  var iterable = Object(collection);
  var index = -1;

  while (++index < length) {
    if (iteratee(iterable[index], index, iterable) === false) {
      break;
    }
  }
  return collection;
}

exports.default = baseEach;

//# sourceMappingURL=baseEach.js.map