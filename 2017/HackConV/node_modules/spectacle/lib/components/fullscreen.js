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
  d: 'M73.143,329.143H0V512h182.857v-73.143H73.143V329.143z M0,182.857h73.143V73.143h109.715V0H0V182.857z M438.857,438.857\n          H329.143V512H512V329.143h-73.143V438.857z M329.143,0v73.143h109.715v109.715H512V0H329.143z'
});

var Fullscreen = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Fullscreen, _Component);

  function Fullscreen() {
    (0, _classCallCheck3.default)(this, Fullscreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));

    _this.handleToggleFullScreen = _this.handleToggleFullScreen.bind(_this);
    return _this;
  }

  Fullscreen.prototype.handleToggleFullScreen = function handleToggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  Fullscreen.prototype.render = function render() {
    var styles = {
      position: 'absolute',
      bottom: 20,
      right: 20,
      opacity: 0,
      cursor: 'pointer',
      transition: '300ms opacity ease',
      ':hover': {
        opacity: 1
      }
    };
    return (0, _jsx3.default)('svg', {
      onClick: this.handleToggleFullScreen,
      style: [styles, this.context.styles.fullscreen],
      width: '30px',
      height: '30px',
      viewBox: '0 0 512 512'
    }, void 0, _ref);
  };

  return Fullscreen;
}(_react.Component)) || _class;

exports.default = Fullscreen;


Fullscreen.contextTypes = {
  styles: _propTypes2.default.object
};