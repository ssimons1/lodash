'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _meanBy = require('./meanBy.js');

var _meanBy2 = _interopRequireDefault(_meanBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the mean of the values in `array`.
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the mean.
 * @example
 *
 * mean([4, 2, 8, 6])
 * // => 5
 */
function mean(array) {
  return (0, _meanBy2.default)(array, function (value) {
    return value;
  });
}

exports.default = mean;

//# sourceMappingURL=mean.js.map