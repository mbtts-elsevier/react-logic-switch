"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=Switch;var _react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var isCaseComponent=function(a){return a.type.isCaseComponent},isDefaultComponent=function(a){return a.type.isDefaultComponent};function isAllowedChild(a){return isCaseComponent(a)||isDefaultComponent(a)}function isCaseComponents(a,b,c){var d=a.children,e=null,f=!1;return _react["default"].Children.forEach(d,function(a){isAllowedChild(a)?isDefaultComponent(a)&&(f&&(e=new Error("".concat(c," expected exactly one Default as a child. Received too many."))),f=!0):e=new Error("".concat(c," children should be of type 'Case' or 'Default'. Received ").concat(a.type))}),f||(e=new Error("".concat(c," expected exactly one Default as a child. Received zero."))),e}function isMatchFor(a){return function(b){return b.props.match===a||b.props.test&&b.props.test(a)}}var experimentalVariation=function(a,b){return a.filter(isCaseComponent).find(isMatchFor(b))},defaultVariation=function(a){return a.find(isDefaultComponent)};function Switch(a){var b=a.children,c=a.arg,d=_react["default"].Children.toArray(b);return _react["default"].Children.only(experimentalVariation(d,c)||defaultVariation(d))}Switch.propTypes={children:isCaseComponents,arg:_propTypes["default"].any};