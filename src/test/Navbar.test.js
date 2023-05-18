import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from '../features/Profile/Profile';
import Missions from '../features/Missions/Missions';
import store from '../store/store';
import Rockets from '../features/Rockets/Rockets';

it('renders  profile correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders  mission correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders  Rocket correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
