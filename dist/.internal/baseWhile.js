'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('../slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of methods like `dropWhile` and `takeWhile`.
 *
 * @private
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the slice of `array`.
 */
function baseWhile(array, predicate, isDrop, fromRight) {
  var length = array.length;

  var index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}

  return isDrop ? (0, _slice2.default)(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : (0, _slice2.default)(array, fromRight ? index + 1 : 0, fromRight ? length : index);
}

exports.default = baseWhile;

//# sourceMappingURL=baseWhile.js.map