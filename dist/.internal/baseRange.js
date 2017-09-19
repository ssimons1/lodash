"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `range` and `rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1;
  var length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  var result = new Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

exports.default = baseRange;

//# sourceMappingURL=baseRange.js.map