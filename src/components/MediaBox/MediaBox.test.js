import React from 'react';
import renderer from 'react-test-renderer';

import MediaBox from './MediaBox';

it('renders without crashing', () => {
  const rendered = renderer.create(<MediaBox />).toJSON();
  expect(rendered).toBeTruthy();
});