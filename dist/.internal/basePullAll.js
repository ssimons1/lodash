'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('../map.js');

var _map2 = _interopRequireDefault(_map);

var _baseIndexOf = require('./baseIndexOf.js');

var _baseIndexOf2 = _interopRequireDefault(_baseIndexOf);

var _baseIndexOfWith = require('./baseIndexOfWith.js');

var _baseIndexOfWith2 = _interopRequireDefault(_baseIndexOfWith);

var _copyArray = require('./copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `pullAllBy`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? _baseIndexOfWith2.default : _baseIndexOf2.default;
  var length = values.length;

  var index = -1;
  var seen = array;

  if (array === values) {
    values = (0, _copyArray2.default)(values);
  }
  if (iteratee) {
    seen = (0, _map2.default)(array, function (value) {
      return iteratee(value);
    });
  }
  while (++index < length) {
    var fromIndex = 0;
    var value = values[index];
    var computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        seen.splice(fromIndex, 1);
      }
      array.splice(fromIndex, 1);
    }
  }
  return array;
}

exports.default = basePullAll;

//# sourceMappingURL=basePullAll.js.map