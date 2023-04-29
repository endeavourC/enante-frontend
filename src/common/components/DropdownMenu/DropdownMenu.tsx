import { MenuItem } from '@/common/types/MenuItem';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface Props {
	items: MenuItem[];
	customButton?: React.ReactNode;
	width?: string;
}

export const DropdownMenu: React.FC<Props> = ({
	items,
	customButton,
	width = '224px',
}) => {
	const onClick = (ev: React.MouseEvent) => ev.stopPropagation();

	return (
		<Menu as="div" className="relative inline-block">
			{({ open }) => (
				<>
					<Menu.Button
						onClick={onClick}
						data-testid="dropdown-menu-button"
						className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					>
						{customButton ? (
							customButton
						) : (
							<>
								<svg
									data-testid="default-dropdown-icon"
									className="w-6 h-6"
									aria-hidden="true"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
								</svg>
							</>
						)}
					</Menu.Button>
					<AnimatePresence>
						{open ? (
							<motion.div
								className="relative z-20"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
							>
								<Menu.Items
									style={{ width }}
									data-test-id="dropdown-menu-items-container"
									static
									className="absolute left-1/2 -translate-x-1/2 mt-2  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[99999]"
								>
									{items.map(({ name, callback, icon }: MenuItem) => (
										<Menu.Item key={name}>
											{() => (
												<button
													data-testid="menu-dropdown-item-btn"
													onClick={(ev: React.MouseEvent) => {
														ev.stopPropagation();
														if (callback) {
															callback();
														}
													}}
													className="flex items-center justify-start text-left w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
												>
													{icon ? <span className="mr-2">{icon}</span> : null}
													{name}
												</button>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</motion.div>
						) : null}
					</AnimatePresence>
				</>
			)}
		</Menu>
	);
};
