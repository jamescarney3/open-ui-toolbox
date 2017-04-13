import React, { Component } from 'react';

// RSG seems unable to handle non-extension imports
// eslint-disable-next-line import/extensions
import Example from './Example.jsx';

export default class extends Component {
  static styleguide = {
    index: '2.1',
    category: 'Example',
    title: 'Example',
    description: 'Another example button with a children prop',
    code: `
      <Example>Foo</Example>
    `,
  }

  render() {
    return (
      <Example>Foo</Example>
    );
  }
}
