import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

it('renders without crashing', () => {
  const rendered = renderer.create(<Header />).toJSON();
  expect(rendered).toBeTruthy();
});