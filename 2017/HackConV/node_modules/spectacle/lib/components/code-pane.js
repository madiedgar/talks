'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _base = require('../utils/base');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var format = function format(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

var CodePane = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(CodePane, _Component);

  function CodePane() {
    (0, _classCallCheck3.default)(this, CodePane);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  CodePane.prototype.componentDidMount = function componentDidMount() {
    return window.Prism && window.Prism.highlightAll();
  };

  CodePane.prototype.createMarkup = function createMarkup() {
    var _props = this.props,
        source = _props.source,
        children = _props.children;

    var code = (0, _isUndefined2.default)(source) || source === '' ? children : source;
    return {
      __html: format(code)
    };
  };

  CodePane.prototype.render = function render() {
    return (0, _jsx3.default)('pre', {
      className: this.props.className,
      style: [this.context.styles.components.codePane.pre, _base.getStyles.call(this), this.props.style]
    }, void 0, (0, _jsx3.default)('code', {
      className: 'language-' + this.props.lang,
      style: this.context.styles.components.codePane.code,
      dangerouslySetInnerHTML: this.createMarkup()
    }));
  };

  return CodePane;
}(_react.Component)) || _class;

exports.default = CodePane;


CodePane.contextTypes = {
  styles: _propTypes2.default.object,
  store: _propTypes2.default.object
};

CodePane.defaultProps = {
  lang: 'markup',
  source: ''
};