import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { useTranslation } from 'react-i18next';
import { LoginForm } from './components/LoginForm';

export const Login = () => {
	const { t } = useTranslation();
	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
					<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
						<Title center>{t('login.form.title')}</Title>
						<LoginForm />
					</div>
				</div>
			</Container>
		</Layout>
	);
};
