import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AuthFormBody, LoginFormFooter } from './components';
import { RootState, useAppDispatch } from '@/store';
import { login, LoginPayload } from '@/features/Auth/API/login';
import { schema } from './components/login/schema';

export const Login = () => {
	const { t } = useTranslation();

	const { loading, error } = useSelector((state: RootState) => state.login);
	const dispatch = useAppDispatch();

	const onSubmit = (data: LoginPayload) => {
		dispatch(login(data));
	};

	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
					<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
						<Title center>{t('login.form.title')}</Title>
						<AuthFormBody
							schema={schema}
							loading={loading}
							error={error}
							onSubmit={onSubmit}
							footer={<LoginFormFooter loading={loading} />}
						/>
					</div>
				</div>
			</Container>
		</Layout>
	);
};
