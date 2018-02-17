import React, { Component } from 'react';
import { func } from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slideNext = this.slideNext.bind(this);
    this.slidePrevious = this.slidePrevious.bind(this);

    this.state = {
      currentSlideIdx: 0
    };

    this.api = {
      slideNext: this.slideNext,
      slidePrevious: this.slidePrevious,
    };
  }

  slideNext() {
    this.setState({
      currentSlideIdx: this.state.currentSlideIdx + 1
    });
  }

  slidePrevious() {
    this.setState({
      currentSlideIdx: this.state.currentSlideIdx - 1
    });
  }

  render() {
    return (
      <div className="slider">
        { this.props.children({ ...this.state, ...this.api }) }
      </div>
    );
  }
}

Slider.propTypes = {
  children: func.isRequired,
};

export default Slider;
