'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignMergeValue = require('./assignMergeValue.js');

var _assignMergeValue2 = _interopRequireDefault(_assignMergeValue);

var _cloneBuffer = require('./cloneBuffer.js');

var _cloneBuffer2 = _interopRequireDefault(_cloneBuffer);

var _cloneTypedArray = require('./cloneTypedArray.js');

var _cloneTypedArray2 = _interopRequireDefault(_cloneTypedArray);

var _copyArray = require('./copyArray.js');

var _copyArray2 = _interopRequireDefault(_copyArray);

var _initCloneObject = require('./initCloneObject.js');

var _initCloneObject2 = _interopRequireDefault(_initCloneObject);

var _isArguments = require('../isArguments.js');

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArrayLikeObject = require('../isArrayLikeObject.js');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

var _isBuffer = require('../isBuffer.js');

var _isBuffer2 = _interopRequireDefault(_isBuffer);

var _isObject = require('../isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _isPlainObject = require('../isPlainObject.js');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _isTypedArray = require('../isTypedArray.js');

var _isTypedArray2 = _interopRequireDefault(_isTypedArray);

var _toPlainObject = require('../toPlainObject.js');

var _toPlainObject2 = _interopRequireDefault(_toPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key];
  var srcValue = source[key];
  var stacked = stack.get(srcValue);

  if (stacked) {
    (0, _assignMergeValue2.default)(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, '' + key, object, source, stack) : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = Array.isArray(srcValue);
    var isBuff = !isArr && (0, _isBuffer2.default)(srcValue);
    var isTyped = !isArr && !isBuff && (0, _isTypedArray2.default)(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (Array.isArray(objValue)) {
        newValue = objValue;
      } else if ((0, _isArrayLikeObject2.default)(objValue)) {
        newValue = (0, _copyArray2.default)(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = (0, _cloneBuffer2.default)(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = (0, _cloneTypedArray2.default)(srcValue, true);
      } else {
        newValue = [];
      }
    } else if ((0, _isPlainObject2.default)(srcValue) || (0, _isArguments2.default)(srcValue)) {
      newValue = objValue;
      if ((0, _isArguments2.default)(objValue)) {
        newValue = (0, _toPlainObject2.default)(objValue);
      } else if (srcIndex && typeof objValue == 'function' || !(0, _isObject2.default)(objValue)) {
        newValue = (0, _initCloneObject2.default)(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  (0, _assignMergeValue2.default)(object, key, newValue);
}

exports.default = baseMergeDeep;

//# sourceMappingURL=baseMergeDeep.js.map