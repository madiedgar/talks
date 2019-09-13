'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var Heading = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Heading, _Component);

  function Heading() {
    (0, _classCallCheck3.default)(this, Heading);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

    _this.resize = _this.resize.bind(_this);
    _this.state = {
      scale: 1,
      height: 16
    };
    return _this;
  }

  Heading.prototype.componentDidMount = function componentDidMount() {
    this.resize();
    window.addEventListener('load', this.resize);
    window.addEventListener('resize', this.resize);
  };

  Heading.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.resize();
  };

  Heading.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('load', this.resize);
    window.removeEventListener('resize', this.resize);
  };

  Heading.prototype.resize = function resize() {
    if (this.props.fit) {
      var text = this.textRef;
      var container = this.containerRef;
      text.style.display = 'inline-block';
      var scale = container.offsetWidth / text.offsetWidth;
      var height = text.offsetHeight * scale || 0;
      text.style.display = 'block';
      this.setState({
        scale: scale,
        height: height
      });
    }
  };

  Heading.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        size = _props.size,
        lineHeight = _props.lineHeight,
        fit = _props.fit,
        style = _props.style,
        children = _props.children;

    var Tag = 'H' + size;
    var styles = {
      container: {
        display: 'block',
        width: '100%',
        height: this.state.height
      },
      text: {
        fontSize: 16,
        display: 'block',
        margin: '0',
        padding: '0',
        lineHeight: lineHeight,
        transform: 'scale(' + this.state.scale + ')',
        transformOrigin: 'center top'
      },
      nonFit: {
        lineHeight: lineHeight
      }
    };
    var typefaceStyle = this.context.typeface || {};
    return fit ? _react2.default.createElement(
      'div',
      {
        className: this.props.className,
        ref: function ref(c) {
          _this2.containerRef = c;
        },
        style: [this.context.styles.components.heading['h' + size], _base.getStyles.call(this), styles.container]
      },
      _react2.default.createElement(
        'span',
        { ref: function ref(t) {
            _this2.textRef = t;
          }, style: [styles.text, style, typefaceStyle] },
        children
      )
    ) : (0, _react.createElement)(Tag, {
      className: this.props.className,
      style: [this.context.styles.components.heading['h' + size], _base.getStyles.call(this), styles.nonFit, style, typefaceStyle]
    }, children);
  };

  return Heading;
}(_react.Component)) || _class;

exports.default = Heading;


Heading.defaultProps = {
  size: 1,
  lineHeight: 1
};

Heading.contextTypes = {
  styles: _propTypes2.default.object,
  store: _propTypes2.default.object,
  typeface: _propTypes2.default.object
};