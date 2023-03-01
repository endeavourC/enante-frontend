import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeSwitch } from '@/common/components';
import { Login } from './features/Login';
import { Register } from './features/Register';

function App() {
	return (
		<BrowserRouter>
			<DarkModeSwitch />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
