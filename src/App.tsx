import { BrowserRouter } from 'react-router-dom';
import { DarkModeSwitch } from '@/common/components';
import { AnimatedRoutes } from './common/Routes/AnimatedRoutes';

function App() {
	return (
		<BrowserRouter>
			<DarkModeSwitch />
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default App;
