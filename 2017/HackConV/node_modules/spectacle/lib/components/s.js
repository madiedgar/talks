'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(S, _Component);

  function S() {
    (0, _classCallCheck3.default)(this, S);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  S.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        style = _props.style,
        children = _props.children;

    var styles = {};
    if (type.indexOf('strikethrough') !== -1) {
      styles = (0, _extends3.default)({}, styles, { textDecoration: 'line-through' });
    }
    if (type.indexOf('underline') !== -1) {
      styles = (0, _extends3.default)({}, styles, { textDecoration: 'underline' });
    }
    if (type.indexOf('bold') !== -1) {
      styles = (0, _extends3.default)({}, styles, { fontWeight: 'bold' });
    }
    if (type.indexOf('italic') !== -1) {
      styles = (0, _extends3.default)({}, styles, { fontStyle: 'italic' });
    }
    return (0, _jsx3.default)('span', {
      className: this.props.className,
      style: [styles, this.context.styles.components.s[type], _base.getStyles.call(this), style]
    }, void 0, children);
  };

  return S;
}(_react.Component)) || _class;

exports.default = S;


S.contextTypes = {
  styles: _propTypes2.default.object,
  store: _propTypes2.default.object
};