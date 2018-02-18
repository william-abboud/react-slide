import React from 'react';
import renderer from 'react-test-renderer';
import Slider from '../js/app';

describe("Slider", () => {
  let Child;
  let sliderInst;
  let childInst;
  let options = {
    createNodeMock(element) {
      if (element.props.className === "slider") {
        return {
          style: {},
          children: [
            {
              children: [
                {
                  getBoundingClientRect() {
                    return { width: 100 };
                  },
                  style: {}
                },
                {
                  getBoundingClientRect() {
                    return { width: 100 };
                  },
                  style: {}
                },
                {
                  getBoundingClientRect() {
                    return { width: 100 };
                  },
                  style: {}
                }
              ]
            }
          ]
        };
      }

      return null;
    }
  };

  beforeEach(() => {
    Child = (props) => [
      <div key="first">first slide</div>,
      <div key="second">second slide</div>,
      <div key="third">third slide</div>
    ];

    sliderInst = renderer.create(
      <Slider>
        { (sliderProps) => <Child {...sliderProps} /> }
      </Slider>,
      options
    );
    childInst = sliderInst.root.findByType(Child);
  });

  test("passes current slide index to children", () => {
    expect(childInst.props.currentSlideIdx).toBeDefined();
  });

  test("goes to next slide", () => {
    const lastSlideIndex = childInst.props.currentSlideIdx;

    childInst.props.slideNext();

    const nextSlideIndex = childInst.props.currentSlideIdx;

    expect(nextSlideIndex - lastSlideIndex).toBe(1);
  });

  test("goes to previous slide", () => {
    const lastSlideIndex = childInst.props.currentSlideIdx;

    childInst.props.slideNext();
    childInst.props.slidePrevious();

    const nextSlideIndex = childInst.props.currentSlideIdx;

    expect(nextSlideIndex).toEqual(lastSlideIndex);
  });

  test("doesn't slide to previous slide when current slide is first slide", () => {
    expect(childInst.props.currentSlideIdx).toBe(0);

    childInst.props.slidePrevious();
    expect(childInst.props.currentSlideIdx).toBe(0);
  });

  test("doesn't slide to next slide when current slide is last slide", () => {
    expect(childInst.props.currentSlideIdx).toBe(0);

    childInst.props.slideNext();
    childInst.props.slideNext();
    childInst.props.slideNext();

    expect(childInst.props.currentSlideIdx).toBe(2);
  });
});


