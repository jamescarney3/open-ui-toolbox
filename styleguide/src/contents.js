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

// import dist, { Dummy } from '../../dist/bundle';

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'bong'
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.styleguide = {
  index: '1.1',
  category: 'Dummy',
  title: 'Dummy',
  description: 'Just a dummy component to see if this works',
  code: '\n      <Dummy />\n    '
};
exports.default = _class;
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

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Hover me, please!'
      );
    }
  }]);

  return _class;
}(_react.Component);

_class.styleguide = {
  index: '3.1',
  category: 'Popover',
  title: 'PopoverWrapper',
  description: 'A declaratively customizeable popover wrapper',
  code: '\n        <div>Hover me, please!</div>\n    '
};
exports.default = _class;
module.exports = exports['default'];

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

module.exports = [require('/Users/jcarney/Projects/open-ui-toolbox/components/dummy/styleguide.jsx'), require('/Users/jcarney/Projects/open-ui-toolbox/components/popover/styleguide.jsx')];

},{"/Users/jcarney/Projects/open-ui-toolbox/components/dummy/styleguide.jsx":1,"/Users/jcarney/Projects/open-ui-toolbox/components/popover/styleguide.jsx":2}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb21wb25lbnRzL2R1bW15L3N0eWxlZ3VpZGUuanN4IiwiY29tcG9uZW50cy9wb3BvdmVyL3N0eWxlZ3VpZGUuanN4Iiwic3R5bGVndWlkZS9zcmMvY29udGVudHMtaW50ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs2QkFhVztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0Q7Ozs7OztPQWRNLFUsR0FBWTtBQUNqQixTQUFPLEtBRFU7QUFFakIsWUFBVSxPQUZPO0FBR2pCLFNBQU8sT0FIVTtBQUlqQixlQUFhLDZDQUpJO0FBS2pCO0FBTGlCLEM7Ozs7Ozs7Ozs7Ozs7QUNKckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWNXO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRDs7Ozs7O09BZE0sVSxHQUFZO0FBQ2pCLFNBQU8sS0FEVTtBQUVqQixZQUFVLFNBRk87QUFHakIsU0FBTyxnQkFIVTtBQUlqQixlQUFhLCtDQUpJO0FBS2pCO0FBTGlCLEM7Ozs7Ozs7QUNKckIsT0FBTyxPQUFQLEdBQWlCLENBQUMsUUFBUSx5RUFBUixDQUFELEVBQW9GLFFBQVEsMkVBQVIsQ0FBcEYsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBkaXN0LCB7IER1bW15IH0gZnJvbSAnLi4vLi4vZGlzdC9idW5kbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID17XG4gICAgaW5kZXg6ICcxLjEnLFxuICAgIGNhdGVnb3J5OiAnRHVtbXknLFxuICAgIHRpdGxlOiAnRHVtbXknLFxuICAgIGRlc2NyaXB0aW9uOiAnSnVzdCBhIGR1bW15IGNvbXBvbmVudCB0byBzZWUgaWYgdGhpcyB3b3JrcycsXG4gICAgY29kZTogYFxuICAgICAgPER1bW15IC8+XG4gICAgYCxcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5ib25nPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBzdHlsZWd1aWRlID17XG4gICAgaW5kZXg6ICczLjEnLFxuICAgIGNhdGVnb3J5OiAnUG9wb3ZlcicsXG4gICAgdGl0bGU6ICdQb3BvdmVyV3JhcHBlcicsXG4gICAgZGVzY3JpcHRpb246ICdBIGRlY2xhcmF0aXZlbHkgY3VzdG9taXplYWJsZSBwb3BvdmVyIHdyYXBwZXInLFxuICAgIGNvZGU6IGBcbiAgICAgICAgPGRpdj5Ib3ZlciBtZSwgcGxlYXNlITwvZGl2PlxuICAgIGAsXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+SG92ZXIgbWUsIHBsZWFzZSE8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFtyZXF1aXJlKCcvVXNlcnMvamNhcm5leS9Qcm9qZWN0cy9vcGVuLXVpLXRvb2xib3gvY29tcG9uZW50cy9kdW1teS9zdHlsZWd1aWRlLmpzeCcpLHJlcXVpcmUoJy9Vc2Vycy9qY2FybmV5L1Byb2plY3RzL29wZW4tdWktdG9vbGJveC9jb21wb25lbnRzL3BvcG92ZXIvc3R5bGVndWlkZS5qc3gnKV0iXX0=
