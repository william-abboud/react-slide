import React, { Component } from 'react';

class Slides extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide 1</div>,
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide 2</div>,
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide 3</div>,
    ];
  }
}

export default Slides;
