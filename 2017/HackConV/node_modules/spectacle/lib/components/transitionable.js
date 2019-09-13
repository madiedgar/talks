'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTransition = exports.Transitionable = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _victoryCore = require('victory-core');

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Decorator for adding Spectacle transition support
 * to components' ReactCSSTransitionGroup lifecycle functions.
 * @param {class} target The class to be decorated as Transitionable
 * @returns {object} The transition animation lifecyle functions
 */
var Transitionable = function Transitionable(target) {
  var transitionable = {
    componentWillEnter: function componentWillEnter(callback) {
      this.setState({ transitioning: false, reverse: false, z: 1 });
      this.routerCallback(callback);
    },
    componentWillAppear: function componentWillAppear(callback) {
      this.setState({ transitioning: false, reverse: false, z: 1 });
      this.routerCallback(callback);
    },
    componentWillLeave: function componentWillLeave(callback) {
      this.setState({ transitioning: true, reverse: true, z: '' });
      this.routerCallback(callback);
    },
    routerCallback: function routerCallback(callback) {
      var _props = this.props,
          transition = _props.transition,
          transitionDuration = _props.transitionDuration;

      if (transition.length > 0) {
        setTimeout(function () {
          return callback();
        }, transitionDuration);
      } else {
        callback();
      }
    },
    transitionDirection: function transitionDirection() {
      var _props2 = this.props,
          slideIndex = _props2.slideIndex,
          lastSlideIndex = _props2.lastSlideIndex;

      var routeSlideIndex = this._getRouteSlideIndex();
      return this.state.reverse ? slideIndex > routeSlideIndex : slideIndex > lastSlideIndex;
    },
    getTransitionStyles: function getTransitionStyles() {
      var _props$transition = this.props.transition,
          transition = _props$transition === undefined ? [] : _props$transition;
      var _state = this.state,
          transitioning = _state.transitioning,
          z = _state.z;


      var styles = { zIndex: z };
      var transformValue = '';

      if (transition.indexOf('fade') !== -1) {
        styles = (0, _extends3.default)({}, styles, { opacity: transitioning ? 0 : 1 });
      }

      if (transition.indexOf('zoom') !== -1) {
        transformValue += ' scale(' + (transitioning ? 0.1 : 1.0) + ')';
      }

      if (transition.indexOf('slide') !== -1) {
        var offset = this.transitionDirection() ? 100 : -100;
        transformValue += ' translate3d(' + (transitioning ? offset : 0) + '%, 0, 0)';
      } else {
        transformValue += ' translate3d(0px, 0px, 0px)';
      }

      if (transition.indexOf('spin') !== -1) {
        var angle = this.transitionDirection() ? 90 : -90;
        transformValue += ' rotateY(' + (transitioning ? angle : 0) + 'deg)';
      }

      return (0, _extends3.default)({}, styles, { transform: transformValue });
    },
    _getRouteSlideIndex: function _getRouteSlideIndex() {
      var slideReference = this.props.slideReference;

      var slide = this.context.store.getState().route.slide;
      var slideIndex = (0, _findIndex2.default)(slideReference, function (reference) {
        return slide === String(reference.id);
      });
      return Math.max(0, slideIndex);
    }
  };

  (0, _assign2.default)(target.prototype, transitionable);
};

/**
 * Decorator for rendering the transition. Wraps the `render` function
 * output of a component with a `VictoryAnimation` component that performs
 * the transition animation.
 * @param {class} target The class of the decorated function
 * @param {string} name The name of the decorated function
 * @param {object} descriptor The descriptor of the decorated function
 * @returns {object} descriptor A modified descriptor of the wrapped
 * transitionable render function
 */
/*eslint new-cap:0, max-statements:0*/
var renderTransition = function renderTransition(target, name, descriptor) {
  var originalFunc = descriptor.value;

  descriptor.value = function wrap() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var content = originalFunc.call.apply(originalFunc, [this].concat(args));
    var transitionDuration = this.props.transitionDuration;

    return (0, _jsx3.default)(_victoryCore.VictoryAnimation, {
      data: this.getTransitionStyles(),
      duration: transitionDuration,
      easing: 'quadInOut'
    }, void 0, function (animatableStyles) {
      return (0, _react.cloneElement)(content, {
        style: [].concat(content.props.style, [animatableStyles])
      });
    });
  };

  return descriptor;
};

exports.Transitionable = Transitionable;
exports.renderTransition = renderTransition;