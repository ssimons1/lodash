'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = require('./.internal/baseAssignValue.js');

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _reduce = require('./reduce.js');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * countBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': 1, '6': 2 }
 */
function countBy(collection, iteratee) {
  return (0, _reduce2.default)(collection, function (result, value, key) {
    key = iteratee(value);
    if (hasOwnProperty.call(result, key)) {
      ++result[key];
    } else {
      (0, _baseAssignValue2.default)(result, key, 1);
    }
    return result;
  }, {});
}

exports.default = countBy;

//# sourceMappingURL=countBy.js.map