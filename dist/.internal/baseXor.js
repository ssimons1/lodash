'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseDifference = require('./baseDifference.js');

var _baseDifference2 = _interopRequireDefault(_baseDifference);

var _baseFlatten = require('./baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _baseUniq = require('./baseUniq.js');

var _baseUniq2 = _interopRequireDefault(_baseUniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of methods like `xor` which accepts an array of
 * arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */
function baseXor(arrays, iteratee, comparator) {
  var length = arrays.length;
  if (length < 2) {
    return length ? (0, _baseUniq2.default)(arrays[0]) : [];
  }
  var index = -1;
  var result = new Array(length);

  while (++index < length) {
    var array = arrays[index];
    var othIndex = -1;

    while (++othIndex < length) {
      if (othIndex != index) {
        result[index] = (0, _baseDifference2.default)(result[index] || array, arrays[othIndex], iteratee, comparator);
      }
    }
  }
  return (0, _baseUniq2.default)((0, _baseFlatten2.default)(result, 1), iteratee, comparator);
}

exports.default = baseXor;

//# sourceMappingURL=baseXor.js.map