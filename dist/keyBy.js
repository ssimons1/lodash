'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = require('./.internal/baseAssignValue.js');

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _reduce = require('./reduce.js');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @see groupBy, partition
 * @example
 *
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ]
 *
 * keyBy(array, ({ code }) => String.fromCharCode(code))
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 */
function keyBy(collection, iteratee) {
  return (0, _reduce2.default)(collection, function (result, value, key) {
    return (0, _baseAssignValue2.default)(result, iteratee(value), value), result;
  }, {});
}

exports.default = keyBy;

//# sourceMappingURL=keyBy.js.map