'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseUnset = require('./baseUnset.js');

var _baseUnset2 = _interopRequireDefault(_baseUnset);

var _isIndex = require('./isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0;
  var lastIndex = length - 1;

  while (length--) {
    var previous = void 0;
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      previous = index;
      if ((0, _isIndex2.default)(index)) {
        array.splice(index, 1);
      } else {
        (0, _baseUnset2.default)(array, index);
      }
    }
  }
  return array;
}

exports.default = basePullAt;

//# sourceMappingURL=basePullAt.js.map