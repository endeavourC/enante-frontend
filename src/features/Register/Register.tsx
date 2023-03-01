import { Container, Title } from '@/common/components';
import { Layout } from '@/common/components/Layout';

export const Register = () => {
	return (
		<Layout>
			<Container>
				<div className="flex items-center justify-center h-screen bg-white dark:bg-slate-900 transition-all">
					<div className="max-w-2xl w-full shadow-muted/30 p-6 shadow-lg bg-white dark:bg-slate-800 dark:shadow-none transition-all">
						<Title center>Account registration</Title>
					</div>
				</div>
			</Container>
		</Layout>
	);
};
