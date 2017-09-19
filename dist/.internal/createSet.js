'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setToArray = require('./setToArray.js');

var _setToArray2 = _interopRequireDefault(_setToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = Set && 1 / (0, _setToArray2.default)(new Set([, -0]))[1] == INFINITY ? function (values) {
  return new Set(values);
} : function () {};

exports.default = createSet;

//# sourceMappingURL=createSet.js.map