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

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _class;

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  height: 100%;\n  width: 100%;\n'], ['\n  height: 100%;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _slides = require('../utils/slides');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpectacleExport = _styledComponents2.default.div(_templateObject);

var Export = (0, _radium2.default)(_class = function (_Component) {
  (0, _inherits3.default)(Export, _Component);

  function Export() {
    (0, _classCallCheck3.default)(this, Export);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Export.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    return this.props.slideReference.map(function (reference, index) {
      var slide = (0, _slides.getSlideByIndex)(_this2.props.slides, _this2.props.slideReference, index);
      return (0, _react.cloneElement)(slide, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf('export') !== -1,
        print: _this2.props.route.params.indexOf('print') !== -1,
        transition: [],
        transitionDuration: 0
      });
    });
  };

  Export.prototype.render = function render() {
    return (0, _jsx3.default)(SpectacleExport, {}, void 0, this._renderSlides());
  };

  return Export;
}(_react.Component)) || _class;

exports.default = Export;


Export.contextTypes = {
  styles: _propTypes2.default.object
};