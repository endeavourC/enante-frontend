import { ErrorBoundary } from 'react-error-boundary';

interface Props {
	children: React.ReactNode;
	error: React.ReactNode;
}

const ErrorComponent: React.FC<Pick<Props, 'error'>> = ({ error }) => (
	<div>{error}</div>
);

export const ErrorHandler: React.FC<Props> = ({ children, error }) => {
	return (
		<ErrorBoundary fallback={<ErrorComponent error={error} />}>
			{children}
		</ErrorBoundary>
	);
};
