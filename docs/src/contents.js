(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Contents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dummy = function (_Component) {
  _inherits(Dummy, _Component);

  function Dummy() {
    _classCallCheck(this, Dummy);

    return _possibleConstructorReturn(this, (Dummy.__proto__ || Object.getPrototypeOf(Dummy)).apply(this, arguments));
  }

  _createClass(Dummy, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Hello, world.'
      );
    }
  }]);

  return Dummy;
}(_react.Component);

Dummy.styleguide = {
  index: '1.1',
  category: 'Dummy',
  title: 'Dummy',
  description: 'Just a dummy component to see if this works',
  code: '\n      <Dummy />\n    '
};
exports.default = Dummy;
module.exports = exports['default'];

},{"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return alert('bar!');
          } },
        'Foo'
      );
    }
  }]);

  return Example;
}(_react.Component);

Example.styleguide = {
  index: '2.1',
  category: 'Example',
  title: 'Example',
  description: 'Another example component to test navigation',
  code: '\n      <Example />\n    '
};
exports.default = Example;
module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/jcarney/Projects/open-ui-toolbox/components/dummy/Dummy.jsx'), require('/Users/jcarney/Projects/open-ui-toolbox/components/example/Example.jsx')];

},{"/Users/jcarney/Projects/open-ui-toolbox/components/dummy/Dummy.jsx":1,"/Users/jcarney/Projects/open-ui-toolbox/components/example/Example.jsx":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2R1bW15L0R1bW15LmpzeCIsImNvbXBvbmVudHMvZXhhbXBsZS9FeGFtcGxlLmpzeCIsInN0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLEs7Ozs7Ozs7Ozs7OzZCQVVWO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRDs7Ozs7O0FBZGtCLEssQ0FDWixVLEdBQWE7QUFDbEIsU0FBTyxLQURXO0FBRWxCLFlBQVUsT0FGUTtBQUdsQixTQUFPLE9BSFc7QUFJbEIsZUFBYSw2Q0FKSztBQUtsQjtBQUxrQixDO2tCQURELEs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7Ozs7Ozs7Ozs7O0lBRXFCLE87Ozs7Ozs7Ozs7OzZCQVVWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBUSxTQUFTO0FBQUEsbUJBQU8sTUFBTSxNQUFOLENBQVA7QUFBQSxXQUFqQjtBQUFBO0FBQUEsT0FERjtBQUdEOzs7Ozs7QUFka0IsTyxDQUNaLFUsR0FBYTtBQUNsQixTQUFPLEtBRFc7QUFFbEIsWUFBVSxTQUZRO0FBR2xCLFNBQU8sU0FIVztBQUlsQixlQUFhLDhDQUpLO0FBS2xCO0FBTGtCLEM7a0JBREQsTzs7Ozs7O0FDRnJCLE9BQU8sT0FBUCxHQUFpQixDQUFDLFFBQVEsb0VBQVIsQ0FBRCxFQUErRSxRQUFRLHdFQUFSLENBQS9FLENBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1bW15IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICcxLjEnLFxuICAgIGNhdGVnb3J5OiAnRHVtbXknLFxuICAgIHRpdGxlOiAnRHVtbXknLFxuICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBhIGR1bW15IGNvbXBvbmVudCB0byBzZWUgaWYgdGhpcyB3b3JrcycsXG4gICAgY29kZTogYFxuICAgICAgPER1bW15IC8+XG4gICAgYCxcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMT5IZWxsbywgd29ybGQuPC9oMT5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHN0eWxlZ3VpZGUgPSB7XG4gICAgaW5kZXg6ICcyLjEnLFxuICAgIGNhdGVnb3J5OiAnRXhhbXBsZScsXG4gICAgdGl0bGU6ICdFeGFtcGxlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0Fub3RoZXIgZXhhbXBsZSBjb21wb25lbnQgdG8gdGVzdCBuYXZpZ2F0aW9uJyxcbiAgICBjb2RlOiBgXG4gICAgICA8RXhhbXBsZSAvPlxuICAgIGAsXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IChhbGVydCgnYmFyIScpKX0+Rm9vPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBbcmVxdWlyZSgnL1VzZXJzL2pjYXJuZXkvUHJvamVjdHMvb3Blbi11aS10b29sYm94L2NvbXBvbmVudHMvZHVtbXkvRHVtbXkuanN4JykscmVxdWlyZSgnL1VzZXJzL2pjYXJuZXkvUHJvamVjdHMvb3Blbi11aS10b29sYm94L2NvbXBvbmVudHMvZXhhbXBsZS9FeGFtcGxlLmpzeCcpXSJdfQ==
