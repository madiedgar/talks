'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _findKey = require('lodash/findKey');

var _findKey2 = _interopRequireDefault(_findKey);

var _reactRedux = require('react-redux');

var _victoryCore = require('victory-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Appear = function (_Component) {
  (0, _inherits3.default)(Appear, _Component);

  function Appear() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Appear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Appear.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var state = nextProps.fragment;
    var slide = this.props.route.slide;
    var fragment = (0, _reactDom.findDOMNode)(this.fragmentRef);
    var key = (0, _findKey2.default)(state.fragments[slide], {
      id: parseInt(fragment.dataset.fid)
    });

    var shouldDisableAnimation = this.props.route.params.indexOf('export') !== -1 || this.props.route.params.indexOf('overview') !== -1;

    if (shouldDisableAnimation) {
      this.setState({ active: true });
      return;
    }

    if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)) {
      var active = state.fragments[slide][key].visible;
      this.setState({ active: active });
    }
  };

  Appear.prototype.render = function render() {
    var _this2 = this;

    var child = _react2.default.Children.only(this.props.children);
    var endValue = this.state.active ? 1 : 0;
    var transitionDuration = this.props.transitionDuration;

    return (0, _jsx3.default)(_victoryCore.VictoryAnimation, {
      data: { opacity: endValue },
      duration: transitionDuration,
      easing: 'quadInOut'
    }, void 0, function (_ref) {
      var opacity = _ref.opacity;
      return _react2.default.cloneElement(child, {
        className: 'fragment',
        style: (0, _extends3.default)({}, child.props.style, { opacity: opacity }),
        ref: function ref(f) {
          _this2.fragmentRef = f;
        }
      });
    });
  };

  return Appear;
}(_react.Component);

Appear.defaultProps = {
  transitionDuration: 300
};

Appear.contextTypes = {
  export: _propTypes2.default.bool,
  overview: _propTypes2.default.bool,
  slide: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(Appear);