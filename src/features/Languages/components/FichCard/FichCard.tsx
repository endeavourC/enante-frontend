import { useCallback, useState } from 'react';
import { FichCardEditMode } from './FichCardEditMode';
import { Fich } from '@/features/Languages/types/fich';
import { FichCardPreviewMode } from './FichCardPreviewMode';

interface Props {
	defaultEditMode?: boolean;
	id: number;
	name: string;
	translation: string;
	description?: string;
	editable?: boolean;
	insert: (index: number, fich: Fich) => void;
	onRemove: (index: number) => void;
}

export const FichCard: React.FC<Props> = ({
	defaultEditMode = false,
	id,
	name,
	translation,
	description,
	editable = false,
	onRemove,
	insert,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [editMode, setEditMode] = useState(defaultEditMode);

	const onDelete = useCallback(() => {
		onRemove(id);
	}, [id, onRemove]);

	const onEdit = useCallback(() => {
		setEditMode((prevState) => !prevState);
	}, []);

	const onCancel = useCallback(() => {
		if (defaultEditMode) {
			onRemove(id);
		} else {
			setEditMode(false);
		}
	}, [defaultEditMode, id, onRemove]);

	const toggleFlipped = () => {
		setIsFlipped((prev) => !prev);
	};

	if (editMode) {
		return (
			<FichCardEditMode
				id={id}
				onCancel={onCancel}
				insert={insert}
				name={name}
				translation={translation}
			/>
		);
	}

	return (
		<FichCardPreviewMode
			isFlipped={isFlipped}
			editable={editable}
			onEdit={onEdit}
			onDelete={onDelete}
			id={id}
			name={name}
			translation={translation}
			description={description}
			toggleFlipped={toggleFlipped}
		/>
	);
};
