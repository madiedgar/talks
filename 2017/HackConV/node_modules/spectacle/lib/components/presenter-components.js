'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideInfo = exports.Notes = exports.HeaderContainer = exports.PreviewNextSlide = exports.PreviewCurrentSlide = exports.PreviewPane = exports.PresenterContent = exports.EndHeader = exports.ContentContainer = undefined;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  display: flex;\n  flex: 1;\n  padding: 10px 50px 0;\n'], ['\n  display: flex;\n  flex: 1;\n  padding: 10px 50px 0;\n']),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(['\n  color: #fff;\n  display: flex;\n  margin: 0;\n'], ['\n  color: #fff;\n  display: flex;\n  margin: 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n'], ['\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n']),
    _templateObject4 = (0, _taggedTemplateLiteralLoose3.default)(['\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  height: 90%;\n  justify-content: center;\n  position: absolute;\n  top: 10%;\n  width: 60%;\n'], ['\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  height: 90%;\n  justify-content: center;\n  position: absolute;\n  top: 10%;\n  width: 60%;\n']),
    _templateObject5 = (0, _taggedTemplateLiteralLoose3.default)(['\n  border: 2px #fff solid;\n  display: flex;\n  flex: 0 0 100%;\n  height: 55%;\n  padding: 20px;\n'], ['\n  border: 2px #fff solid;\n  display: flex;\n  flex: 0 0 100%;\n  height: 55%;\n  padding: 20px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteralLoose3.default)(['\n  align-items: center;\n  display: flex;\n  flex: 0 0 68.75%;\n  height: 40%;\n  justify-content: center;\n  opacity: 0.4;\n'], ['\n  align-items: center;\n  display: flex;\n  flex: 0 0 68.75%;\n  height: 40%;\n  justify-content: center;\n  opacity: 0.4;\n']),
    _templateObject7 = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: absolute;\n  display: block;\n  color: #fff;\n  width: 100%;\n  height: 10%;\n  text-align: center;\n  padding: 10px 50px;\n'], ['\n  position: absolute;\n  display: block;\n  color: #fff;\n  width: 100%;\n  height: 10%;\n  text-align: center;\n  padding: 10px 50px;\n']),
    _templateObject8 = (0, _taggedTemplateLiteralLoose3.default)(['\n  color: #fff;\n  display: block;\n  height: 90%;\n  left: calc(60% + 50px);\n  padding: 10px 30px;\n  position: absolute;\n  top: 10%;\n  width: (40% - 100px);\n  overflow: auto;\n'], ['\n  color: #fff;\n  display: block;\n  height: 90%;\n  left: calc(60% + 50px);\n  padding: 10px 30px;\n  position: absolute;\n  top: 10%;\n  width: (40% - 100px);\n  overflow: auto;\n']),
    _templateObject9 = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: left;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  fontSize: 28px;\n'], ['\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: left;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  fontSize: 28px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentContainer = exports.ContentContainer = _styledComponents2.default.div(_templateObject);

var EndHeader = exports.EndHeader = _styledComponents2.default.h1(_templateObject2);

var PresenterContent = exports.PresenterContent = _styledComponents2.default.div(_templateObject3);

var PreviewPane = exports.PreviewPane = _styledComponents2.default.div(_templateObject4);

var PreviewCurrentSlide = exports.PreviewCurrentSlide = _styledComponents2.default.div(_templateObject5);

var PreviewNextSlide = exports.PreviewNextSlide = _styledComponents2.default.div(_templateObject6);

var HeaderContainer = exports.HeaderContainer = _styledComponents2.default.div(_templateObject7);

var Notes = exports.Notes = _styledComponents2.default.div(_templateObject8);

var SlideInfo = exports.SlideInfo = _styledComponents2.default.h2(_templateObject9);