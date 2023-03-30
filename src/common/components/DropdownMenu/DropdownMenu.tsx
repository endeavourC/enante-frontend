import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

export const DropdownMenu: React.FC<Props> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const button = useRef<HTMLButtonElement>(null);
	const menu = useRef<HTMLDivElement>(null);

	const onClick = () => {
		setIsOpen(!isOpen);
	};

	const stopPropagation = (ev: any) => {
		ev.stopPropagation();
	};

	useEffect(() => {
		if (isOpen && menu.current && button.current) {
			menu.current.style.top = `${
				button.current.getBoundingClientRect().bottom
			}px`;
			menu.current.style.left = `${
				button.current.getBoundingClientRect().left -
				menu.current.getBoundingClientRect().width / 2
			}px`;
		}
	}, [isOpen]);

	return (
		<div className="relative">
			<button
				ref={button}
				onClick={onClick}
				className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				type="button"
			>
				<svg
					className="w-6 h-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
				</svg>
			</button>
			<AnimatePresence>
				{isOpen ? (
					<div onClick={onClick} className="fixed top-0 left-0 w-full h-full">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							ref={menu}
							onClick={stopPropagation}
							className="z-10 top-full left-1/2 -translate-x-1/2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
						>
							<ul className=" text-sm text-gray-700 dark:text-gray-200 w-full">
								{children}
							</ul>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
		</div>
	);
};
