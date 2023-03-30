interface Props {
	children: React.ReactNode;
	onClick: () => void;
}

export const DropdownMenuItem: React.FC<Props> = ({ children, onClick }) => {
	return (
		<li>
			<button
				onClick={onClick}
				className="flex items-center justify-start text-left w-full px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
			>
				{children}
			</button>
		</li>
	);
};
