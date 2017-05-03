import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CarouselPanel from './CarouselPanel';

import './carousel.scss';

/*
Outside frame component that wraps one or more child components and renders
them within an inner div positioned based on an offset index stored in this
component's state - currently fills the entire width of its parent element

TODO: optionally take a width prop, convert programatically to % or px val,
and set as inline style

TODO: optionally calculate width of largest inner panel element on mount and
set inline style width based on that
*/
export default class CarouselWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      panelMaxHeight: 0,
      panelMaxWidth: 0,
    };
    this.renderChildren = this.renderChildren.bind(this);
    this.renderPane = this.renderPane.bind(this);
    this.rotateLeft = this.rotateLeft.bind(this);
    this.rotateRight = this.rotateRight.bind(this);
  }

  rotateRight() {
    const { offset } = this.state;
    if (offset > 0) {
      this.setState({ offset: offset - 1 });
    }
  }

  rotateLeft() {
    const [{ offset }, children] = [this.state, React.Children.toArray(this.props.children)];
    if (offset < children.length - 1) {
      this.setState({ offset: this.state.offset + 1 });
    }
  }


  renderChildren() {
    const children = React.Children.toArray(this.props.children);
    return children.map((child, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <CarouselPanel key={idx} count={children.length}>
        {child}
      </CarouselPanel>
    ));
  }

  renderPane() {
    const paneStyle = {
      position: 'relative',
      width: `${100 * this.props.children.length}%`,
      right: `${100 * this.state.offset}%`,
    };
    return (
      <div className="carousel-pane" style={paneStyle}>
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
        <button onClick={this.rotateRight}>right</button>
        <button onClick={this.rotateLeft}>left</button>
      </div>
    );
  }
}

CarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
