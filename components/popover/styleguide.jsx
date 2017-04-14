import React, { Component } from 'react';

// RSG seems unable to handle non-extension imports
// eslint-disable-next-line import/extensions
import PopoverWrapper from './PopoverWrapper.jsx';

export default class extends Component {
  static styleguide = {
    index: '3.1',
    category: 'Popover',
    title: 'PopoverWrapper',
    description: 'Wrap another element in this to give it a configurable popover',
    // wonky pre-formatting here, ugly indentation
    // is a necessary evil
    code: `
<PopoverWrapper>
  <div>Mouse over me, please</div>
</PopoverWrapper>
    `,
  };

  render() {
    return (
      <PopoverWrapper
        attach="bottom"
      >
        <div>Mouse over me, please</div>
      </PopoverWrapper>
    );
  }
}
