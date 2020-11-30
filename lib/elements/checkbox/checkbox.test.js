import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Checkbox from './index.jsx';

afterEach(cleanup);

test('That we have a wrapping "multiple-choice" class', () => {
    render(<Checkbox name="telephone" value="Telephone" />);
    expect(screen.getByTestId('checkbox')).toHaveClass('multiple-choice');
})

test('That the input has expected ids/names/values', () => {
    render(<Checkbox name="telephone" value="Telephone" />);
    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', 'telephone');
    expect(checkbox).toHaveAttribute('name', 'telephone');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('value', 'Telephone');
});

test('That the label has expected for and name', () => {
    render(<Checkbox name="telephone" value="Telephone" />);
    const label = screen.getByLabelText('Telephone');

    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute('id', 'telephone');
    expect(label).toHaveTextContent('Telephone');
});
