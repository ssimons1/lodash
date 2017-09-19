'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _escape = require('./escape.js');

var _escape2 = _interopRequireDefault(_escape);

var _reEscape = require('./.internal/reEscape.js');

var _reEscape2 = _interopRequireDefault(_reEscape);

var _reEvaluate = require('./.internal/reEvaluate.js');

var _reEvaluate2 = _interopRequireDefault(_reEvaluate);

var _reInterpolate = require('./.internal/reInterpolate.js');

var _reInterpolate2 = _interopRequireDefault(_reInterpolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB) as well as ES2015 template strings. Change the
 * following template settings to use alternative delimiters.
 *
 * @type {Object}
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf templateSettings
   * @type {RegExp}
   */
  'escape': _reEscape2.default,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf templateSettings
   * @type {RegExp}
   */
  'evaluate': _reEvaluate2.default,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf templateSettings
   * @type {RegExp}
   */
  'interpolate': _reInterpolate2.default,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf templateSettings
   * @type {string}
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf templateSettings
   * @type {Object}
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf templateSettings.imports
     * @type {Function}
     */
    '_': { 'escape': _escape2.default }
  }
};

exports.default = templateSettings;

//# sourceMappingURL=templateSettings.js.map