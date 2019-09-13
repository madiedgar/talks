'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

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

var _class, _desc, _value, _class2; /* eslint-disable no-invalid-this */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isUndefined = require('lodash/isUndefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _base = require('../utils/base');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _actions = require('../actions');

var _transitionable = require('./transitionable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var Slide = (0, _transitionable.Transitionable)(_class = (0, _radium2.default)(_class = (_class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(Slide, _React$PureComponent);

  function Slide() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
      contentScale: 1,
      transitioning: true,
      z: 1,
      zoom: 1
    }, _this.setZoom = function () {
      var mobile = window.matchMedia('(max-width: 628px)').matches;
      var content = _this.contentRef;
      if (content) {
        var zoom = _this.props.viewerScaleMode ? 1 : content.offsetWidth / _this.context.contentWidth;

        var contentScaleY = content.parentNode.offsetHeight / _this.context.contentHeight;
        var contentScaleX = _this.props.viewerScaleMode ? content.parentNode.offsetWidth / _this.context.contentWidth : content.parentNode.offsetWidth / _this.context.contentHeight;
        var minScale = Math.min(contentScaleY, contentScaleX);

        var contentScale = minScale < 1 ? minScale : 1;
        if (mobile && _this.props.viewerScaleMode !== true) {
          contentScale = 1;
        }

        _this.setState({
          zoom: zoom > 0.6 ? zoom : 0.6,
          contentScale: contentScale
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Slide.prototype.getChildContext = function getChildContext() {
    return { slideHash: this.props.hash };
  };

  Slide.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setZoom();
    var slide = this.slideRef;
    var frags = slide.querySelectorAll('.fragment');
    if (frags && frags.length && !this.context.overview) {
      Array.prototype.slice.call(frags, 0).forEach(function (frag, i) {
        frag.dataset.fid = i;
        return _this2.props.dispatch && _this2.props.dispatch((0, _actions.addFragment)({
          slide: _this2.props.hash,
          id: i,
          visible: _this2.props.lastSlideIndex > _this2.props.slideIndex
        }));
      });
    }
    window.addEventListener('load', this.setZoom);
    window.addEventListener('resize', this.setZoom);
  };

  Slide.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.setZoom);
  };

  Slide.prototype.allStyles = function allStyles() {
    var _props = this.props,
        align = _props.align,
        print = _props.print;


    var styles = {
      outer: (0, _extends3.default)({
        position: this.props.export ? 'relative' : 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: this.context.styles.global.body.background ? this.context.styles.global.body.background : ''
      }, this.props.style),
      inner: {
        display: 'flex',
        position: 'relative',
        flex: 1,
        alignItems: align ? align.split(' ')[1] : 'center',
        justifyContent: align ? align.split(' ')[0] : 'center'
      },
      content: {
        flex: 1,
        maxHeight: this.context.contentHeight || 700,
        maxWidth: this.context.contentWidth || 1000,
        transform: 'scale(' + this.state.contentScale + ')',
        padding: this.state.zoom > 0.6 ? this.props.margin || 40 : 10
      }
    };

    var overViewStyles = {
      inner: {
        flexDirection: 'column'
      },
      content: {
        width: '100%'
      }
    };

    var printStyles = print ? {
      backgroundColor: 'white',
      backgroundImage: 'none'
    } : {};

    return { styles: styles, overViewStyles: overViewStyles, printStyles: printStyles };
  };

  Slide.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        presenterStyle = _props2.presenterStyle,
        children = _props2.children;

    var _allStyles = this.allStyles(),
        styles = _allStyles.styles,
        overViewStyles = _allStyles.overViewStyles,
        printStyles = _allStyles.printStyles;

    if (!this.props.viewerScaleMode) {
      document.documentElement.style.fontSize = 16 * this.state.zoom + 'px';
    }

    var contentClass = (0, _isUndefined2.default)(this.props.className) ? '' : this.props.className;
    return _react2.default.createElement(
      'div',
      {
        className: 'spectacle-slide',
        ref: function ref(s) {
          _this3.slideRef = s;
        },
        style: [styles.outer, _base.getStyles.call(this), printStyles, presenterStyle]
      },
      (0, _jsx3.default)('div', {
        style: [styles.inner, this.context.overview && overViewStyles.inner]
      }, void 0, _react2.default.createElement(
        'div',
        {
          ref: function ref(c) {
            _this3.contentRef = c;
          },
          className: contentClass + ' spectacle-content',
          style: [styles.content, this.context.styles.components.content, this.context.overview && overViewStyles.content]
        },
        children
      ))
    );
  };

  return Slide;
}(_react2.default.PureComponent), (_applyDecoratedDescriptor(_class2.prototype, 'render', [_transitionable.renderTransition], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'render'), _class2.prototype)), _class2)) || _class) || _class;

Slide.defaultProps = {
  align: 'center center',
  presenterStyle: {},
  style: {},
  viewerScaleMode: false
};

Slide.contextTypes = {
  styles: _propTypes2.default.object,
  contentWidth: _propTypes2.default.number,
  contentHeight: _propTypes2.default.number,
  export: _propTypes2.default.bool,
  print: _propTypes2.default.object,
  overview: _propTypes2.default.bool,
  store: _propTypes2.default.object
};

Slide.childContextTypes = {
  slideHash: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = Slide;