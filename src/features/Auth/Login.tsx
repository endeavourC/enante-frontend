import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AuthFormBody, LoginFormActions } from './components';
import { RootState, useAppDispatch } from '@/store';
import { login, LoginPayload } from '@/features/Auth/API/login';
import { schema } from './components/login/schema';
import { reset } from './reducer/loginSlice';
import { withResetStateWhenUnmount } from '@/features/Auth/hoc/withResetStateWhenUnmount';
import { motion } from 'framer-motion';

const LoginView = () => {
	const { t } = useTranslation();

	const { loading, error } = useSelector((state: RootState) => state.login);
	const dispatch = useAppDispatch();

	const onSubmit = (data: LoginPayload) => {
		dispatch(login(data));
	};

	return (
		<Layout>
			<Container>
				<motion.div
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -200 }}
					transition={{ type: 'spring' }}
				>
					<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
						<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
							<Title center>{t('login.form.title')}</Title>
							<AuthFormBody
								schema={schema}
								loading={loading}
								error={error}
								onSubmit={onSubmit}
							>
								<LoginFormActions loading={loading} />
							</AuthFormBody>
						</div>
					</div>
				</motion.div>
			</Container>
		</Layout>
	);
};

export const Login = withResetStateWhenUnmount(LoginView, reset);

export default Login;
