import { useTranslation } from 'react-i18next';
import { v4 as uuid } from 'uuid';
import { FichCard } from '@/features/Languages/components/FichCard';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { FormData } from '../../schema';
import { AddFichForm } from '../AddFichForm';
import React from 'react';

export const AddingFiches = () => {
	const {
		control,

		formState: { errors },
	} = useFormContext<FormData>();
	const { fields, append, prepend, remove, swap, move, insert } =
		useFieldArray<FormData>({
			control,
			name: 'fiches',
		});

	const handleCreateFich = () => {
		append({
			name: 'Miotła',
			description: 'do zamiatania',
			translation: 'Broom',
		});
	};

	const { t } = useTranslation();

	return (
		<div className="w-full">
			<p className="text-muted mt-3">
				Now, let's add some fiches! Click below to add a fich, you can also do
				this later.
			</p>
			<AddFichForm onClick={handleCreateFich} />

			<div className="w-full grid grid-cols-3 gap-4">
				{fields.map(({ translation, description, name }, index) => {
					return (
						<FichCard
							editable
							key={uuid()}
							id={index}
							name={name}
							translation={translation}
							description={description}
							onRemove={remove}
						/>
					);
				})}
			</div>
		</div>
	);
};
