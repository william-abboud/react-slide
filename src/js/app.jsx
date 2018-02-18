import React, { Component } from 'react';
import { func } from 'prop-types';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slideNext = this.slideNext.bind(this);
    this.slidePrevious = this.slidePrevious.bind(this);
    this.getSliderRef = this.getSliderRef.bind(this);
    this.initSlider = this.initSlider.bind(this);

    this.state = {
      currentSlideIdx: 0,
      style: {
        display: "flex",
        boxSizing: "border-box",
        transition: "transform 0.5s ease-out",
      },
    };

    this.api = {
      slideNext: this.slideNext,
      slidePrevious: this.slidePrevious,
    };
  }

  componentDidMount() {
    this.initSlider();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentSlideIdx } = this.state;

    if (prevState.currentSlideIdx !== currentSlideIdx) {
      const slideWidth = this.slides[0].getBoundingClientRect().width;

      this.setState({ style: {
          ...this.state.style,
          transform: `translateX(-${currentSlideIdx * slideWidth}px)`,
        }
      });
    }
  }

  getSliderRef(ref) {
    this.slider = ref;
    this.slidesContainer = this.slider.children[0];
    this.slides = this.slidesContainer.children;
  }

  initSlider() {
    const slideWidth = this.slides[0].getBoundingClientRect().width;
    const widthPx = `${slideWidth}px`;
    const slides = [...this.slides];

    slides.map(slide => slide.style.minWidth = widthPx);

    this.slider.style.width = widthPx;
    this.slider.style.overflow = "hidden";
  }

  slideNext() {
    const { currentSlideIdx } = this.state;

    if (currentSlideIdx !== this.slides.length - 1) {
      this.setState({
        currentSlideIdx: currentSlideIdx + 1
      });
    }
  }

  slidePrevious() {
    if (this.state.currentSlideIdx !== 0) {
      this.setState({
        currentSlideIdx: this.state.currentSlideIdx - 1
      });
    }
  }

  render() {
    return (
      <div className="slider" ref={this.getSliderRef}>
        <div className="slides-container" style={this.state.style}>
          { this.props.children({ ...this.state, ...this.api }) }
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  children: func.isRequired,
};

export default Slider;
