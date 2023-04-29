import { BrowserRouter } from 'react-router-dom';
import { DarkModeSwitch } from '@/common/components';
import { AnimatedRoutes } from './Routes';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<BrowserRouter>
			<Toaster position="bottom-center" gutter={12} />
			<DarkModeSwitch />
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default App;
