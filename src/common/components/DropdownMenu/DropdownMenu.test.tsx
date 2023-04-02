import { test, describe, expect } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithProviders } from '@/mocks/renderWithProviders';
import { DropdownMenu } from './DropdownMenu';

const items = [
	{ name: 'Item 1', callback: () => {}, icon: <>icon</> },
	{ name: 'Item 2', callback: () => {}, icon: <>icon</> },
	{ name: 'Item 3', callback: () => {}, icon: <>icon</> },
];

describe('DropdownMenu', () => {
	test('should render menu button', () => {
		renderWithProviders(<DropdownMenu items={[]} />);
		const menuButton = screen.getByRole('button');
		expect(menuButton).toBeVisible();
	});

	test('should render default button icon', () => {
		renderWithProviders(<DropdownMenu items={[]} />);
		const icon = screen.getByTestId('default-dropdown-icon');
		expect(icon).toBeInTheDocument();
	});

	test('should render custom button content', () => {
		renderWithProviders(
			<DropdownMenu items={[]} customButton={<span>Custom button</span>} />
		);
		const customButton = screen.getByText('Custom button');
		expect(customButton).toBeVisible();
	});

	test('should render menu closed by default', () => {
		renderWithProviders(<DropdownMenu items={[]} />);
		const menuItems = screen.queryByRole('menuitem');
		expect(menuItems).not.toBeInTheDocument();
	});

	test('should open menu on button click', async () => {
		renderWithProviders(<DropdownMenu items={[]} />);
		<DropdownMenu
			items={[{ name: 'Item 1', callback: () => {}, icon: <>icon</> }]}
		/>;
		const menuButton = screen.getByTestId('dropdown-menu-button');
		fireEvent.click(menuButton);
		const menuItems = await screen.queryByTestId(
			'dropdown-menu-items-container'
		);

		waitFor(() => {
			expect(menuItems).toBeVisible();
		});
	});

	test('should render correct number of menu items', () => {
		renderWithProviders(<DropdownMenu items={items} />);
		const menuButton = screen.getByRole('button');
		fireEvent.click(menuButton);
		const menuItems = screen.getAllByTestId('menu-dropdown-item-btn');
		expect(menuItems.length).toBe(items.length);
	});

	test('should close menu on menu item click', () => {
		renderWithProviders(<DropdownMenu items={items} />);
		const menuButton = screen.getByTestId('dropdown-menu-button');

		fireEvent.click(menuButton);
		const menuItem = screen.getAllByTestId('menu-dropdown-item-btn')[0];

		fireEvent.click(menuItem);

		expect(
			screen.queryByTestId('dropdown-menu-items-container')
		).not.toBeInTheDocument();
	});
});
