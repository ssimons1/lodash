'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyArray = require('./.internal/copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 */
function shuffle(array) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  var index = -1;
  var lastIndex = length - 1;
  var result = (0, _copyArray2.default)(array);
  while (++index < length) {
    var rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    var value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  return result;
}

exports.default = shuffle;

//# sourceMappingURL=shuffle.js.map