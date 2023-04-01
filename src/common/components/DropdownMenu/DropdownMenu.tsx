import { MenuItem } from '@/common/types/MenuItem';
import { Menu } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	items: MenuItem[];
	customButton?: React.ReactNode;
}

export const DropdownMenu: React.FC<Props> = ({ items, customButton }) => {
	return (
		<Menu as="div" className="relative inline-block">
			{({ open }) => (
				<>
					<Menu.Button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
						{customButton ? (
							customButton
						) : (
							<>
								<svg
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
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
							>
								<Menu.Items
									static
									className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								>
									{items.map(({ name, callback, icon }: MenuItem) => (
										<Menu.Item key={name}>
											{() => (
												<button
													onClick={callback}
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
