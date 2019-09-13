'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSingleButton = exports.TButtonContainer = exports.TimeContainer = exports.Clock = undefined;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: right;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  font-size: 28px;\n'], ['\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: right;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  font-size: 28px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteralLoose3.default)(['\n  padding: 20px 0;\n'], ['\n  padding: 20px 0;\n']),
    _templateObject3 = (0, _taggedTemplateLiteralLoose3.default)(['\n  position: relative;\n  float: right;\n  padding-right: 20px;\n  -webkit-transform: translateY(-45%);\n  font-size: 20.088px;\n'], ['\n  position: relative;\n  float: right;\n  padding-right: 20px;\n  -webkit-transform: translateY(-45%);\n  font-size: 20.088px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteralLoose3.default)(['\n  from { \n    opacity:0; \n  } \n  to { \n    opacity:1; \n  }\n'], ['\n  from { \n    opacity:0; \n  } \n  to { \n    opacity:1; \n  }\n']),
    _templateObject5 = (0, _taggedTemplateLiteralLoose3.default)(['{\n  from {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1,1);\n    filter: blur(0px);\n  }\n\n  to {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(2,2);\n    filter: blur(2px);\n  }\n}'], ['{\n  from {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1,1);\n    filter: blur(0px);\n  }\n\n  to {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(2,2);\n    filter: blur(2px);\n  }\n}']),
    _templateObject6 = (0, _taggedTemplateLiteralLoose3.default)(['\n  width: 68px;\n  font-size: 1em;\n  margin: 3px;\n  border: 0;\n  border-radius: 15px;\n  background: ', ';\n    \n  &:focus{\n    outline:0px;\n  }\n  &:active {\n    animation: ', ' 0.5s;\n  }\n\n  opacity: 0;  /* make things invisible upon start */\n  animation: ', ' ease-in 1;\n  animation-fill-mode:forwards;\n  animation-duration:0.5s;\n  animation-delay: 0s;\n'], ['\n  width: 68px;\n  font-size: 1em;\n  margin: 3px;\n  border: 0;\n  border-radius: 15px;\n  background: ', ';\n    \n  &:focus{\n    outline:0px;\n  }\n  &:active {\n    animation: ', ' 0.5s;\n  }\n\n  opacity: 0;  /* make things invisible upon start */\n  animation: ', ' ease-in 1;\n  animation-fill-mode:forwards;\n  animation-duration:0.5s;\n  animation-delay: 0s;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clock = exports.Clock = _styledComponents2.default.h2(_templateObject);

var TimeContainer = exports.TimeContainer = _styledComponents2.default.div(_templateObject2);

var TButtonContainer = exports.TButtonContainer = _styledComponents2.default.div(_templateObject3);

var fadeIn = (0, _styledComponents.keyframes)(_templateObject4);

var vanishOut = (0, _styledComponents.keyframes)(_templateObject5);

var TSingleButton = exports.TSingleButton = _styledComponents2.default.button(_templateObject6, function (props) {
  if (props.stop) {
    return '#e23d3d';
  } else if (props.start) {
    return '#42a53c';
  } else {
    return '#darkgrey';
  }
}, vanishOut, fadeIn);