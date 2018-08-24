import React from 'react';
import renderer from 'react-test-renderer';

import Notification from './Notification';

it('renders without crashing', () => {
  const rendered = renderer.create(<Notification text="Ok" />).toJSON();
  expect(rendered).toBeTruthy();
});