'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('../slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;

  end = end === undefined ? length : end;
  return !start && end >= length ? array : (0, _slice2.default)(array, start, end);
}

exports.default = castSlice;

//# sourceMappingURL=castSlice.js.map