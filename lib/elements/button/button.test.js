import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Button from './index.jsx';

afterEach(cleanup);

test('That the base <Button /> can render', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
});

test('That the text type renders as expected', () => {
    render(<Button type='text'>Test Button Text</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('text');
    expect(screen.getByRole('button')).toHaveTextContent('Test Button Text');
});

test('That the submit type renders as expected', () => {
    render(<Button type='submit'>Continue</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('button');
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    expect(screen.getByRole('button')).toHaveValue('Continue');
});