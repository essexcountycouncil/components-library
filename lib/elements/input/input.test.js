import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import Input from './index.jsx';

afterEach(cleanup);

test('That the input has correct props', () => {
    render(<Input label='Test' name='test' />);

    expect(screen.getByRole('textbox')).toHaveClass('form-control');
    expect(screen.getByRole('textbox')).toHaveAttribute('id', 'test');
    expect(screen.getByRole('textbox')).toHaveAttribute('name', 'test');
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
});

test('That the containing div has correct base class', () => {
    render(<Input label='Test' name='test' />);
    expect(screen.getByTestId('input')).toHaveClass('group');
});

test('That the containing div has correct class combination', () => {
    render(<Input label='Test' name='test' className='input-test' />);
    expect(screen.getByTestId('input')).toHaveClass('group input-test');
});

test('That the label has correct props', () => {
    render(<Input label='Test' name='test' />);
    const label = screen.getByTestId('input').firstChild;
    expect(label).toHaveAttribute('for', 'test');
    expect(label).toHaveTextContent('Test');
});

test('That it renders children as expected', () => {
    render(
        <Input label='Test' name='test'>
            <div className='test-child' data-testid='test-child'>TEST</div>
        </Input>
    );

    const child = screen.getByTestId('test-child');
    expect(child).toBeInTheDocument();
    expect(child).toHaveClass('test-child');
    expect(child).toHaveTextContent('TEST');
});
