import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DarkModeSwitch } from '@/common/components';
import { Login } from './features/Auth';
import { Register } from './features/Auth/';

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
