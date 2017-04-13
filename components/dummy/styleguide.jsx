import React, { Component } from 'react';

// RSG seems unable to handle non-extension imports
// eslint-disable-next-line import/extensions
import Dummy from './Dummy.jsx';

export default class extends Component {
  static styleguide = {
    index: '1.1',
    category: 'Dummy',
    title: 'Dummy',
    description: 'Just a dummy component to see if this works',
    code: `
      <Dummy />
    `,
  }

  render() {
    return (
      <Dummy />
    );
  }
}
