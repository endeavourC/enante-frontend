import classNames from 'classnames';

interface Props {
	children: React.ReactNode;
	isActive: boolean;
}

export const ModalStepHeadlineText: React.FC<Props> = ({
	children,
	isActive,
}) => {
	const classes = classNames({
		'text-muted text-sm': true,
		'text-primary': isActive,
	});

	return <span className={classes}>{children}</span>;
};
