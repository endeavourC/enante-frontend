import { test, describe, expect, vi } from 'vitest';
import { SideHeader } from './SideHeader';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/mocks/renderWithProviders';

const items = [
	{
		name: 'Home',
		icon: <>icon</>,
		path: '/panel',
	},
	{
		name: 'Languages',
		icon: <>icon</>,
		path: '/panel/languages',
	},
];
describe('SideHeader', () => {
	test('should render container with children', () => {
		renderWithProviders(<SideHeader items={items} />);
		expect(screen.getByText(/Make your life better/)).toBeInTheDocument();
	});

	test('should render correct number of menu items', () => {
		renderWithProviders(<SideHeader items={items} />);

		const menuItems = screen.getAllByTestId('menu-item');

		expect(menuItems.length).toBe(items.length);
	});

	test('should mark active menu item as active', () => {
		vi.mock('react-router-dom', async () => {
			return {
				...(await import('react-router-dom')),
				useLocation: () => {
					return {
						pathname: '/panel/languages',
					};
				},
			};
		});
		renderWithProviders(<SideHeader items={items} />);

		const activeMenuItem =
			screen.getByText(/Languages/).parentElement?.parentElement;

		expect(activeMenuItem).toHaveClass('text-primary');
	});
});
