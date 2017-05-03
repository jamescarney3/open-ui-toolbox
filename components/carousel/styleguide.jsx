import React, { Component } from 'react';

import CarouselWrapper from './CarouselWrapper';

export default class extends Component {
  static styleguide = {
    index: '2.1',
    category: 'Carousel',
    title: 'CarouselWrapper',
    description: `
      Wrap one or more elements in a CarouselWrapper component to inject them
      into an interactive animated carousel element
    `,
    // wonky pre-formatting here, ugly indentation
    // is a necessary evil
    code: `
<div style={{ width: '400px', height: '200px' }}>
  <CarouselWrapper>
    <img src="http://lorempixel.com/400/200/sports/1" alt="" />
    <img src="http://lorempixel.com/400/200/sports/2" alt="" />
    <img src="http://lorempixel.com/400/200/sports/3" alt="" />
  </CarouselWrapper>
</div>
    `,
  }

  render() {
    return (
      <div style={{ width: '400px', height: '200px' }}>
        <CarouselWrapper>
          <img src="http://lorempixel.com/400/200/sports/1" alt="" />
          <img src="http://lorempixel.com/400/200/sports/2" alt="" />
          <img src="http://lorempixel.com/400/200/sports/3" alt="" />
        </CarouselWrapper>
      </div>
    );
  }
}
