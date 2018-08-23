import React from 'react';
import Badge from './Badge';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Badge />).toJSON();
  expect(rendered).toBeTruthy();
});