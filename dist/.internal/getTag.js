'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = require('./baseGetTag.js');

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var dataViewTag = '[object DataView]';
var mapTag = '[object Map]';
var objectTag = '[object Object]';
var promiseTag = '[object Promise]';
var setTag = '[object Set]';
var weakMapTag = '[object WeakMap]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = '' + DataView;
var mapCtorString = '' + Map;
var promiseCtorString = '' + Promise;
var setCtorString = '' + Set;
var weakMapCtorString = '' + WeakMap;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag2.default;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || getTag(new Map()) != mapTag || getTag(Promise.resolve()) != promiseTag || getTag(new Set()) != setTag || getTag(new WeakMap()) != weakMapTag) {
  getTag = function getTag(value) {
    var result = (0, _baseGetTag2.default)(value);
    var Ctor = result == objectTag ? value.constructor : undefined;
    var ctorString = Ctor ? '' + Ctor : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

exports.default = getTag;

//# sourceMappingURL=getTag.js.map