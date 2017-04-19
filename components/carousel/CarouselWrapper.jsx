import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './carousel.scss';

export default class CarouselWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
  }

  rotateRight() {
    this.setState({ offset: this.state.offset + 1 });
  }

  rotateLeft() {
    this.setState({ offset: this.state.offset - 1 });
  }

  renderChildren() {
    // ALL THE MAGIC WORDS HERE KILL THEM KILL THEM
    const style = {
      position: 'relative',
      float: 'left',
      width: '150px',
      height: '100px',
      backgroundColor: 'red',
      left: `${150 * this.state.offset}px`,
    };
    return this.props.children.map(child => (
      <div
        className="carousel-element"
        style={style}
      >
        {child}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div
          ref={wrap => (this.wrap = wrap)}
          className="open-ui-toolbox-carousel"
        >
          {this.renderChildren()}
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