import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../features/Profile/Profile';
import Missions from '../features/Missions/Missions';
// import Rockets from '../features/Rockets/Rockets';

it('renders correctly', () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer.create(<Missions />).toJSON();
  expect(tree).toMatchSnapshot();
});

// it('renders correctly', () => {
//   const tree = renderer.create(<Rockets />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
