'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp; /*eslint new-cap:0, max-statements:0*/
/* eslint react/no-did-mount-set-state: 0 */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _filter = require('lodash/filter');

var _filter2 = _interopRequireDefault(_filter);

var _size = require('lodash/size');

var _size2 = _interopRequireDefault(_size);

var _findIndex = require('lodash/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _typeface = require('./typeface');

var _typeface2 = _interopRequireDefault(_typeface);

var _slides = require('../utils/slides');

var _presenter = require('./presenter');

var _presenter2 = _interopRequireDefault(_presenter);

var _export = require('./export');

var _export2 = _interopRequireDefault(_export);

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _autoplayControls = require('./autoplay-controls');

var _autoplayControls2 = _interopRequireDefault(_autoplayControls);

var _fullscreen = require('./fullscreen');

var _fullscreen2 = _interopRequireDefault(_fullscreen);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _controls = require('./controls');

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionGroup = (0, _radium2.default)(_TransitionGroup2.default);

var _ref = (0, _jsx3.default)(_fullscreen2.default, {});

var Manager = (_dec = (0, _reactRedux.connect)(function (state) {
  return state;
}), _dec(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Manager, _Component);

  function Manager(props) {
    (0, _classCallCheck3.default)(this, Manager);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._handleKeyPress = _this._handleKeyPress.bind(_this);
    _this._handleScreenChange = _this._handleScreenChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this._goToSlide = _this._goToSlide.bind(_this);
    _this._startAutoplay = _this._startAutoplay.bind(_this);
    _this._stopAutoplay = _this._stopAutoplay.bind(_this);
    _this.state = {
      lastSlideIndex: null,
      slideReference: [],
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < props.contentWidth,
      autoplaying: props.autoplay
    };
    return _this;
  }

  Manager.prototype.getChildContext = function getChildContext() {
    return {
      contentWidth: this.props.contentWidth,
      contentHeight: this.props.contentHeight
    };
  };

  Manager.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      slideReference: this._buildSlideReference()
    });
  };

  Manager.prototype.componentDidMount = function componentDidMount() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    this._attachEvents();
    if (this.props.autoplay) {
      this._startAutoplay();
    }
  };

  Manager.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.globalStyles && !this.context.store.getState().style.globalStyleSet) {
      this.props.dispatch((0, _actions.setGlobalStyle)());
    }
  };

  Manager.prototype.componentWillUnmount = function componentWillUnmount() {
    this._detachEvents();
  };

  Manager.prototype._attachEvents = function _attachEvents() {
    window.addEventListener('storage', this._goToSlide);
    window.addEventListener('keydown', this._handleKeyPress);
    window.addEventListener('resize', this._handleScreenChange);
  };

  Manager.prototype._detachEvents = function _detachEvents() {
    window.removeEventListener('storage', this._goToSlide);
    window.removeEventListener('keydown', this._handleKeyPress);
    window.removeEventListener('resize', this._handleScreenChange);
  };

  Manager.prototype._startAutoplay = function _startAutoplay() {
    var _this2 = this;

    clearInterval(this.autoplayInterval);
    this.setState({ autoplaying: true });
    this.autoplayInterval = setInterval(function () {
      _this2._nextSlide();
    }, this.props.autoplayDuration);
  };

  Manager.prototype._stopAutoplay = function _stopAutoplay() {
    this.setState({ autoplaying: false });
    clearInterval(this.autoplayInterval);
  };

  Manager.prototype._handleEvent = function _handleEvent(e) {
    // eslint-disable-line complexity
    var event = window.event ? window.event : e;

    if (event.keyCode === 37 || event.keyCode === 33 || event.keyCode === 32 && event.shiftKey) {
      this._prevSlide();
      this._stopAutoplay();
    } else if (event.keyCode === 39 || event.keyCode === 34 || event.keyCode === 32 && !event.shiftKey) {
      this._nextSlide();
      this._stopAutoplay();
    } else if (event.altKey && event.keyCode === 79 && !event.ctrlKey && !event.metaKey) {
      // o
      this._toggleOverviewMode();
    } else if (event.altKey && event.keyCode === 80 && !event.ctrlKey && !event.metaKey) {
      // p
      this._togglePresenterMode();
    } else if (event.altKey && event.keyCode === 84 && !event.ctrlKey && !event.metaKey) {
      // t
      this._toggleTimerMode();
    } else if (event.altKey && event.keyCode === 65 && !event.ctrlKey && !event.metaKey) {
      // a
      if (this.props.autoplay) {
        this._startAutoplay();
      }
    }
  };

  Manager.prototype._handleKeyPress = function _handleKeyPress(e) {
    var event = window.event ? window.event : e;

    if (event.target instanceof HTMLInputElement || event.target.type === 'textarea') {
      return;
    }

    this._handleEvent(e);
  };

  Manager.prototype._handleScreenChange = function _handleScreenChange() {
    this.setState({
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < this.props.contentWidth
    });
  };

  Manager.prototype._toggleOverviewMode = function _toggleOverviewMode() {
    var suffix = this.props.route.params.indexOf('overview') !== -1 ? '' : '?overview';
    this.context.history.replace('/' + this.props.route.slide + suffix);
  };

  Manager.prototype._togglePresenterMode = function _togglePresenterMode() {
    var suffix = this.props.route.params.indexOf('presenter') !== -1 ? '' : '?presenter';
    this.context.history.replace('/' + this.props.route.slide + suffix);
  };

  Manager.prototype._toggleTimerMode = function _toggleTimerMode() {
    var isTimer = this.props.route.params.indexOf('presenter') !== -1 && this.props.route.params.indexOf('timer') !== -1;
    var suffix = isTimer ? '?presenter' : '?presenter&timer';
    this.context.history.replace('/' + this.props.route.slide + suffix);
  };

  Manager.prototype._getSuffix = function _getSuffix() {
    if (this.props.route.params.indexOf('presenter') !== -1) {
      var isTimerMode = this.props.route.params.indexOf('timer') !== -1;
      return isTimerMode ? '?presenter&timer' : '?presenter';
    } else if (this.props.route.params.indexOf('overview') !== -1) {
      return '?overview';
    } else {
      return '';
    }
  };

  Manager.prototype._goToSlide = function _goToSlide(e) {
    if (e.key === 'spectacle-slide') {
      var data = JSON.parse(e.newValue);
      var slideIndex = this._getSlideIndex();
      this.setState({
        lastSlideIndex: slideIndex || 0
      });
      if (this._checkFragments(this.props.route.slide, data.forward)) {
        this.context.history.replace('/' + data.slide + this._getSuffix());
      }
    }
  };

  Manager.prototype._prevSlide = function _prevSlide() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    if (this._checkFragments(this.props.route.slide, false) || this.props.route.params.indexOf('overview') !== -1) {
      if (slideIndex > 0) {
        this.context.history.replace('/' + this._getHash(slideIndex - 1) + this._getSuffix());
        localStorage.setItem('spectacle-slide', (0, _stringify2.default)({
          slide: this._getHash(slideIndex - 1),
          forward: false,
          time: Date.now()
        }));
      }
    } else if (slideIndex > 0) {
      localStorage.setItem('spectacle-slide', (0, _stringify2.default)({
        slide: this._getHash(slideIndex),
        forward: false,
        time: Date.now()
      }));
    }
  };

  Manager.prototype._nextSlide = function _nextSlide() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    var slideReference = this.state.slideReference;
    if (this._checkFragments(this.props.route.slide, true) || this.props.route.params.indexOf('overview') !== -1) {
      if (slideIndex === slideReference.length - 1) {
        // On last slide, loop to first slide
        if (this.props.autoplay && this.state.autoplaying) {
          var slideData = '{ "slide": "0", "forward": "false" }';
          this._goToSlide({ key: 'spectacle-slide', newValue: slideData });
        }
      } else if (slideIndex < slideReference.length - 1) {
        this.context.history.replace('/' + (this._getHash(slideIndex + 1) + this._getSuffix()));
        localStorage.setItem('spectacle-slide', (0, _stringify2.default)({
          slide: this._getHash(slideIndex + 1),
          forward: true,
          time: Date.now()
        }));
      }
    } else if (slideIndex < slideReference.length) {
      localStorage.setItem('spectacle-slide', (0, _stringify2.default)({
        slide: this._getHash(slideIndex),
        forward: true,
        time: Date.now()
      }));
    }
  };

  Manager.prototype._getHash = function _getHash(slideIndex) {
    return this.state.slideReference[slideIndex].id;
  };

  Manager.prototype._checkFragments = function _checkFragments(slide, forward) {
    var state = this.context.store.getState();
    var fragments = state.fragment.fragments;
    // Not proud of this at all. 0.14 Parent based contexts will fix this.
    if (this.props.route.params.indexOf('presenter') !== -1) {
      var main = document.querySelector('.spectacle-presenter-main');
      if (main) {
        var frags = main.querySelectorAll('.fragment');
        if (!frags.length) {
          return true;
        }
      } else {
        return true;
      }
    }
    if (slide in fragments) {
      var count = (0, _size2.default)(fragments[slide]);
      var visible = (0, _filter2.default)(fragments[slide], function (s) {
        return s.visible === true;
      });
      var hidden = (0, _filter2.default)(fragments[slide], function (s) {
        return s.visible !== true;
      });
      if (forward === true && visible.length !== count) {
        this.props.dispatch((0, _actions.updateFragment)({
          fragment: hidden[0],
          visible: true
        }));
        return false;
      }
      if (forward === false && hidden.length !== count) {
        this.props.dispatch((0, _actions.updateFragment)({
          fragment: visible[(0, _size2.default)(visible) - 1],
          visible: false
        }));
        return false;
      }
      return true;
    } else {
      return true;
    }
  };

  Manager.prototype._getTouchEvents = function _getTouchEvents() {
    var self = this;

    return {
      onTouchStart: function onTouchStart(e) {
        self.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        };
      },
      onTouchMove: function onTouchMove(e) {
        var direction = self._swipeDirection({
          x1: self.touchObject.startX,
          x2: e.touches[0].pageX,
          y1: self.touchObject.startY,
          y2: e.touches[0].pageY
        });

        self.touchObject = {
          startX: self.touchObject.startX,
          startY: self.touchObject.startY,
          endX: e.clientX,
          endY: e.clientY,
          length: Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2))),
          direction: direction
        };

        if (direction !== 0) {
          e.preventDefault();
        }
      },
      onTouchEnd: function onTouchEnd(e) {
        self._handleSwipe(e);
      },
      onTouchCancel: function onTouchCancel(e) {
        self._handleSwipe(e);
      }
    };
  };

  Manager.prototype.handleClick = function handleClick(e) {
    if (this.clickSafe === true) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
  };

  Manager.prototype._handleSwipe = function _handleSwipe() {
    if (typeof this.touchObject.length !== 'undefined' && this.touchObject.length > 44) {
      this.clickSafe = true;
    } else {
      this.clickSafe = false;
    }

    if (Math.abs(this.touchObject.length) > 20) {
      if (this.touchObject.direction === 1) {
        this._nextSlide();
      } else if (this.touchObject.direction === -1) {
        this._prevSlide();
      }
    }

    this.touchObject = {};
  };

  Manager.prototype._swipeDirection = function _swipeDirection(touch) {
    var xDist = touch.x1 - touch.x2;
    var yDist = touch.y1 - touch.y2;
    var r = Math.atan2(yDist, xDist);
    var swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return 1;
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return 1;
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return -1;
    }

    return 0;
  };

  Manager.prototype._buildSlideReference = function _buildSlideReference() {
    var slideReference = [];
    _react.Children.toArray(this.props.children).forEach(function (child, rootIndex) {
      if (!child.props.hasSlideChildren) {
        slideReference.push({
          id: child.props.id || slideReference.length,
          rootIndex: rootIndex
        });
      } else {
        child.props.children.forEach(function (setSlide, setIndex) {
          slideReference.push({
            id: setSlide.props.id || slideReference.length,
            setIndex: setIndex,
            rootIndex: rootIndex
          });
        });
      }
    });
    return slideReference;
  };

  Manager.prototype._getSlideIndex = function _getSlideIndex() {
    var _this3 = this;

    var index = parseInt(this.props.route.slide);
    if (!(0, _isFinite2.default)(index)) {
      var foundIndex = (0, _findIndex2.default)(this.state.slideReference, function (reference) {
        return _this3.props.route.slide === reference.id;
      });
      index = foundIndex >= 0 ? foundIndex : 0;
    }
    return index;
  };

  Manager.prototype._getSlideByIndex = function _getSlideByIndex(index) {
    return (0, _slides.getSlideByIndex)(this.props.children, this.state.slideReference, index);
  };

  Manager.prototype._renderSlide = function _renderSlide() {
    var slideIndex = this._getSlideIndex();
    var slide = this._getSlideByIndex(slideIndex);
    return (0, _react.cloneElement)(slide, {
      dispatch: this.props.dispatch,
      fragments: this.props.fragment,
      key: slideIndex,
      export: this.props.route.params.indexOf('export') !== -1,
      print: this.props.route.params.indexOf('print') !== -1,
      children: _react.Children.toArray(slide.props.children),
      hash: this.props.route.slide,
      slideIndex: slideIndex,
      lastSlideIndex: this.state.lastSlideIndex,
      transition: (slide.props.transition || {}).length ? slide.props.transition : this.props.transition,
      transitionDuration: (slide.props.transition || {}).transitionDuration ? slide.props.transitionDuration : this.props.transitionDuration,
      slideReference: this.state.slideReference
    });
  };

  Manager.prototype.render = function render() {
    if (this.props.route.slide === null) {
      return false;
    }

    var globals = this.props.route.params.indexOf('export') !== -1 ? {
      body: (0, _assign2.default)(this.context.styles.global.body, {
        minWidth: this.props.contentWidth + 150,
        minHeight: this.props.contentHeight + 150,
        overflow: 'auto'
      }),
      '.spectacle-presenter-next .fragment': {
        display: 'none !important'
      }
    } : {
      '.spectacle-presenter-next .fragment': {
        display: 'none !important'
      }
    };

    var styles = {
      deck: {
        backgroundColor: this.props.route.params.indexOf('presenter') !== -1 || this.props.route.params.indexOf('overview') !== -1 ? 'black' : '',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      transition: {
        height: '100%',
        width: '100%',
        perspective: 1000,
        transformStyle: 'flat'
      }
    };

    var componentToRender = void 0;
    var children = _react.Children.toArray(this.props.children);
    if (this.props.route.params.indexOf('presenter') !== -1) {
      var isTimerMode = this.props.route.params.indexOf('timer') !== -1;
      componentToRender = (0, _jsx3.default)(_presenter2.default, {
        dispatch: this.props.dispatch,
        slides: children,
        slideReference: this.state.slideReference,
        slideIndex: this._getSlideIndex(),
        hash: this.props.route.slide,
        route: this.props.route,
        lastSlideIndex: this.state.lastSlideIndex,
        timer: isTimerMode
      });
    } else if (this.props.route.params.indexOf('export') !== -1) {
      componentToRender = (0, _jsx3.default)(_export2.default, {
        slides: children,
        slideReference: this.state.slideReference,
        route: this.props.route
      });
    } else if (this.props.route.params.indexOf('overview') !== -1) {
      componentToRender = (0, _jsx3.default)(_overview2.default, {
        slides: children,
        slideReference: this.state.slideReference,
        slideIndex: this._getSlideIndex(),
        route: this.props.route
      });
    } else {
      componentToRender = (0, _jsx3.default)(TransitionGroup, {
        component: 'div',
        style: [styles.transition]
      }, void 0, this._renderSlide());
    }

    var showControls = !this.state.fullscreen && !this.state.mobile && this.props.route.params.indexOf('export') === -1 && this.props.route.params.indexOf('overview') === -1 && this.props.route.params.indexOf('presenter') === -1;

    var _context$styles$googl = this.context.styles.googleFonts,
        googleFonts = _context$styles$googl === undefined ? {} : _context$styles$googl;

    var googleFontsElements = (0, _keys2.default)(googleFonts).map(function (key, index) {
      return (0, _jsx3.default)(_typeface2.default, {
        googleFont: googleFonts[key].name,
        styles: googleFonts[key].styles
      }, 'gFont-' + index);
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({
        className: 'spectacle-deck',
        style: [styles.deck],
        onClick: this.handleClick
      }, this._getTouchEvents()),
      this.props.controls && showControls && (0, _jsx3.default)(_controls2.default, {
        currentSlideIndex: this._getSlideIndex(),
        totalSlides: this.state.slideReference.length,
        onPrev: this._prevSlide.bind(this),
        onNext: this._nextSlide.bind(this)
      }),
      googleFontsElements,
      componentToRender,
      this.props.route.params.indexOf('export') === -1 && this.props.route.params.indexOf('overview') === -1 ? (0, _jsx3.default)(_progress2.default, {
        items: this.state.slideReference,
        currentSlideIndex: this._getSlideIndex(),
        type: this.props.progress
      }) : '',
      this.props.route.params.indexOf('export') === -1 ? _ref : '',
      this.props.autoplay ? (0, _jsx3.default)(_autoplayControls2.default, {
        autoplaying: this.state.autoplaying,
        onPlay: this._startAutoplay,
        onPause: this._stopAutoplay
      }) : '',
      this.props.globalStyles && (0, _jsx3.default)(_radium.Style, {
        rules: (0, _assign2.default)(this.context.styles.global, globals)
      })
    );
  };

  return Manager;
}(_react.Component), _class2.displayName = 'Manager', _class2.defaultProps = {
  autoplay: false,
  autoplayDuration: 7000,
  contentWidth: 1000,
  contentHeight: 700,
  transition: [],
  transitionDuration: 500,
  progress: 'pacman',
  controls: true,
  globalStyles: true
}, _class2.contextTypes = {
  styles: _propTypes2.default.object,
  print: _propTypes2.default.object,
  history: _propTypes2.default.object,
  presenter: _propTypes2.default.bool,
  export: _propTypes2.default.bool,
  overview: _propTypes2.default.bool,
  store: _propTypes2.default.object,
  slide: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
}, _class2.childContextTypes = {
  contentWidth: _propTypes2.default.number,
  contentHeight: _propTypes2.default.number
}, _temp)) || _class) || _class);
exports.default = Manager;