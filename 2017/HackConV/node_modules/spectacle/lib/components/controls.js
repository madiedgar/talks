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
  d: 'M512,97.707L414.293,0L0,414.293l414.293,414.293L512,730.88L195.414,414.293L512,97.707z'
});

var _ref2 = (0, _jsx3.default)('path', {
  d: 'M97.707,0L0,97.707l316.586,316.586L0,730.88l97.707,97.706L512,414.293L97.707,0z'
});

var Controls = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Controls, _Component);

  function Controls() {
    (0, _classCallCheck3.default)(this, Controls);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Controls.prototype.render = function render() {
    return (0, _jsx3.default)('div', {}, void 0, this.props.currentSlideIndex !== 0 && (0, _jsx3.default)('button', {
      type: 'button',
      onClick: this.props.onPrev,
      style: this.context.styles.controls.prev
    }, 'prev', (0, _jsx3.default)('svg', {
      style: this.context.styles.controls.prevIcon,
      width: '32px',
      height: '32px',
      viewBox: '0 0 512 828.586'
    }, 'prevIcon', _ref)), this.props.currentSlideIndex < this.props.totalSlides - 1 && (0, _jsx3.default)('button', {
      type: 'button',
      onClick: this.props.onNext,
      style: this.context.styles.controls.next
    }, 'next', (0, _jsx3.default)('svg', {
      style: this.context.styles.controls.nextIcon,
      width: '32px',
      height: '32px',
      viewBox: '0 0 512 828.586'
    }, 'nextIcon', _ref2)));
  };

  return Controls;
}(_react.Component)) || _class;

exports.default = Controls;


Controls.contextTypes = {
  styles: _propTypes2.default.object
};