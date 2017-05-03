import PropTypes from 'prop-types';
import React, { Component } from 'react';

import PopoverBody from './PopoverBody';
import { ANCHORS, DIRECTIONS, getArrowStyles, getBodyStyles } from './utils';

import './popover.scss';

/*
Wrapper component that renders a fixed position tooltip attached to its child -
provides an interface to specify tooltip element's positioning relative to
child component

TODO: update body prop to take either text or nodes
*/
export default class PopoverWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.renderArrow = this.renderArrow.bind(this);
    this.renderPopoverBody = this.renderPopoverBody.bind(this);
  }

  onMouseEnter() {
    this.setState({ hover: true });
  }

  onMouseLeave() {
    this.setState({ hover: false });
  }

  renderArrow() {
    if (this.state.hover) {
      const { attach, direction, arrowSize } = this.props;
      const clientRect = this.target.getBoundingClientRect();
      const computedStyles = getArrowStyles({ arrowSize, attach, clientRect, direction });

      return (
        <div
          className={`arrow ${direction}`}
          ref={arrow => (this.arrow = arrow)}
          style={computedStyles}
        />
      );
    }
    return null;
  }

  renderPopoverBody() {
    if (this.state.hover) {
      const { attach, direction, arrowSize } = this.props;
      const clientRect = this.target.getBoundingClientRect();
      return (
        <PopoverBody
          maxWidth={this.props.maxWidth}
          getBodyStyles={getBodyStyles({ arrowSize, attach, clientRect, direction })}
        >
          {this.props.body}
        </PopoverBody>
      );
    }
    return null;
  }

  render() {
    const { onMouseEnter, onMouseLeave } = this;
    return (
      <div
        className="open-ui-toolbox-popover"
        ref={target => (this.target = target)}
        {...{ onMouseEnter, onMouseLeave }}
      >
        {this.props.children}
        {this.renderArrow()}
        {this.renderPopoverBody()}
      </div>
    );
  }
}

PopoverWrapper.propTypes = {
  attach: PropTypes.oneOf(ANCHORS),
  arrowSize: PropTypes.number,
  body: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(DIRECTIONS),
  maxWidth: PropTypes.number,
};

PopoverWrapper.defaultProps = {
  attach: 'top',
  arrowSize: 20,
  direction: 'top',
  maxWidth: 150,
};
