import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PreferencesProvider } from '@/common/context/preferencesContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<PreferencesProvider>
			<App />
		</PreferencesProvider>
	</React.StrictMode>
);
