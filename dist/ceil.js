'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRound = require('./.internal/createRound.js');

var _createRound2 = _interopRequireDefault(_createRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes `number` rounded up to `precision`.
 *
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round up.
 * @param {number} [precision=0] The precision to round up to.
 * @returns {number} Returns the rounded up number.
 * @example
 *
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 */
var ceil = (0, _createRound2.default)('ceil');

exports.default = ceil;

//# sourceMappingURL=ceil.js.map