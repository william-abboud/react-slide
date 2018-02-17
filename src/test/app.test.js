import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '../js/app';

describe("Slider", () => {
  let Child;
  let sliderInst;
  let childInst;

  beforeEach(() => {
    Child = (props) => null;
    sliderInst = renderer.create(
      <Slider>
        { (sliderProps) => <Child {...sliderProps} /> }
      </Slider>
    );
    childInst = sliderInst.root.findByType(Child);
  });

  test("passes current slide index to children", () => {
    expect(childInst.props.currentSlideIdx).toBe(0);
  });

  test("goes to next slide", () => {
    expect(childInst.props.currentSlideIdx).toBe(0);

    childInst.props.slideNext();
    expect(childInst.props.currentSlideIdx).toBe(1);
  });

  test("goes to previous slide", () => {
    childInst.props.slideNext();
    expect(childInst.props.currentSlideIdx).toBe(1);

    childInst.props.slidePrevious();
    expect(childInst.props.currentSlideIdx).toBe(0);
  });
});


