import PropTypes from 'prop-types';
import React, { Component } from 'react';

const onClickButton = () => {
  // eslint-disable-next-line no-console
  console.log('bar');
};

// eslint-disable-next-line react/prefer-stateless-function
export default class Example extends Component {
  render() {
    return (
      <button onClick={onClickButton}>{this.props.children}</button>
    );
  }
}

Example.propTypes = {
  children: PropTypes.node.isRequired,
};
