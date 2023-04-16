import { Input } from '@/common/components/Forms';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FormData } from '../../schema';

export const AddingLanguage = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormData>();

	const { t } = useTranslation();
	return (
		<div className="w-full">
			<Input
				errors={errors.languageName}
				label={t(
					'languages.addLanguageModal.addLanguageStep.addLanguageInputLabel'
				)}
				type="text"
				{...register('languageName')}
			/>
		</div>
	);
};
