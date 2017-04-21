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
      <div>
        <CarouselWrapper>
          <a href="http://lorempixel.com/400/200/sports/1">
            <img src="http://lorempixel.com/400/200/sports/1" alt="" />
          </a>
          <a href="http://lorempixel.com/400/200/sports/2">
            <img src="http://lorempixel.com/400/200/sports/2" alt="" />
          </a>
          <a href="http://lorempixel.com/400/200/sports/3">
            <img src="http://lorempixel.com/400/200/sports/3" alt="" />
          </a>
        </CarouselWrapper>
      </div>
    );
  }
}
