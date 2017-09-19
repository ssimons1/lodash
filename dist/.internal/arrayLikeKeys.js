'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArguments = require('../isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isBuffer = require('../isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isIndex = require('./isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isTypedArray = require('../isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to check objects for own properties. */
var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = Array.isArray(value);
  var isArg = !isArr && (0, _isArguments2.default)(value);
  var isBuff = !isArr && !isArg && (0, _isBuffer2.default)(value);
  var isType = !isArr && !isArg && !isBuff && (0, _isTypedArray2.default)(value);
  var skipIndexes = isArr || isArg || isBuff || isType;
  var length = value.length;
  var result = new Array(skipIndexes ? length : 0);
  var index = skipIndexes ? -1 : length;
  while (++index < length) {
    result[index] = '' + index;
  }
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    (0, _isIndex2.default)(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = arrayLikeKeys;

//# sourceMappingURL=arrayLikeKeys.js.map