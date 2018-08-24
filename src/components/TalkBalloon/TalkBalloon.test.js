import React from 'react';
import renderer from 'react-test-renderer';

import TalkBalloon from './TalkBalloon';

it('renders without crashing', () => {
  const rendered = renderer.create(<TalkBalloon />).toJSON();
  expect(rendered).toBeTruthy();
});