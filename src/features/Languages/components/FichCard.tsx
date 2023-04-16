interface Props {
	name: string;
	translation: string;
	description?: string;
	editable?: boolean;
}

export const FichCard: React.FC<Props> = ({
	name,
	translation,
	description,
	editable = false,
}) => {
	return (
		<div className="p-4 shadow-md rounded-md">
			<h1>{name}</h1>
			<h2>{translation}</h2>
			<p>{description}</p>
		</div>
	);
};
