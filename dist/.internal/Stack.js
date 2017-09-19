'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListCache = require('./ListCache.js');

var _ListCache2 = _interopRequireDefault(_ListCache);

var _MapCache = require('./MapCache.js');

var _MapCache2 = _interopRequireDefault(_MapCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

var Stack = function () {

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    _classCallCheck(this, Stack);

    var data = this.__data__ = new _ListCache2.default(entries);
    this.size = data.size;
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @memberOf Stack
   */


  _createClass(Stack, [{
    key: 'clear',
    value: function clear() {
      this.__data__ = new _ListCache2.default();
      this.size = 0;
    }

    /**
     * Removes `key` and its value from the stack.
     *
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */

  }, {
    key: 'delete',
    value: function _delete(key) {
      var data = this.__data__;
      var result = data['delete'](key);

      this.size = data.size;
      return result;
    }

    /**
     * Gets the stack value for `key`.
     *
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */

  }, {
    key: 'get',
    value: function get(key) {
      return this.__data__.get(key);
    }

    /**
     * Checks if a stack value for `key` exists.
     *
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */

  }, {
    key: 'has',
    value: function has(key) {
      return this.__data__.has(key);
    }

    /**
     * Sets the stack `key` to `value`.
     *
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */

  }, {
    key: 'set',
    value: function set(key, value) {
      var data = this.__data__;
      if (data instanceof _ListCache2.default) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new _MapCache2.default(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
  }]);

  return Stack;
}();

exports.default = Stack;

//# sourceMappingURL=Stack.js.map