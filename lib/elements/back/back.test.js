import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import BackLink from './index.jsx';

afterEach(cleanup);

test('That the base <BackLink /> can render correctly', () => {
    render(<BackLink href="/back"/>);
    const element = screen.getByRole('link');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('link-back');
    expect(element).toHaveAttribute('href', '/back');
    expect(element).toHaveTextContent('Back');
});
