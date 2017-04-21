import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carousel.scss';

export default class CarouselWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
    this.getChildren = this.getChildren.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.renderPane = this.renderPane.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
  }

  getChildren() {
    return Array.isArray(this.props.children) ? this.props.children : [this.props.children];
  }

  rotateRight() {
    const { offset } = this.state;
    if (offset > 0) {
      this.setState({ offset: offset - 1 });
    }
  }

  rotateLeft() {
    const [{ offset }, children] = [this.state, this.getChildren()];
    if (offset < children.length - 1) {
      this.setState({ offset: this.state.offset + 1 });
    }
  }


  renderChildren() {
    const panelStyle = { width: `${100 / this.props.children.length}%` };
    return this.getChildren().map((child, idx) => (
      <div
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
        className="carousel-panel"
        style={panelStyle}
      >
        {child}
      </div>
    ));
  }

  renderPane() {
    const paneStyle = {
      position: 'relative',
      width: `${100 * this.props.children.length}%`,
      right: `${100 * this.state.offset}%`,
    };
    return (
      <div
        className="carousel-pane"
        style={paneStyle}
      >
        {this.renderChildren()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div
          ref={wrap => (this.wrap = wrap)}
          className="open-ui-toolbox-carousel"
        >
          {this.renderPane()}
        </div>
        <button onClick={this.rotateLeft}>left</button>
        <button onClick={this.rotateRight}>right</button>
      </div>
    );
  }
}

CarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
