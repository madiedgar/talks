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

var Progress = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Progress, _Component);

  function Progress() {
    (0, _classCallCheck3.default)(this, Progress);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Progress.prototype.getWidth = function getWidth() {
    return {
      width: 100 * this.props.currentSlideIndex / (this.props.items.length - 1) + '%'
    };
  };

  Progress.prototype.getPacmanStyle = function getPacmanStyle(side) {
    var animationName = 'pacman' + side + 'Frames' + (this.props.currentSlideIndex % 2 ? '' : 'Bis');
    return {
      animation: animationName + ' 0.12s linear 10 alternate both'
    };
  };

  Progress.prototype.getPointPosition = function getPointPosition(i) {
    return {
      top: '-20px',
      left: 5 + 20 * (i - this.props.items.length / 2) + 'px'
    };
  };

  Progress.prototype.getPointStyle = function getPointStyle(i) {
    var style = this.getPointPosition(i);
    if (this.props.currentSlideIndex >= i) {
      style.opacity = 0;
    }

    return style;
  };

  Progress.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        type = _props.type,
        currentSlideIndex = _props.currentSlideIndex,
        items = _props.items;

    var style = this.context.styles.progress;
    var markup = void 0;
    switch (type) {
      case 'none':
        return false;
      case 'pacman':
        style = style.pacman;
        markup = (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('div', {
          style: [style.pacman, this.getPointPosition(currentSlideIndex)]
        }, void 0, (0, _jsx3.default)('div', {
          style: [style.pacmanTop, this.getPacmanStyle('Top')]
        }), (0, _jsx3.default)('div', {
          style: [style.pacmanBottom, this.getPacmanStyle('Bottom')]
        })), items.map(function (item, i) {
          return (0, _jsx3.default)('div', {
            style: [style.point, _this2.getPointStyle(i)]
          }, 'presentation-progress-' + i);
        }));
        break;
      case 'number':
        style = style.number;
        markup = (0, _jsx3.default)('div', {}, void 0, currentSlideIndex + 1, ' / ', items.length);
        break;
      case 'bar':
        style = style.bar;
        markup = (0, _jsx3.default)('div', {
          style: [style.bar, this.getWidth()]
        });
        break;
      default:
        return false;
    }
    return (0, _jsx3.default)('div', {
      style: [style.container]
    }, void 0, markup);
  };

  return Progress;
}(_react.Component)) || _class;

exports.default = Progress;


Progress.contextTypes = {
  styles: _propTypes2.default.object
};