import React, { Component } from 'react';

export default class Example extends Component {
  static styleguide = {
    index: '2.1',
    category: 'Example',
    title: 'Example',
    description: 'Another example component to test navigation',
    code: `
      <Example />
    `,
  }
  render() {
    return (
      <button onClick={() => (alert('bar!'))}>Foo</button>
    );
  }
}
