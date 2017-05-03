import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
Inner component that wraps, sizes, & positions each child node of a
CarouselWrapper based on the number of child nodes
*/
export default class CarouselPanel extends Component {
  constructor(props) {
    super(props);
    this.injectRef = this.injectRef.bind(this);
  }

  injectRef(child) {
    return React.cloneElement(child, { ref: panelInner => (this.panelInner = panelInner) });
  }

  render() {
    return (
      <div
        className="carousel-panel"
        style={{ width: `${100 / this.props.count}%` }}
      >
        {this.injectRef(this.props.children)}
      </div>
    );
  }
}

CarouselPanel.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
};
