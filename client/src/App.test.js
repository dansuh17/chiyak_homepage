/* eslint-disable import/no-extraneous-dependencies, no-undef, react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// do a shallow rendering to eliminate store dependency
it('renders without crashing', () => {
  shallow(<App />);
});
