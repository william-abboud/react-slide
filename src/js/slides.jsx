import React, { Component } from 'react';

class Slides extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return [
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide</div>,
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide</div>,
      <div style={{ width: "100px" }} onClick={this.props.slideNext}>Slide</div>,
    ];
  }
}

export default Slides;
