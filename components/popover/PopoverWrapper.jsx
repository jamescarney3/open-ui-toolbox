import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      return (<div>Pop me over</div>);
    }
    return null;
  }

  render() {
    const { onMouseEnter, onMouseLeave } = this;
    return (
      <div {...{ onMouseEnter, onMouseLeave }}>
        {this.props.children}
        {this.renderPopover()}
      </div>
    );
  }
}

PopoverWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
