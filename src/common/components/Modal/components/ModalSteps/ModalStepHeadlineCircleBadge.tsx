import classNames from 'classnames';

interface Props {
	children: React.ReactNode;
	isActive: boolean;
}

export const ModalStepHeadlineCircleBadge: React.FC<Props> = ({
	children,
	isActive,
}) => {
	const classes = classNames({
		'w-8 h-8 flex items-center justify-center border-[1px]  rounded-full mr-2 border-muted text-muted':
			true,
		'border-primary text-primary': isActive,
	});

	return <span className={classes}>{children}</span>;
};
