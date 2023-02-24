import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';
import { useForm } from 'react-hook-form';
import { Button } from '@/common/Button';
import { Input } from '@/common/Form/Input';
import { FormData, schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
	onSubmit: SubmitHandler<FieldValues>;
	isLoading: boolean;
}

export const LoginFormBody: React.FC<Props> = ({ onSubmit, isLoading }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	return (
		<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col">
				<Input
					errors={errors.email}
					label="E-mail"
					type="email"
					{...register('email')}
				/>
			</div>
			<div className="flex flex-col">
				<Input
					errors={errors.password}
					type="password"
					label="Password"
					{...register('password')}
				/>
			</div>
			<Button isLoading={isLoading} type="submit">
				Login
			</Button>
		</form>
	);
};
