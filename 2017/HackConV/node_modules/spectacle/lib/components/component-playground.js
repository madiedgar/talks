'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  background: ', ';\n  border-radius: 0 0 6px 6px;\n  height: 100%;\n  width: 100%;\n'], ['\n  background: ', ';\n  border-radius: 0 0 6px 6px;\n  height: 100%;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _componentPlayground = require('component-playground');

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('../themes/default/playground.css');

require('../themes/default/codemirror.css');

var _playground = require('../utils/playground.default-code');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentPlaygroundContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.previewBackgroundColor || '#fff';
});

var ComponentPlayground = function ComponentPlayground(_ref) {
  var code = _ref.code,
      previewBackgroundColor = _ref.previewBackgroundColor,
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? {} : _ref$scope,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? 'dark' : _ref$theme;

  var useDarkTheme = theme === 'dark';

  if (useDarkTheme) {
    require('../themes/default/dark.codemirror.css');
  } else {
    require('../themes/default/light.codemirror.css');
  }

  return (0, _jsx3.default)(ComponentPlaygroundContainer, {
    className: 'theme-' + theme,
    previewBackgroundColor: previewBackgroundColor
  }, void 0, (0, _jsx3.default)(_componentPlayground2.default, {
    codeText: (code || _playground.defaultCode).trim(),
    scope: (0, _extends3.default)({ React: _react2.default, Component: _react.Component, render: _reactDom.render }, scope),
    noRender: false,
    theme: useDarkTheme ? 'material' : 'elegant'
  }));
};

exports.default = ComponentPlayground;