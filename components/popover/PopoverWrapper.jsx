import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ANCHORS, getAttachCoords } from './utils';

export default class PopoverWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.renderPopover = this.renderPopover.bind(this);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  renderPopover() {
    if (this.state.hover) {
      const attachCoords = getAttachCoords(this.target.getBoundingClientRect(), this.props.attach);
      const popoverStyle = {
        color: 'red',
        position: 'fixed',
        top: attachCoords.y,
        left: attachCoords.x,
      };
      return (<div style={popoverStyle}>Pop me over</div>);
    }
    return null;
  }

  render() {
    const { onMouseEnter, onMouseLeave } = this;
    return (
      <div
        ref={target => (this.target = target)}
        {...{ onMouseEnter, onMouseLeave }}
      >
        {this.props.children}
        {this.renderPopover()}
      </div>
    );
  }
}

PopoverWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  attach: PropTypes.oneOf(ANCHORS),
};

PopoverWrapper.defaultProps = {
  attach: 'top',
};
