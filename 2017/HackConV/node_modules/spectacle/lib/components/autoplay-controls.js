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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = (0, _jsx3.default)('path', {
  d: 'M23.5,4V26h-6V4ZM6.5,26h6V4h-6Z'
});

var _ref2 = (0, _jsx3.default)('path', {
  d: 'M26,15,6,25V5Z'
});

var AutoplayControls = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(AutoplayControls, _Component);

  function AutoplayControls() {
    (0, _classCallCheck3.default)(this, AutoplayControls);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  AutoplayControls.prototype.render = function render() {
    var styles = {
      opacity: 0,
      cursor: 'pointer',
      transition: '300ms opacity ease',
      ':hover': {
        opacity: 1
      }
    };

    var pauseBtn = (0, _jsx3.default)('button', {
      type: 'button',
      onClick: this.props.onPause,
      style: [styles, this.context.styles.autoplay.pause]
    }, 'pause', (0, _jsx3.default)('svg', {
      style: this.context.styles.autoplay.pauseIcon,
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30px',
      height: '30px',
      viewBox: '0 0 30 30'
    }, void 0, _ref));

    var playBtn = (0, _jsx3.default)('button', {
      type: 'button',
      onClick: this.props.onPlay,
      style: [styles, this.context.styles.autoplay.play]
    }, 'play', (0, _jsx3.default)('svg', {
      style: this.context.styles.autoplay.playIcon,
      xmlns: 'http://www.w3.org/2000/svg',
      width: '30px',
      height: '30px',
      viewBox: '0 0 30 30'
    }, void 0, _ref2));

    return this.props.autoplaying ? pauseBtn : playBtn;
  };

  return AutoplayControls;
}(_react.Component)) || _class;

exports.default = AutoplayControls;


AutoplayControls.contextTypes = {
  styles: _propTypes2.default.object
};