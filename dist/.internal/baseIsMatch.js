'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Stack = require('./Stack.js');

var _Stack2 = _interopRequireDefault(_Stack);

var _baseIsEqual = require('./baseIsEqual.js');

var _baseIsEqual2 = _interopRequireDefault(_baseIsEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `isMatch`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length;
  var length = index;
  var noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  var data = void 0;
  var result = void 0;
  object = Object(object);
  while (index--) {
    data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0];
    var objValue = object[key];
    var srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack2.default();
      if (customizer) {
        result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? (0, _baseIsEqual2.default)(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

exports.default = baseIsMatch;

//# sourceMappingURL=baseIsMatch.js.map