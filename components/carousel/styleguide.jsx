import React, { Component } from 'react';

import CarouselWrapper from './CarouselWrapper';

export default class extends Component {
  static styleguide = {
    index: '4.1',
    category: 'Carousel',
    title: 'CarouselWrapper',
    description: 'Describe meeeeeeee',
    code: `
      <CarouselWrapper />
    `,
  }

  render() {
    return (
      <CarouselWrapper>
        <div>Foo.</div>
        <div>Bar.</div>
        <div>Baz.</div>
      </CarouselWrapper>
    );
  }
}
