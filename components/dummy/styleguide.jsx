import React, { Component } from 'react';

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
