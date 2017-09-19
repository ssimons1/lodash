'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRound = require('./.internal/createRound.js');

var _createRound2 = _interopRequireDefault(_createRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes `number` rounded down to `precision`.
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round down.
 * @param {number} [precision=0] The precision to round down to.
 * @returns {number} Returns the rounded down number.
 * @example
 *
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 */
var floor = (0, _createRound2.default)('floor');

exports.default = floor;

//# sourceMappingURL=floor.js.map