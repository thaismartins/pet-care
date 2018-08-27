import React from 'react';
import renderer from 'react-test-renderer';

import CloseButton from './CloseButton';

it('renders without crashing', () => {
  const rendered = renderer.create(<CloseButton />).toJSON();
  expect(rendered).toBeTruthy();
});