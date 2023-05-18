import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../features/Missions/Missions';
import store from '../store/store';

describe('Missions', () => {
  it('renders loading text when loading is true', () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders missions table when loading is false', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByRole('table')).toBeInTheDocument();
    });
  });

  it('renders correct mission details', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText(/Thaicom is the name of/)).toBeInTheDocument();
      expect(
        screen.getByText(/In 2017, Iridium began launching Iridium NEXT/),
      ).toBeInTheDocument();
    });
  });
});
