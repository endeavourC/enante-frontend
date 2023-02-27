import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeSwitch } from '@/common/components';
import { Login } from './views/Login';

function App() {
	return (
		<BrowserRouter>
			<DarkModeSwitch />
			<Routes>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
