import { Container, ScreenOverlayLoader, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
import { register, RegisterPayload } from '@/features/Auth/API/register';
import { AuthFormBody, RegisterFormActions } from './components';
import { schema } from './components/register/schema';
import { motion } from 'framer-motion';

export const Register = () => {
	const { loading, error } = useSelector((state: RootState) => state.register);
	const dispatch = useAppDispatch();

	const onSubmit = (data: RegisterPayload) => {
		dispatch(register(data));
	};

	return (
		<Layout>
			<Container>
				<motion.div
					initial={{ opacity: 0, x: 200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ type: 'spring' }}
					exit={{ opacity: 0, x: -200 }}
				>
					<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
						<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
							<Title center>Account registration</Title>
							<AuthFormBody
								schema={schema}
								loading={loading}
								error={error}
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
