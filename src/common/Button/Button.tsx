import classNames from 'classnames';

export enum ButtonKind {
	Primary = 'primary',
	Secondary = 'secondary',
}

interface Props {
	kind?: ButtonKind;
	children: React.ReactNode;
	isLoading?: boolean;
}

export const Button: React.FC<
	Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ kind = ButtonKind.Primary, children, isLoading, ...props }) => {
	const classes = classNames({
		'flex items-center justify-center text-white px-4 py-2  min-w-[130px] rounded-md transition-all duration-300  shadow-xl focus:outline-none focus:ring my-4':
			true,
		'bg-primary hover:shadow-primary/30 hover:bg-secondary':
			kind === ButtonKind.Primary,
		'cursor-pointer': !isLoading,
		'opacity-50 cursor-not-allowed': isLoading,
	});

	return (
		<button className={classes} {...props}>
			{isLoading && (
				<svg
					className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			)}

			{children}
		</button>
	);
};
