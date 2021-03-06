'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRound = require('./.internal/createRound.js');

var _createRound2 = _interopRequireDefault(_createRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes `number` rounded to `precision`.
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * round(4.006)
 * // => 4
 *
 * round(4.006, 2)
 * // => 4.01
 *
 * round(4060, -2)
 * // => 4100
 */
var round = (0, _createRound2.default)('round');

exports.default = round;

//# sourceMappingURL=round.js.map