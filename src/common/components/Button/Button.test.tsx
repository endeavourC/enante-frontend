import { test, describe, expect, vi } from 'vitest';
import { Button, ButtonKind } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
	test('Button renders its children', () => {
		render(<Button>Test button</Button>);
		expect(screen.getByText('Test button')).toBeInTheDocument();
	});

	test('Button has correct kind and CSS class', () => {
		render(<Button kind={ButtonKind.Primary}>Test button</Button>);
		const button = screen.getByRole('button');
		expect(button).not.toHaveClass('bg-secondary');
		expect(button).toHaveClass('bg-primary');
	});

	test('Button responds to click', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Test button</Button>);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('Button displays loading animation when isLoading=true', () => {
		render(<Button isLoading>Test button</Button>);
		const spinner = screen.getByTestId('spinner');
		expect(spinner).toBeInTheDocument();
	});

	test('Button does not display loading animation when isLoading=false', () => {
		render(<Button>Test button</Button>);
		const spinner = screen.queryByTestId('spinner');
		expect(spinner).not.toBeInTheDocument();
	});
});
