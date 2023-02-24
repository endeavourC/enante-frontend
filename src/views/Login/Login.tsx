import { Container } from '@/common/Container';
import { Title } from '@/common/Title';
import { LoginForm } from './LoginForm/LoginFom';

export const Login = () => {
	return (
		<Container>
			<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900">
				<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800">
					<Title center>Login to Enante</Title>
					<LoginForm />
				</div>
			</div>
		</Container>
	);
};
