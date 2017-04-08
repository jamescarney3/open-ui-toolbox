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

module.exports = [require('/Users/jcarney/Projects/open-ui-toolbox/components/dummy/Dummy.jsx')];

},{"/Users/jcarney/Projects/open-ui-toolbox/components/dummy/Dummy.jsx":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2R1bW15L0R1bW15LmpzeCIsInN0eWxlZ3VpZGUvc3JjL2NvbnRlbnRzLWludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0lBRXFCLEs7Ozs7Ozs7Ozs7OzZCQVVWO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRDs7Ozs7O0FBZGtCLEssQ0FDWixVLEdBQWE7QUFDbEIsU0FBTyxLQURXO0FBRWxCLFlBQVUsT0FGUTtBQUdsQixTQUFPLE9BSFc7QUFJbEIsZUFBYSw2Q0FKSztBQUtsQjtBQUxrQixDO2tCQURELEs7Ozs7OztBQ0ZyQixPQUFPLE9BQVAsR0FBaUIsQ0FBQyxRQUFRLG9FQUFSLENBQUQsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVtbXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgc3R5bGVndWlkZSA9IHtcbiAgICBpbmRleDogJzEuMScsXG4gICAgY2F0ZWdvcnk6ICdEdW1teScsXG4gICAgdGl0bGU6ICdEdW1teScsXG4gICAgZGVzY3JpcHRpb246ICdKdXN0IGEgZHVtbXkgY29tcG9uZW50IHRvIHNlZSBpZiB0aGlzIHdvcmtzJyxcbiAgICBjb2RlOiBgXG4gICAgICA8RHVtbXkgLz5cbiAgICBgLFxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxPkhlbGxvLCB3b3JsZC48L2gxPlxuICAgICk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW3JlcXVpcmUoJy9Vc2Vycy9qY2FybmV5L1Byb2plY3RzL29wZW4tdWktdG9vbGJveC9jb21wb25lbnRzL2R1bW15L0R1bW15LmpzeCcpXSJdfQ==
