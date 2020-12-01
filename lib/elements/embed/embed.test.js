import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Embed from './index.jsx';

afterEach(cleanup);

test('That the embed container has correct class', () => {
    render(<Embed src='https://www.youtube.com/embed/U9nnRicMHOk' title='Test embed' />);
    expect(screen.getByTestId('embed')).toHaveClass('embed-container');
});

test('That the embed has correct props', () => {
    render(<Embed src='https://www.youtube.com/embed/U9nnRicMHOk' title='Test embed' />);

    const embedContainer = screen.getByTestId('embed');
    const embed = embedContainer.firstChild;
    expect(embed).toHaveAttribute('src', 'https://www.youtube.com/embed/U9nnRicMHOk');
    expect(embed).toHaveAttribute('title', 'Test embed');
});
