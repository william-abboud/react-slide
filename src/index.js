import './main.scss';
import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Slider from './js/app';
import Slides from './js/slides';

function renderApp(Component, Children) {
  render(
    <AppContainer>
      <Component>
        {
          (state) => <Children {...state} />
        }
      </Component>
    </AppContainer>,
    document.getElementById("root")
  );
}

renderApp(Slider, Slides);

if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./js/app', () => renderApp(Slider, Slides));
  }
}
