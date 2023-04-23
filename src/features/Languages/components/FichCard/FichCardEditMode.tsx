import { Button } from '@/common/components';
import { ButtonKind } from '@/common/components/Button/Button';
import { Input } from '@/common/components/Forms';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormData } from '../../modals/AddLanguageModal/schema';
import { Fich } from '../../types/fich';

interface Props {
	onCancel: () => void;
	insert: (index: number, fich: Fich) => void;
	id: number;
	name: string;
	translation: string;
}
export const FichCardEditMode: React.FC<Props> = ({ onCancel, insert, id }) => {
	const {
		register,
		getValues,
		trigger,
		formState: { errors, isValid },
	} = useFormContext<FormData>();

	const { t } = useTranslation();

	const handleCreate = () => {
		trigger([
			`fiches.${id}.name`,
			`fiches.${id}.description`,
			`fiches.${id}.translation`,
		]);

		if (isValid) {
			const { name, description, translation } = getValues(`fiches.${id}`);
			insert(id, {
				name,
				description,
				translation,
			});
		}
	};

	return (
		<div className="relative">
			<div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center justify-center cursor-pointer min-h-[100px] ">
				<Input
					errors={errors?.fiches?.[id]?.name}
					label={t('languages.addLanguageModal.addFichesStep.fichNameLabel')}
					type="text"
					{...register(`fiches.${id}.name`)}
				/>
				<Input
					errors={errors?.fiches?.[id]?.description}
					label={t('languages.addLanguageModal.addFichesStep.descriptionLabel')}
					type="text"
					{...register(`fiches.${id}.description`)}
				/>
				<Input
					errors={errors?.fiches?.[id]?.translation}
					label={t('languages.addLanguageModal.addFichesStep.translationLabel')}
					type="text"
					{...register(`fiches.${id}.translation`)}
				/>
				<div className="w-full grid grid-cols-2 gap-4 items-center justify-end">
					<Button kind={ButtonKind.Neutral} onClick={onCancel} type="button">
						{t('common.cancel')}
					</Button>
					<Button onClick={handleCreate} type="button">
						{t('common.add')}
					</Button>
				</div>
			</div>
		</div>
	);
};
