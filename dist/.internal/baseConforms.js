'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseConformsTo = require('./baseConformsTo.js');

var _baseConformsTo2 = _interopRequireDefault(_baseConformsTo);

var _keys = require('../keys.js');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `conforms` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new spec function.
 */
function baseConforms(source) {
  var props = (0, _keys2.default)(source);
  return function (object) {
    return (0, _baseConformsTo2.default)(object, source, props);
  };
}

exports.default = baseConforms;

//# sourceMappingURL=baseConforms.js.map