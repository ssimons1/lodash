'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSet = require('./.internal/baseSet.js');

var _baseSet2 = _interopRequireDefault(_baseSet);

var _baseZipObject = require('./.internal/baseZipObject.js');

var _baseZipObject2 = _interopRequireDefault(_baseZipObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `zipObject` except that it supports property paths.
 *
 * @since 4.1.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * @example
 *
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
  return (0, _baseZipObject2.default)(props || [], values || [], _baseSet2.default);
}

exports.default = zipObjectDeep;

//# sourceMappingURL=zipObjectDeep.js.map