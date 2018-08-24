import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';

it('renders without crashing', () => {
  const rendered = renderer.create(<Badge />).toJSON();
  expect(rendered).toBeTruthy();
});