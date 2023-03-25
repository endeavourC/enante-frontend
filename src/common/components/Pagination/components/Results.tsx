interface Props {
	perPage: number;
	total: number;
}

export const Results: React.FC<Props> = ({ perPage, total }) => {
	return (
		<div>
			<p className="text-sm text-gray-700">
				Showing <span className="font-medium">{perPage}</span> of{' '}
				<span className="font-medium">{total}</span> results
			</p>
		</div>
	);
};
