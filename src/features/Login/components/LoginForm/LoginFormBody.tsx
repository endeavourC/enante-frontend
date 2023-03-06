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
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
	const { t } = useTranslation();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	return (
		<>
			{error && (
				<Notification closable message={error} type={NotificationType.Error} />
			)}
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col">
					<Input
						errors={errors.email}
						label={t('form.email.label')}
						type="email"
						{...register('email')}
					/>
				</div>
				<div className="flex flex-col">
					<Input
						errors={errors.password}
						type="password"
						label={t('form.password.label')}
						{...register('password')}
					/>
				</div>
				<div className="flex items-center justify-start">
					<Button isLoading={loading} type="submit">
						{t('login.text')}
					</Button>
					<span className="mx-4 text-sm text-muted dark:text-white">
						{t('login.or')}
					</span>
					<Link className="text-blue-400 hover:text-primary " to="/register">
						{t('register.text')}
					</Link>
				</div>
			</form>
		</>
	);
};
