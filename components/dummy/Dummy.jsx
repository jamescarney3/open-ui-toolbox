import React, { Component } from 'react';

export default class Dummy extends Component {
  static styleguide = {
    index: '1.1',
    category: 'Dummy',
    title: 'Dummy',
    description: 'Just a dummy component to see if this works',
    code: `<Dummy />`,
  }
  render() {
    return (
      <h1>Hello, world.</h1>
    );
  }
}
