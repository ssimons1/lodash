'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isSymbol = require('../isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined;
    var valIsNull = value === null;
    var valIsReflexive = value === value;
    var valIsSymbol = (0, _isSymbol2.default)(value);

    var othIsDefined = other !== undefined;
    var othIsNull = other === null;
    var othIsReflexive = other === other;
    var othIsSymbol = (0, _isSymbol2.default)(other);

    if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
      return 1;
    }
    if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

exports.default = compareAscending;

//# sourceMappingURL=compareAscending.js.map