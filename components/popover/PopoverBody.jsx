import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PopoverBody extends Component {
  componentDidMount() {
    const { height, width } = this.body.getBoundingClientRect();
    const computedStyle = this.props.getBodyStyles({ height, width });
    Object.keys(computedStyle).forEach(k => (this.body.style[k] = computedStyle[k]));
  }

  render() {
    return (
      <div
        style={{ maxWidth: this.props.maxWidth }}
        className="popover-body"
        ref={body => (this.body = body)}
      >
        {this.props.children}
      </div>
    );
  }
}

PopoverBody.propTypes = {
  children: PropTypes.node.isRequired,
  getBodyStyles: PropTypes.func.isRequired,
  maxWidth: PropTypes.number,
};

PopoverBody.defaultProps = {
  maxWidth: 52,
};
