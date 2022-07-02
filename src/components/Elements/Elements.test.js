import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Elements from './Elements';

describe('<Elements />', () => {
  test('it should mount', () => {
    render(<Elements />);
    
    const elements = screen.getByTestId('Elements');

    expect(elements).toBeInTheDocument();
  });
});