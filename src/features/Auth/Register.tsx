import { Container, Title, Layout } from '@/common/components';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
import { register, RegisterPayload } from '@/features/Auth/API/register';
import { AuthFormBody, RegisterFormActions } from './components';
import { schema } from './components/register/schema';
import { motion } from 'framer-motion';
import {
	Notification,
	NotificationType,
} from '@/common/components/Notification';

export const Register = () => {
	const { loading, error } = useSelector((state: RootState) => state.register);
	const dispatch = useAppDispatch();

	const onSubmit = (data: RegisterPayload) => {
		dispatch(register(data));
	};

	const errors = error?.messages?.errors.map(
		(error: any) => error.message || []
	);

	return (
		<Layout>
			<Container>
				<motion.div>
					<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
						<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
							<Title center>Account registration</Title>
							{errors?.map((error: string) => (
								<div className="my-3" key={error}>
									<Notification type={NotificationType.Error} message={error} />
								</div>
							))}
							<AuthFormBody
								schema={schema}
								loading={loading}
								onSubmit={onSubmit}
							>
								<RegisterFormActions loading={loading} />
							</AuthFormBody>
						</div>
					</div>
				</motion.div>
			</Container>
		</Layout>
	);
};

export default Register;
