import { useTranslation } from 'react-i18next';
import { FichCard } from '@/features/Languages/components/FichCard/FichCard';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormData } from '../../schema';
import { AddFichForm } from '../AddFichForm';

export const AddingFiches = () => {
	const { control } = useFormContext<FormData>();
	const { fields, append, remove, update } = useFieldArray<FormData>({
		control,
		name: 'fiches',
	});

	const handleCreateFich = () => {
		append({
			name: '',
			description: '',
			translation: '',
			editMode: true,
		});
	};

	return (
		<div className="w-full">
			<p className="text-muted mt-3">
				Now, let's add some fiches! Click below to add a fich, you can also do
				this later.
			</p>
			<AddFichForm onClick={handleCreateFich} />

			<div className="w-full grid grid-cols-2 gap-4">
				{fields.map(
					({ id, editMode, translation, description, name }, index) => {
						return (
							<FichCard
								defaultEditMode={editMode}
								editable
								insert={update}
								key={id}
								id={index}
								name={name}
								translation={translation}
								description={description}
								onRemove={remove}
							/>
						);
					}
				)}
			</div>
		</div>
	);
};
