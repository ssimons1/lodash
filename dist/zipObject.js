'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = require('./.internal/assignValue.js');

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseZipObject = require('./.internal/baseZipObject.js');

var _baseZipObject2 = _interopRequireDefault(_baseZipObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2])
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return (0, _baseZipObject2.default)(props || [], values || [], _assignValue2.default);
}

exports.default = zipObject;

//# sourceMappingURL=zipObject.js.map