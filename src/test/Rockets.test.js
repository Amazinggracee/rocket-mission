import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from '../features/Rockets/Rockets';
import { reserve } from '../features/Rockets/rocketSlice';

jest.mock('react-redux');

describe('Rockets', () => {
  test('renders rockets and handles reserve button clicks', () => {
    const mockedDispatch = jest.fn();
    useSelector.mockReturnValueOnce([
      {
        rocket_id: '1',
        rocket_img: 'rocket1.png',
        rocket_name: 'Rocket 1',
        rocket_description: 'Description 1',
        reserved: false,
      },
    ]); // Mocked rockets data
    useSelector.mockReturnValueOnce(false); // Not loading state
    useDispatch.mockReturnValue(mockedDispatch);

    render(<Rockets />);

    const rocketNameElement = screen.getByText('Rocket 1');
    const reserveButtonElement = screen.getByText('Reserve Rocket');

    expect(rocketNameElement).toBeInTheDocument();
    expect(reserveButtonElement).toBeInTheDocument();

    // Click the reserve button
    reserveButtonElement.click();
    expect(mockedDispatch).toHaveBeenCalledWith(reserve('1'));
  });
});
