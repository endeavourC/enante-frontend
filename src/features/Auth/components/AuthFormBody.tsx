import { SubmitHandler } from 'react-hook-form/dist/types';
import { useForm } from 'react-hook-form';
import { Input } from '@/common/components/Forms';
import { FormData } from '@/features/Auth/components/login/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginPayload } from '@/features/Auth/API/login';
import {
	Notification,
	NotificationType,
} from '@/common/components/Notification';
import { useTranslation } from 'react-i18next';

interface Props {
	schema: any;
	onSubmit: SubmitHandler<LoginPayload>;
	loading: boolean;
	error: string | null | undefined;
	footer?: React.ReactNode;
	children: React.ReactNode;
}

export const AuthFormBody: React.FC<Props> = ({
	onSubmit,
	schema,
	children,
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
				{children}
			</form>
		</>
	);
};
