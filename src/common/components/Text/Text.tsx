import classNames from 'classnames';

interface Props {
	children: React.ReactNode;
	muted?: boolean;
	icon?: React.ReactNode;
}
export const Text: React.FC<Props> = ({ children, muted, icon }) => {
	const classes = classNames({
		'flex items-center flex-start': icon,
		'hover:text-primary': true,
		'text-muted': muted,
	});

	return (
		<p className={classes}>
			<span className="mr-4">{icon ? icon : null}</span>
			{children}
		</p>
	);
};
