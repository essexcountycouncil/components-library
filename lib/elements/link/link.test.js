import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Link from './index.jsx';

afterEach(cleanup);

test('That the base link has correct props', () => {
    render(<Link href='/' title='A test link'>Test link</Link>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link')).toHaveAttribute('title', 'A test link');
    expect(screen.getByRole('link')).toHaveTextContent('Test link');
});

test('That the base external link has correct props', () => {
    render(<Link href='/' title='A test link' external>Test link</Link>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link')).toHaveAttribute('title', 'A test link');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'external');
    expect(screen.getByRole('link')).toHaveAttribute('target', '');
    expect(screen.getByRole('link')).toHaveClass('external-link');
    expect(screen.getByRole('link')).toHaveTextContent('Test link');

    expect(screen.getByText('Replacing your browser tab with an external website')).toBeInTheDocument();
    expect(screen.getByText('Replacing your browser tab with an external website')).toHaveClass('visually-hidden');
});

test('That the new tab external link has correct props', () => {
    render(<Link href='/' title='A test link' external target='_blank'>Test link</Link>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link')).toHaveAttribute('title', 'A test link');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'external');
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveClass('external-link');
    expect(screen.getByRole('link')).toHaveTextContent('Test link');

    expect(screen.getByText('Opening a new tab from an external website')).toBeInTheDocument();
    expect(screen.getByText('Opening a new tab from an external website')).toHaveClass('visually-hidden');
});

test('That the download external link has correct props', () => {
    render(<Link href='/' title='A test link' external download>Test link</Link>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(screen.getByRole('link')).toHaveAttribute('title', 'A test link');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'external');
    expect(screen.getByRole('link')).toHaveAttribute('target', '');
    expect(screen.getByRole('link')).toHaveClass('external-link');
    expect(screen.getByRole('link')).toHaveTextContent('Test link');

    expect(screen.getByText('Clicking this will download or open this file')).toBeInTheDocument();
    expect(screen.getByText('Clicking this will download or open this file')).toHaveClass('visually-hidden');
});
