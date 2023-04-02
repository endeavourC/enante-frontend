import { test, describe, expect } from 'vitest';
import { Container } from './Container';
import { render, screen } from '@testing-library/react';

describe('Container', () => {
	test('should render container with children', () => {
		render(<Container>Container children</Container>);
		expect(screen.getByText('Container children')).toBeInTheDocument();
	});
});
