import { SubmitHandler } from 'react-hook-form/dist/types';
import { useForm } from 'react-hook-form';
import { Button } from '@/common/components';
import { Input } from '@/common/components/Forms';
import { FormData, schema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginPayload } from '@/features/Login/API/login';
import {
	Notification,
	NotificationType,
} from '@/common/components/Notification';

interface Props {
	onSubmit: SubmitHandler<LoginPayload>;
	loading: boolean;
	error: string | null | undefined;
}

export const LoginFormBody: React.FC<Props> = ({
	onSubmit,
	loading,
	error,
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	return (
		<>
			{error && <Notification message={error} type={NotificationType.Error} />}
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
				<Button isLoading={loading} type="submit">
					Login
				</Button>
			</form>
		</>
	);
};
