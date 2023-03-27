import { ErrorBoundary } from 'react-error-boundary';

interface Props {
	children: React.ReactNode;
	isLoading: boolean;
	loader: React.ReactNode;
	error: React.ReactNode;
}

const ErrorComponent: React.FC<Pick<Props, 'error'>> = ({ error }) => (
	<div>{error}</div>
);

export const DataLoadHandler: React.FC<Props> = ({
	children,
	isLoading,
	loader,
	error,
}) => {
	if (isLoading) return <div>{loader}</div>;

	return (
		<ErrorBoundary fallback={<ErrorComponent error={error} />}>
			{children}
		</ErrorBoundary>
	);
};
