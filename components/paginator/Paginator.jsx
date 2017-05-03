import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './paginator.scss';

/*
Component that takes one or more children as props and renders them in a
vertically or horizonally navigable list within the wrapping component (via some
programatically rendered buttons - described by props)

TODO: make the thing render children

TODO: make the wrapper a) know how many children per page to show, b) only show
that amount of children, c) show the right slice of its children as dictated by
its pageIdx state key

TODO: give the wrapper methods to [in/de]crement its pageIdx & attach pass those
methods to buttons

TODO: make it pretty

TODO: only render active page and those before & after, add css transitions to
slide pages in & out
*/

export default class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIdx: this.props.pageIdx || 0,
    };
  }

  render() {
    return (
      <div>Paginator</div>
    );
  }
}

Paginator.propTypes = {
  pageIdx: PropTypes.number.isRequired,
};

Paginator.defaultProps = {
  pageIdx: 0,
};
