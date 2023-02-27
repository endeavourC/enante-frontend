import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { LoginForm } from './LoginForm/LoginFom';

export const Login = () => {
	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
					<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
						<Title center>Login to Enante</Title>
						<LoginForm />
					</div>
				</div>
			</Container>
		</Layout>
	);
};
