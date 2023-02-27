import classNames from 'classnames';

interface Props {
	children: React.ReactNode;
	center?: boolean;
}
export const Title: React.FC<Props> = ({ children, center }) => {
	const classes = classNames({
		'text-3xl my-6 text-muted dark:text-white': true,
		'text-center': center,
	});

	return <h1 className={classes}>{children}</h1>;
};
