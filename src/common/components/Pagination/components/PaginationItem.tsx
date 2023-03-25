import classNames from 'classnames';

interface Props {
	isActive: boolean;
	index: number;
	onClick: () => void;
}

export const PaginationItem: React.FC<Props> = ({
	isActive,
	index,
	onClick,
}) => {
	const classes = classNames({
		'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium hover:bg-primary hover:text-white':
			true,
		'bg-primary text-white': isActive,
		'bg-white text-gray-700': !isActive,
	});

	return (
		<button className={classes} onClick={onClick}>
			{index + 1}
		</button>
	);
};
