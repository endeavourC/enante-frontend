import { Button, Container } from '@/common/components';
import { Layout } from '@/common/components/Layout';

const PanelView = () => {
	const onLogout = () => {
		localStorage.removeItem('AUTH_TOKEN');

		window.location.reload();
	};

	return (
		<Layout>
			<Container>
				Panel
				<Button onClick={onLogout}>Logout</Button>
			</Container>
		</Layout>
	);
};

export default PanelView;
