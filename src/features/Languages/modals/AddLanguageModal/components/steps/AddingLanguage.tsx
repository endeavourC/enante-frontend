import { Input } from '@/common/components/Forms';
import { useFormContext } from 'react-hook-form';
import { FormData } from '../../schema';

export const AddingLanguage = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<FormData>();

	return (
		<div className="w-full">
			<Input
				errors={errors.languageName}
				label="Nazwa języka"
				type="text"
				{...register('languageName')}
			/>
		</div>
	);
};
