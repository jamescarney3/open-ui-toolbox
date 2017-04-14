import React, { Component } from 'react';

import PopoverWrapper from './PopoverWrapper';

export default class extends Component {
  static styleguide = {
    index: '3.1',
    category: 'Popover',
    title: 'PopoverWrapper',
    description: 'Wrap another element in this to give it a configurable popover',
    // wonky pre-formatting here, ugly indentation
    // is a necessary evil
    code: `
<div className="container" style={{ width: '100%' }}>
  <div className="row">
    <div className="col-xs-3">
      <PopoverWrapper
        attach="top"
        direction="top"
        maxWidth={150}
        body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
      >
        <p>
          The wrapper for this child has attach and direction props of
          &quot;top&quot;, and a maxWidth prop of 150. This is the
          wrapper&apos;s default behavior.
        </p>
      </PopoverWrapper>
    </div>
    <div className="col-xs-3">
      <PopoverWrapper
        attach="right"
        direction="right"
        maxWidth={100}
        body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
      >
        <p>
          The wrapper for this child has attach and direction props of
          &quot;right&quot;, and a maxWidth prop of 100.
        </p>
      </PopoverWrapper>
    </div>
    <div className="col-xs-3">
      <PopoverWrapper
        attach="left"
        direction="left"
        maxWidth={200}
        body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
      >
        <p>
          The wrapper for this child has attach and direction props of
          &quot;left&quot;, and a maxWidth prop of 200.
        </p>
      </PopoverWrapper>
    </div>
    <div className="col-xs-3">
      <PopoverWrapper
        arrowSize={40}
        attach="bottomleft"
        direction="bottom"
        body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
      >
        <p>
          The wrapper for this child has an attach prop of &quot;
          bottomleft &quot;, a direction prop of &quot;bottom&quot;, an
          &quot;arrowSize&quot; prop of 40, and no maxWidth prop.
        </p>
      </PopoverWrapper>
    </div>
  </div>
</div>
    `,
  };

  render() {
    return (
      <div className="container" style={{ width: '100%' }}>
        <div className="row">
          <div className="col-xs-3">
            <PopoverWrapper
              attach="top"
              direction="top"
              maxWidth={150}
              body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
            >
              <p>
                The wrapper for this child has attach and direction props of
                &quot;top&quot;, and a maxWidth prop of 150. This is the
                wrapper&apos;s default behavior.
              </p>
            </PopoverWrapper>
          </div>
          <div className="col-xs-3">
            <PopoverWrapper
              attach="right"
              direction="right"
              maxWidth={100}
              body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
            >
              <p>
                The wrapper for this child has attach and direction props of
                &quot;right&quot;, and a maxWidth prop of 100.
              </p>
            </PopoverWrapper>
          </div>
          <div className="col-xs-3">
            <PopoverWrapper
              attach="left"
              direction="left"
              maxWidth={200}
              body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
            >
              <p>
                The wrapper for this child has attach and direction props of
                &quot;left&quot;, and a maxWidth prop of 200.
              </p>
            </PopoverWrapper>
          </div>
          <div className="col-xs-3">
            <PopoverWrapper
              arrowSize={40}
              attach="bottomleft"
              direction="bottom"
              body="This is the body of the popover. Lorem ipsum etc etc ad infinitum..."
            >
              <p>
                The wrapper for this child has an attach prop of &quot;
                bottomleft &quot;, a direction prop of &quot;bottom&quot;, an
                &quot;arrowSize&quot; prop of 40, and no maxWidth prop.
              </p>
            </PopoverWrapper>
          </div>
        </div>
      </div>
    );
  }
}
