import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
import { register, RegisterPayload } from '@/features/Auth/API/register';
import { AuthFormBody, RegisterFormFooter } from './components';

export const Register = () => {
	const { loading, error } = useSelector((state: RootState) => state.login);
	const dispatch = useAppDispatch();

	const onSubmit = (data: RegisterPayload) => {
		dispatch(register(data));
	};

	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
					<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
						<Title center>Account registration</Title>
						<AuthFormBody
							loading={loading}
							error={error}
							onSubmit={onSubmit}
							footer={<RegisterFormFooter loading={loading} />}
						/>
					</div>
				</div>
			</Container>
		</Layout>
	);
};
