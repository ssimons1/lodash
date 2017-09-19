'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRange = require('./baseRange.js');

var _baseRange2 = _interopRequireDefault(_baseRange);

var _toFinite = require('../toFinite.js');

var _toFinite2 = _interopRequireDefault(_toFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `range` or `rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function (start, end, step) {
    // Ensure the sign of `-0` is preserved.
    start = (0, _toFinite2.default)(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = (0, _toFinite2.default)(end);
    }
    step = step === undefined ? start < end ? 1 : -1 : (0, _toFinite2.default)(step);
    return (0, _baseRange2.default)(start, end, step, fromRight);
  };
}

exports.default = createRange;

//# sourceMappingURL=createRange.js.map